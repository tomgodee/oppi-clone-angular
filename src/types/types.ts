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
  list: Poll[];
}

interface Poll {
  closedAt: number;
  description: string;
  displayId: number;
  heroImage: HeroImage
  id: number;
  isPublicResult: boolean;
  isRequireEmail: boolean;
  multipleChoiceQuestions: Question[];
  openedAt: number;
  participantCount: number;
  passcode: string;
  slug: string;
  statementCount: number;
  status: string;
  title: string;
  type: string;
  url: string;
  userId: number;
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

export {
  SigninInterface,
  UserInterface,
  PollListInterface,
}
