import { appwriteConfig } from "../appwrite/config/appwrite.config";
import {
    Client,
    ID,
    Databases,
    TablesDB,
    Storage,
    Account,
    Query,
} from "appwrite";

export class AdminService {
    client = new Client();
    account;
    database;

    constructor() {
        this.client
            .setEndpoint(appwriteConfig.ENDPOINT)
            .setProject(appwriteConfig.PROJECT_ID);
        this.account = new Account(this.client);
        this.database = new Databases(this.client);
    }

    async getRequest() {
        try {
            const user = await this.account.get();

            const res = await this.database.listDocuments(
                appwriteConfig.DATABASE_ID,
                appwriteConfig.tabels_id.TOURNAMENT_REQUEST,
                [Query.orderDesc("$createdAt")],
            );

            return res;
        } catch (error) {
            console.log("Admin service getRequest error 30 ==> ", error);
            return error;
        }
    }

    async updateRequest(documentId, status) {
        try {
            return await this.database.updateDocument(
                appwriteConfig.DATABASE_ID,
                appwriteConfig.tabels_id.TOURNAMENT_REQUEST,
                documentId,
                {
                    status: status,
                },
            );
        } catch (error) {
            throw error;
        }
    }
}

const adminService = new AdminService();
export default adminService;
