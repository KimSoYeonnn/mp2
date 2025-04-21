import { useNavigate } from "react-router";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

function Pagination({ currentPage, totalPages }: PaginationProps) {
    const navigate = useNavigate();

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            navigate(`?page=${page}`);
        }
    };

    const createPageNumbers = () => {
        const start = Math.floor((currentPage - 1) / 10) * 10 + 1;
        const end = Math.min(start + 9, totalPages);
        const pages = [];

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    const pageNumbers = createPageNumbers();

    return (
        <div className="flex justify-center items-center gap-2 mt-6 text-lg">
            {pageNumbers[0] > 1 && (
                <button
                    onClick={() => goToPage(pageNumbers[0] - 10)}
                    className="px-2 py-1 text-gray-700 hover:text-blue-500 transition"
                >
                    &#x25C0;
                </button>
            )}

            {pageNumbers.map((num) => (
                <button
                    key={num}
                    onClick={() => goToPage(num)}
                    className={`px-3 py-1 rounded 
                        ${num === currentPage 
                            ? "bg-blue-500 text-white font-bold" 
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"}
                    `}
                >
                    {num}
                </button>
            ))}

            {pageNumbers[pageNumbers.length - 1] < totalPages && (
                <button
                    onClick={() => goToPage(pageNumbers[0] + 10)}
                    className="px-2 py-1 text-gray-700 hover:text-blue-500 transition"
                >
                    &#x25B6;
                </button>
            )}
        </div>
    );
}

export default Pagination;
