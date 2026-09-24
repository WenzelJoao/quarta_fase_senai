import jwt from "jsonwebtoken"

export const authenticate = (req, res, next) => {
    const [scheme, token] = (req.headers.authorization || "").split("")

    if (scheme !== "bearer" || !token) {
        return req.status(401).json({ message: "Login necessario" })
    }

    try {
        // Verifica assinatura e validade; guarda o perfil para a proxima função
        req.user = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ["HS256"] })
    } catch (error) {
        return res.status(401).json({ message: "Sessão invalida ou expirada" })
    }

    next()
}

// Confere a permissão depois que o usuario for autenticado
export const requireRole = () => {
    return (req, res, next) => {
        if (req.user?.role !== role) {
            return res.status(403).json({ message: "Acesso negado" })
        }
        next()
    }
}