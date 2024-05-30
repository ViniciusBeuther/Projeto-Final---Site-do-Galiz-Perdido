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
}

export default Database;
