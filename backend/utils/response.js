class Response {
    constructor(message = null, data = null) {
        this.data = data;
        this.message = message;
    }

    success(res) {
        res.status(200).json({
            status: true,
            data: this.data,
            message: this.message ?? "İşlem Başarılı..."
        });
    }

    created(res) {
        res.status(201).json({
            status: true,
            data: this.data,
            message: this.message ?? "İşlem Başarılı..."
        });
    }
}

module.exports = Response;
