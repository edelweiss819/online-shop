import React from 'react';

const StarRating = ({
                        rating,
                        onRatingChange
                    }: {
    rating: number;
    onRatingChange: (rating: number) => void;
}) => {
    const starsCount = 5;

    return (
        <div className="flex items-center">
            {[...Array(starsCount)].map((_, index) => (
                <label key={index} className={'-mt-[2px]'}>
                    <input
                        type="radio"
                        value={index + 1}
                        checked={rating === index + 1}
                        onChange={() => onRatingChange(index + 1)}
                        className="hidden"
                    />
                    <span
                        className={`cursor-pointer text-4 ${
                            rating >= index + 1 ? 'text-warning' : 'text-gray-2'
                        }`}
                    >
            ★
          </span>
                </label>
            ))}
        </div>
    );
};

export default StarRating;
