import React from 'react';

type StarRatingProps = {
    rating: number;
    onRatingChange?: (rating: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({
                                                   rating,
                                                   onRatingChange
                                               }) => {
    const starsCount = 5;

    const handleRatingChange = (newRating: number) => {
        if (onRatingChange) {
            onRatingChange(newRating);
        }
    };

    return (
        <div className="flex items-center">
            {[...Array(starsCount)].map((_, index) => {
                const starRating = index + 1;
                return (
                    <label key={index} className="-mt-[2px]">
                        {onRatingChange ? (
                            <input
                                type="radio"
                                value={starRating}
                                checked={rating === starRating}
                                onChange={() => handleRatingChange(starRating)}
                                className="hidden"
                            />
                        ) : null}
                        <span
                            className={`cursor-pointer text-4 ${
                                rating >= starRating ? 'text-warning' : 'text-gray-2'
                            }`}
                        >
              ★
            </span>
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
