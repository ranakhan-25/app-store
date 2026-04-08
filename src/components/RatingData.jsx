import React from 'react'

const RatingData = (totalReviews,sortedRatings) => {
  return (
    <div className="p-10 bg-slate-50 rounded-xl mt-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">Ratings</h2>
              <p className="text-gray-500 text-sm">
                Based on {totalReviews.toLocaleString()} reviews
              </p>
            </div>

            <div className="space-y-6">
              {sortedRatings.map((item, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <span className="w-14 text-sm font-medium text-gray-700 whitespace-nowrap">
                    {item.name}
                  </span>

                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-500 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="w-20 text-right">
                    <span className="text-sm font-semibold text-gray-700">
                      {item.formattedCount}
                    </span>
                  </div>

                  <div className="w-12 text-right text-xs text-gray-500 font-medium">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default RatingData