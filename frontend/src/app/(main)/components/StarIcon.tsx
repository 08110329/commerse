import { CiStar } from "react-icons/ci";

export const StarIcon = () => {
  const iconStars = [{ id: 1, icon: <CiStar /> }];
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
