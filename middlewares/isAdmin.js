const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).json({ error: "Access Denied: Access Denied: Admins Only" });
    }
    next();
};

export default isAdmin;