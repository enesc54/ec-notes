const ApiError = require("../utils/error");

const errorHandler = (err, req, res, next) => {
  
    if (err instanceof ApiError) {
        return res
            .status(err.statusCode || 400)
            .json({ success: false, message: err.message });
    }
    return res.status(500).json({
        success: false,
        message: "Bir hata ile karşılaşıldı. Lütfen tekrar deneyiniz..."
    });
};

module.exports = errorHandler;
