import { appwriteConfig } from "../appwrite/config/appwrite.config";
import { Client, Account, TablesDB, Storage, ID, Role } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(appwriteConfig.ENDPOINT)
            .setProject(appwriteConfig.PROJECT_ID)
        this.account = new Account(this.client);
    }

    async signUp({ email, password, name, }) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name, );
            if (user) {
                return this.login({ email, password });
                console.log("sucessfully log in");
            }
            return {
                success : true,
                user,
            }

        }
        catch (error) {
            console.error("signup error : ", error);
            throw error;

            return {
                success : false,
                message: error.message,
                code : error.code
            };
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({ email, password });
        }

        catch (error) {
            throw error;
            console.error("login error", error);
        }
    }

    async logout() {
        try {
            await this.account.deleteSession({
                sessionId: "current",
            });

            return true;
        } catch (error) {
            console.error("logout error:", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            return null;
        }
    }

     async Password_Recovery({email,secret_Url}){
        try {
            return await this.account.createRecovery(email,secret_Url)
        } catch (error) {
            throw error
            console.error("password recovery error :" , error)
        }
    }

    async Update_Password({UserId , secret , passwd}) {
        try {
            return this.account.updateRecovery(UserId,secret,passwd)
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();
export default authService;
