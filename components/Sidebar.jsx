const Sidebar = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed top-15.5 left-0 w-64 h-screen bg-secondary text-light p-4 shadow-lg">
            
            <ul className="space-y-2">
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Settings</li>
            </ul>
        </div>
    );
};

export default Sidebar;
