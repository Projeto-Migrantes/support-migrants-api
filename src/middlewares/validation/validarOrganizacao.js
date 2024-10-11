import organizacaoEsquema from '../../schemas/organizacaoSchema.js'

const validar = (req, res, next) => {
    const { error, valor } = organizacaoEsquema.validate(req.body, { abortEarly: false });

    if(error){
        const errosDetalhados = error.details.map(detail => detail.message);
        return res.status(400).json( {erros: errosDetalhados} );
    }

    next();
};

export default validar;