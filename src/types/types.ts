interface SigninInterface {
  email: string;
  id: number;
  token: string;
}

interface UserInterface {
  activePollCount: string;
  email: string;
  name: string;
  pollLimit: number;
  remainingPollCount: number;
  roles: string[];
  totalPollCount: number; 
  totalPollParticipantCount: number; 
}

interface PollListInterface {
  limit: number;
  offset: number;
  count: number;
  list: PollRow[];
}

interface PollRow {
  closedAt: number;
  description: string;
  displayId: number;
  heroImage: HeroImage
  id: number;
  isPublicResult: boolean;
  isRequireEmail: boolean;
  language: string;
  multipleChoiceQuestions: Question[];
  openedAt: number;
  participantCount: number;
  passcode: string;
  question: string;
  slug: string;
  statementCount: number;
  status: string;
  title: string;
  type: string;
  url: string;
  userId: number;
  videoUrls: string[];
}

interface Question {
  content: string;
  heroImage: HeroImage;
  id: number;
  isMultipleSelection: boolean;
  options: {
    content: string;
    heroImage: HeroImage;
    id: number;
    order: number;
  }
  order: number;
}

interface HeroImage {
  id: number;
  originalFileName: string;
  url: string
}

interface Group {
  id: number;
  name: string;
  populationPercentage: number;
  topUniqueStatement: [];
}

interface PollResultInterface {
  groups: {
    list: Group[];
  };
  mcqGroupAnswer: {
    data: {
      content: string;
      heroImage: HeroImage;
      id: number;
      isMultipleSelection: boolean;
      options: {
        answer: any;
        content: string;
        heroImage: HeroImage;
        id: number;
        order: number;
      }[];  
    }[];
  };
  poll: PollRow;
  statementGroupVote: {
    data: any;
  };
  statementMcqVote: {
    data: any;
  };
  statementScore: {
    list: {
      agreeCount: string;
      agreePercentage: string;
      categories: string[];
      category: string;
      certaintyScore: string;
      commonGroundScore: string;
      consensusFactor: string;
      disagreeCount: string;
      disagreePercentage: string;
      dividedScore: string;
      participantFactor: string;
      statementId: string;
      unsureCount: string;
      unsurePercentage: string;
      voteCount: string;
    }[];
  };
  statements: {
    limit: number;
    offset: number;
    totalCount:number;
    list: {
      content: string;
      displayId: number;
      heroImage: HeroImage;
      id: number;
      order: number;
      status: string;
      type: string;
    }[]
  };
  summary: {
    activeParticipantCount: number;
    commentCount: number;
    defaultStatementCount: number;
    participantCount: number;
    userStatementCount: number;
    voteCount: number;
  };
}

export {
  SigninInterface,
  UserInterface,
  PollListInterface,
  PollRow,
  PollResultInterface,
  Group,
}
