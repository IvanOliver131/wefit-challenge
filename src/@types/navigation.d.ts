export interface DetailsParams {
  id: number;
  full_name: string;
  description: string;
  watchers_count: string;
  language: string;
  svn_url: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Details: DetailsParams;
    }
  }
}
