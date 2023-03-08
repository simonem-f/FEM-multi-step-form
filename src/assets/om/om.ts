export type SubscriptionPrice = {
  monthPrice: number;
  yearPrice: number;
};

export type Plan = SubscriptionPrice & {
  id: number;
  label: string;
  imgUrl: string;
};

export type Extra = SubscriptionPrice & {
  service: string;
  description: string;
};
