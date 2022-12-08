export interface UserType {
    id: number;
    email:string;
    password:string;
    fullNameOrEmail: string;
    type: string;
    profileComplete: boolean;
    superAdmin: boolean;
    preapprovalPartnerAssociation: string;
    activelyMatched: boolean;
    awaitingApproval: boolean;
    approved: boolean;
    declined: boolean;
    notified: boolean;
    preapproved: boolean;
    preapprovedNewlyParsed: boolean;
    preapprovedNotParsed: boolean;
    userHash: string;
    //status: UserStatusType;
    avatarUrl: string;
    city?: string;
    stateProvince?: string;
    countryCode?: string;
    googleId?: string;
    heapId?: string;
    inviteId: string;
    primaryTitle?: string;
    primaryCompany?: string;
    role?: string;
    createdAt?: string;
    lastSignInAt?: string;
    fullName?: string;
    linkedinUrl?: string;
    resumeUrl: string;
    name?: string;
    testUser?: boolean;
    superRecruiter: boolean;
  }

export interface UserType{
    email:string;
    password:string;
}