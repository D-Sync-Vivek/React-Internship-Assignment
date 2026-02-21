interface FooterProps {
    currentPage: number;
    onPageChange: (page: number) => void;
    totalPageRecords: number;
}

const Footer = ({ currentPage, onPageChange, totalPageRecords }: FooterProps) => {
    const startIndex = (currentPage - 1) * 12 + 1;
    return (
        <footer className="flex justify-between gap-4">
            <div>
                Showing {startIndex } to {currentPage * 12} of {totalPageRecords} entries
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded-md hover:cursor-pointer"
                >
                    Previous
                </button>

                <span className="px-3 py-2 border rounded-md hover:cursor-pointer">{currentPage}</span>

                <button onClick={() => onPageChange(currentPage + 1)} className="px-3 py-2 border rounded-md hover:cursor-pointer">
                    Next
                </button>
            </div>
        </footer>
    );
};

export default Footer