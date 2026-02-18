interface FooterProps {
    currentPage: number;
    onPageChange: (page: number) => void;
    totalPageRecords: number;
}

const Footer = ({ currentPage, onPageChange, totalPageRecords }: FooterProps) => {
    return (
        <footer className="flex justify-between gap-4">
            <div>
                Showing {currentPage} of {totalPageRecords} entries
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 border rounded-md hover:cursor-pointer"
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