
export type AdverseActions = {
    id: number;
    name: string;
    status: string;
    preNoticeDate: string;
    postNoticeDate: string;
};

export type CandidateInfo = {
    candidates: {
      id: number;
      name: string;
      location: string;
      email: string;
      dob: string;
      phone_no: string;
      zipcode: string;
      driver_license: string;
      social_security: string;
      created_at: string;
      date: string;
    };
    report: {
      id: number;
      status: string ;
      adjudication: string ;
      packageName: string;
      createdAt: string;
      completedDate: string;
      turnAroundTime: string;
    };
  };
export type CourtSearchesType = {
    id: number;
    ssnVerification: string;
    sexOffender: string;
    globalWatchlist: string;
    federalCriminal: string;
    countyCriminal: string;
    ssnverificationDate: string;
    sexOffenderDate: string;
    globalWatchlistDate: string;
    federalCriminalDate:string;
    countyCriminalDate: string;
}

export type ReportInfo = {
    id: number;
    status: string | null;
    adjudication: string | null;
    packageName: string;
    createdAt: string;
    completedDate: string;
    turnAroundTime: string;
  };

  export type candidate = {
    id: number;
    name: string;
    location: string;
    email: string;
    dob: string;
    phone_no: string;
    zipcode: string;
    driver_license: string;
    social_security: string;
    created_at: string;
    date: string;
  };

  export type Token = {
    email?: string
    password: string
  }