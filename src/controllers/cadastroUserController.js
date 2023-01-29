const CadastroUserModel = require("../modells/cadastrouser")

class cadastroUserController {
    async cadastroUser(req, res) {
        const { user,company,phone, ceo, mail, skill, passWord,} = req.body;

        // Verificar se o pc já existe:

        const userAlreadExists = await CadastroUserModel.findOne({mail});

        if(userAlreadExists){
            return res.status(404).json({ message: "Email já cadastrado." });
        }

        const createUserController = await CadastroUserModel.create(req.body);
        return res.status(200).json(createUserController);
    }
    async getAllUsers(req, res) {
        const pcs = await CadastroUserModel.find();
        return res.status(200).json(pcs);
    }
    async searcUser(req, res) {
        try {
            const { id } = req.params;
            const userFindId = await CadastroUserModel.findById(id);

            // Se não encontrar o pc pelo id:

            if (!userFindId) {
                return res.status(404).json({ message: "Usuário não encontrado!" });
            }

            // Se encontrar ele retorna o pc cadastrado:

            return res.status(200).json(userFindId);

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }
    }
    async updateUser(req, res) {
        try {
            const { id } = req.params;

            // Para encontrar o pc ele use o id e para atualizar ele usa o req.body:
            await CadastroUserModel.findByIdAndUpdate(id, req.body);
            
            return res.status(200).json({ message: "Usuário atualizado com sucesso" });

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }

    }
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            // Para encontrar o pc ele use o id e para atualizar ele usa o req.body:

            const userDelete = await CadastroUserModel.findByIdAndDelete(id, req.body);

            if (!userDelete) {
                return res.status(404).json({ message: "Computador não encontrado!" });
            }

            // Se encontrar ele retorna o pc cadastrado:

            return res.status(200).json({ message: "Computador excluído com sucesso" });

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }
    }
}


module.exports = new cadastroUserController();