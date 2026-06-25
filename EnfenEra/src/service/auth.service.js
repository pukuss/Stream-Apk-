import { appwriteConfig } from "../appwrite/config/appwrite.config";
import { Client, Account, TablesDB, Storage, ID, Role, Databases, Permission } from 'appwrite'

export class AuthService {
    client = new Client();
    account;
    database;

    constructor() {
        this.client
            .setEndpoint(appwriteConfig.ENDPOINT)
            .setProject(appwriteConfig.PROJECT_ID)
        this.account = new Account(this.client);
        this.database = new Databases(this.client);
    }

    //sign up
    async signUp({ email, password, name, }) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name,);
            const session = await this.account.createEmailPasswordSession({ email, password });



            const profile = await this.database.createDocument(
                appwriteConfig.DATABASE_ID, appwriteConfig.tabels_id.USER_PROFILE_DATA, user.$id,
                {
                    userId: user.$id,
                    name: user.name,
                    email: user.email,
                    role: "user",
                    rank: "Bronze",
                    isVerified: false,
                    status: "active"
                },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                    // Permission.create(Role.user(user.$id))
                ]
            )

            console.log("profile Data Show => ", profile);
            console.log("Sassion create =>", session);


            return {
                profile,
                success: true,
                user,
                session
            }

        }
        catch (error) {
            console.error("signup error : ", error);
            throw error;

            return {
                success: false,
                message: error.message,
                code: error.code
            };
        }
    }


    //Logiin
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({ email, password });
            
        }


        catch (error) {
            throw error;
            console.error("login error", error);
        }
    }

    //LogOut
    async logout() {
        try {
            await this.account.deleteSession({
                sessionId: "current",
            });
            

            return true;
        } catch (error) {
            console.error("logout service error => :", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            const profile = await this.database.getDocument({
                databaseId: appwriteConfig.DATABASE_ID,
                collectionId: appwriteConfig.tabels_id.USER_PROFILE_DATA,
                documentId: user.$id,
            }
            );

            return {
                profile,
                user
            }
        }
        catch (error) {
            return console.log("getCurrentuser service Error =>", error);
            ;
        }
        finally {
            console.log("Sucessful Auto Login");

        }
    }

    async Password_Recovery({ email, secret_Url }) {
        try {
            return await this.account.createRecovery(email, secret_Url)
        } catch (error) {
            throw error
            console.error("password recovery error :", error)
        }
    }

    async Update_Password({ UserId, secret, passwd }) {
        try {
            return this.account.updateRecovery(UserId, secret, passwd)
        } catch (error) {
            throw error
        }
    }

    // async Wallet() {
    //     const user = this.account.get();
    //     const uid = (await user).$id;

    //     try {
    //         const wallet = await this.database.getDocument()
    //     } 
    //     catch (error) {
            
    //     }


    // }
}

const authService = new AuthService();
export default authService;
