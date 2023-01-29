const CadastroPcModel = require("../modells/cadastroPcModel")

class cadastroController {
    async cadastroPc(req, res) {
        const { asset, disp, msg, serviceTag, user, status} = req.body;

        // Verificar se o pc já existe:

        const pcAlreadExists = await CadastroPcModel.findOne({asset});

        if(pcAlreadExists){
            return res.status(404).json({ message: "Este Asset já existe no banco" });
        }

        const createPcController = await CadastroPcModel.create(req.body);
        return res.status(200).json(createPcController);
    }
    async index(req, res) {
        const pcs = await CadastroPcModel.find();
        return res.status(200).json(pcs);
    }
    async show(req, res) {
        try {
            const { id } = req.params;
            const pcFindId = await CadastroPcModel.findById(id);

            // Se não encontrar o pc pelo id:

            if (!pcFindId) {
                return res.status(404).json({ message: "Computador não encontrado!" });
            }

            // Se encontrar ele retorna o pc cadastrado:

            return res.status(200).json(pcFindId);

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;

            // Para encontrar o pc ele use o id e para atualizar ele usa o req.body:
            await CadastroPcModel.findByIdAndUpdate(id, req.body);
            
            return res.status(200).json({ message: "Computador atualizado com sucesso" });

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }

    }
    async exclude(req, res) {
        try {
            const { id } = req.params;
            // Para encontrar o pc ele use o id e para atualizar ele usa o req.body:

            const pcDelete = await CadastroPcModel.findByIdAndDelete(id, req.body);

            if (!pcDelete) {
                return res.status(404).json({ message: "Computador não encontrado!" });
            }

            // Se encontrar ele retorna o pc cadastrado:

            return res.status(200).json({ message: "Computador excluído com sucesso" });

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }
    }
}


module.exports = new cadastroController();