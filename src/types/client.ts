export interface Client {
  readonly name: string;
  readonly description: string;
  readonly industry: string;
  readonly logo: string;
  readonly slug: string;
  readonly technologies: readonly string[];
  readonly companySize?: string;
  readonly website?: string;
  readonly projectTitle?: string;
  readonly projectDescription?: string;
  readonly projectChallenges?: readonly string[];
  readonly projectSolution?: string;
  readonly projectOutcome?: string;
  readonly screenshots?: readonly string[];
  readonly years?: readonly number[];
  readonly isCurrent?: boolean;
}

export type ClientRecord = Record<string, Client>; 
