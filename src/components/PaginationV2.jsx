import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PaginationV2 = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center mt-10 mb-8 space-x-2">
            {/* prev */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-black flex items-center justify-center disabled:opacity-30">
                <ChevronLeft size={20} />
            </button>

            {/* halaman */}
            {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                const isActive = page === currentPage;
                return (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 rounded-full cursor-pointer flex items-center justify-center font-bold transition-colors
              ${isActive
                                ? 'bg-black text-white'
                                : 'border-2 border-black text-black hover:bg-black hover:text-white'
                            }`}>
                        {page}
                    </button>
                );
            })}

            {/* next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 cursor-pointer rounded-full border-2 border-black flex items-center justify-center disabled:opacity-30">
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

export default PaginationV2;
