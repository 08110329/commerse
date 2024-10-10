
import { FaStar } from "react-icons/fa";

export const StarIcon = () => {
  const iconStars = [{ id: 1, icon: <FaStar /> }];
  return (
    <div className="flex">
      <div className="flex gap-1">
        {iconStars.map((iconStar) => (
          <div className="text-[yellow] text-2xl" key={iconStar.id}>
            {iconStar.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
