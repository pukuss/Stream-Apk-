// import e from "express";
import { appwriteConfig } from "../appwrite/config/appwrite.config";
import { ID,Client,Account,Databases, Permission, Role, Query } from "appwrite";

export class UserService {
    client = new Client();
    database;
    account;

    constructor() {
        this.client
            .setEndpoint(appwriteConfig.ENDPOINT)
            .setProject(appwriteConfig.PROJECT_ID)
        this.account = new Account(this.client);
        this.database = new Databases(this.client);
    }

    async createRequest(userdata) {
        try {
            const user = await this.account.get()
            const uid = user.$id
            
            const req = await this.database.createDocument(
                appwriteConfig.DATABASE_ID,appwriteConfig.tabels_id.TOURNAMENT_REQUEST,userdata.requestId,
                {
                    name : userdata.name || "username",
                    // bannerImage : "none",
                    title : userdata.title,
                    discription : userdata.discription,
                    game : userdata.game,
                    gameMode : userdata.gameMode,
                    map : userdata.map,
                    matchDate : userdata.matchDate,
                    matchTime : userdata.matchTime,
                    maxteams : 0,
                    slots :Number(userdata.slots),
                    sponsor : userdata.sponsor,
                    customRules : userdata.customRules,
                    instagram : userdata.instagram,
                    whatsapp : userdata.whatsapp,
                    userId : uid,
                    requestId : userdata.requestId,
                    email : userdata.email,
                    status : "pending",
                    username : user.name,
                    hostingFee : String(userdata.hostingFee),
                    gstAmount : String(userdata.gstAmount),
                    totalAmount : String(userdata.totalAmount),
                    entryFee : String(userdata.entryFee),
                    hostingType : userdata.hostingType,
                    platformFee : String(userdata.platformFee || "2"),
                },
                [
                    Permission.read(Role.user(uid)),
                    Permission.update(Role.user(uid))
                ]
            )

        } catch (error) {
            console.log( "create request service error => ",  error);
            throw error
        }
    }


    async getMyRequest() {
        try {
            const user = await this.account.get();
            const userid = user.$id;

            const res = await this.database.listDocuments(
                appwriteConfig.DATABASE_ID,
                appwriteConfig.tabels_id.TOURNAMENT_REQUEST,
                [
                    Query.equal("userId", userid),
                    Query.orderDesc("$createdAt")
                ]
            )

            return res;
        } 
        catch (error) {
            throw error;
        }
    }


}

const userService = new UserService();
export default userService;