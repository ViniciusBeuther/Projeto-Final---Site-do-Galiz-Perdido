// Database.js
class Database {
    constructor(supabase) {
        this.supabase = supabase;
        this.data = this.init();
    }

    async init() {
        this.data = await this.getData();
        return this.data;
    }

    async getData() {
        try {
            let { data: animals, error } = await this.supabase
                .from('animals')
                .select('*');
            if (error) {
                throw error;
            }
            this.data = animals;
            return this.data;
        } catch (error) {
            console.log("Algo deu errado... - ", error);
            return null;
        }
    }

    async pushImageToStorage(file) {
        const fileName = `${Date.now()}-${file.name}`;
        try {
            let { data, error } = await this.supabase.storage
                .from('animals_image') 
                .upload(fileName, file);
            if (error) {
                throw error;
            }
            console.log("Imagem carregada com sucesso:", data);
            return data;
        } catch (error) {
            console.log("Erro ao carregar imagem:", error);
            return null;
        }
    }
}

export default Database;
