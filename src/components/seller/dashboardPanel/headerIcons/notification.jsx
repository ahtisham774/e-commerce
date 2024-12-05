import React, { useState, useEffect } from 'react';
import Dropdown from './dropdown';
import axios from 'axios';
import { API_URL } from '../../../API';
import { useAuth } from '../../../../context/useAuth';
import { formatDate } from '../../../../utils/format';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  let userId = user?._id;
  // Fetch notifications from the backend
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/notification/getnotifications/${userId}`);
        setNotifications(response.data.notifications);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [userId]);

  // Mark a single notification as read
  const markAsRead = async (id) => {
    try {
      await axios.put(`${API_URL}/notification/markAsRead/${id}`);
      setNotifications((prev) =>
        prev.map((notification) =>
          notification._id === id ? { ...notification, read: true } : notification
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  // Mark all notifications as read
  const markAllAsRead = async () => {
    try {
      await axios.put(`${API_URL}/notification/markAllAsRead/${userId}`);
      setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })));
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  return (
    <Dropdown
      icon={
        <svg
          className="size-6"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.66667 23.3333H11.6667C11.6667 23.9522 11.9125 24.5457 12.3501 24.9832C12.7877 25.4208 13.3812 25.6667 14 25.6667C14.6188 25.6667 15.2123 25.4208 15.6499 24.9832C16.0875 24.5457 16.3333 23.9522 16.3333 23.3333H23.3333C23.6428 23.3333 23.9395 23.2104 24.1583 22.9916C24.3771 22.7728 24.5 22.4761 24.5 22.1667C24.5 21.8572 24.3771 21.5605 24.1583 21.3417C23.9395 21.1229 23.6428 21 23.3333 21V12.8333C23.3333 10.358 22.35 7.98401 20.5997 6.23367C18.8493 4.48333 16.4754 3.5 14 3.5C11.5246 3.5 9.15068 4.48333 7.40034 6.23367C5.65 7.98401 4.66667 10.358 4.66667 12.8333V21C4.35725 21 4.0605 21.1229 3.84171 21.3417C3.62292 21.5605 3.5 21.8572 3.5 22.1667C3.5 22.4761 3.62292 22.7728 3.84171 22.9916C4.0605 23.2104 4.35725 23.3333 4.66667 23.3333ZM7 12.8333C7 10.9768 7.7375 9.19634 9.05025 7.88359C10.363 6.57083 12.1435 5.83333 14 5.83333C15.8565 5.83333 17.637 6.57083 18.9497 7.88359C20.2625 9.19634 21 10.9768 21 12.8333V21H7V12.8333Z"
            fill="#ED1270"
          />
        </svg>
      }
      unreadCount={notifications.filter((notification) => !notification.read).length}
      title="Notifications"
      align="left"
      data={notifications}
      renderItem={(notification) => (
        <div
          key={notification._id}
          className={`flex items-center w-full gap-3 p-2 rounded-md ${
            notification.read ? 'bg-gray-100' : 'bg-white'
          }`}
        >
          <div className="grow">
            <div className="text-sm font-medium text-gray-800">{notification.type}</div>
            <div className="text-xs text-gray-500">{notification.message}</div>
            <div className="text-[10px] font-medium text-gray-400">{formatDate(notification.createdAt)}</div>
          </div>
          {!notification.read && (
            <button
              onClick={() => markAsRead(notification._id)}
              className="text-xs whitespace-nowrap text-blue-600 hover:underline"
            >
              Mark as Read
            </button>
          )}
        </div>
      )}
      footer={
        <button
          onClick={markAllAsRead}
          className="w-full text-center text-sm text-blue-600 hover:underline"
        >
          Mark All as Read
        </button>
      }
    />
  );
}

export default Notifications;
