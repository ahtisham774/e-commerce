import { BiSolidStar } from 'react-icons/bi';

const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }).map((_, index) => {
        const fill = rating - index; // Calculate the fill level for the current star
        let color;

        if (fill >= 1) {
          color = '#FFAD33'; // Fully highlighted
        } else if (fill > 0) {
          // Partially highlighted
          const gradientPercentage = Math.round(fill * 100); // Convert to percentage
          return (
            <div
              key={index}
              className="relative"
              style={{
                width: '1rem', // Adjust the size of the star as needed
                height: '1rem',
                position: 'relative',
              }}
            >
              <BiSolidStar
                style={{ color: '#D3D3D3', position: 'absolute', top: 0, left: 0 }}
              />
              <div
                style={{
                  width: `${gradientPercentage}%`,
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                }}
              >
                <BiSolidStar
                  style={{ color: '#FFAD33', position: 'absolute', top: 0, left: 0 }}
                />
              </div>
            </div>
          );
        } else {
          color = '#D3D3D3'; // Unhighlighted
        }

        return <BiSolidStar key={index} style={{ color }} />;
      })}
    </div>
  );
};

export default Rating;
