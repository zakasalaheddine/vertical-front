/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO8601 Date values */
  Date: any;
  /** A Float or a String */
  GraphQLStringOrFloat: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Property = {
  __typename?: 'Property';
  AffiliateDisclosure?: Maybe<Scalars['String']>;
  Disclaimer?: Maybe<Scalars['String']>;
  PrivacyPolicy?: Maybe<Scalars['String']>;
  TermsConditions?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  favicon?: Maybe<Directus_Files>;
  footerDisclaimer?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  logo?: Maybe<Directus_Files>;
  name?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<Property_Sections>>>;
  sections_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Directus_Files>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type PropertyFaviconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PropertyLogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PropertySectionsArgs = {
  filter?: InputMaybe<Property_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PropertyThumbnailArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Property_Aggregated = {
  __typename?: 'Property_aggregated';
  avg?: Maybe<Property_Aggregated_Fields>;
  avgDistinct?: Maybe<Property_Aggregated_Fields>;
  count?: Maybe<Property_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Property_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Property_Aggregated_Fields>;
  min?: Maybe<Property_Aggregated_Fields>;
  sum?: Maybe<Property_Aggregated_Fields>;
  sumDistinct?: Maybe<Property_Aggregated_Fields>;
};

export type Property_Aggregated_Count = {
  __typename?: 'Property_aggregated_count';
  AffiliateDisclosure?: Maybe<Scalars['Int']>;
  Disclaimer?: Maybe<Scalars['Int']>;
  PrivacyPolicy?: Maybe<Scalars['Int']>;
  TermsConditions?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  excerpt?: Maybe<Scalars['Int']>;
  favicon?: Maybe<Scalars['Int']>;
  footerDisclaimer?: Maybe<Scalars['Int']>;
  headline?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sections?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Property_Aggregated_Fields = {
  __typename?: 'Property_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Property_Filter = {
  AffiliateDisclosure?: InputMaybe<String_Filter_Operators>;
  Disclaimer?: InputMaybe<String_Filter_Operators>;
  PrivacyPolicy?: InputMaybe<String_Filter_Operators>;
  TermsConditions?: InputMaybe<String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<Property_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Property_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  excerpt?: InputMaybe<String_Filter_Operators>;
  favicon?: InputMaybe<Directus_Files_Filter>;
  footerDisclaimer?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  logo?: InputMaybe<Directus_Files_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  sections?: InputMaybe<Property_Sections_Filter>;
  sections_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  thumbnail?: InputMaybe<Directus_Files_Filter>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Property_Sections = {
  __typename?: 'Property_sections';
  Property_id?: Maybe<Property>;
  collection?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  item?: Maybe<Property_Sections_Item_Union>;
};


export type Property_SectionsProperty_IdArgs = {
  filter?: InputMaybe<Property_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Property_Sections_Aggregated = {
  __typename?: 'Property_sections_aggregated';
  avg?: Maybe<Property_Sections_Aggregated_Fields>;
  avgDistinct?: Maybe<Property_Sections_Aggregated_Fields>;
  count?: Maybe<Property_Sections_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Property_Sections_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Property_Sections_Aggregated_Fields>;
  min?: Maybe<Property_Sections_Aggregated_Fields>;
  sum?: Maybe<Property_Sections_Aggregated_Fields>;
  sumDistinct?: Maybe<Property_Sections_Aggregated_Fields>;
};

export type Property_Sections_Aggregated_Count = {
  __typename?: 'Property_sections_aggregated_count';
  Property_id?: Maybe<Scalars['Int']>;
  collection?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<Scalars['Int']>;
};

export type Property_Sections_Aggregated_Fields = {
  __typename?: 'Property_sections_aggregated_fields';
  Property_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Property_Sections_Filter = {
  Property_id?: InputMaybe<Property_Filter>;
  _and?: InputMaybe<Array<InputMaybe<Property_Sections_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Property_Sections_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__compareSection?: InputMaybe<CompareSection_Filter>;
  item__content?: InputMaybe<Content_Filter>;
};

export type Property_Sections_Item_Union = CompareSection | Content;

export type Query = {
  __typename?: 'Query';
  Property: Array<Property>;
  Property_aggregated: Array<Property_Aggregated>;
  Property_by_id?: Maybe<Property>;
  Property_sections: Array<Property_Sections>;
  Property_sections_aggregated: Array<Property_Sections_Aggregated>;
  Property_sections_by_id?: Maybe<Property_Sections>;
  bullEye: Array<BullEye>;
  bullEyeItem: Array<BullEyeItem>;
  bullEyeItem_aggregated: Array<BullEyeItem_Aggregated>;
  bullEyeItem_by_id?: Maybe<BullEyeItem>;
  bullEye_aggregated: Array<BullEye_Aggregated>;
  bullEye_bullEyeItem: Array<BullEye_BullEyeItem>;
  bullEye_bullEyeItem_aggregated: Array<BullEye_BullEyeItem_Aggregated>;
  bullEye_bullEyeItem_by_id?: Maybe<BullEye_BullEyeItem>;
  bullEye_by_id?: Maybe<BullEye>;
  compareSection: Array<CompareSection>;
  compareSection_aggregated: Array<CompareSection_Aggregated>;
  compareSection_by_id?: Maybe<CompareSection>;
  content: Array<Content>;
  content_aggregated: Array<Content_Aggregated>;
  content_by_id?: Maybe<Content>;
  descriptionTagCloud: Array<DescriptionTagCloud>;
  descriptionTagCloud_aggregated: Array<DescriptionTagCloud_Aggregated>;
  descriptionTagCloud_by_id?: Maybe<DescriptionTagCloud>;
  features: Array<Features>;
  featuresItem: Array<FeaturesItem>;
  featuresItem_aggregated: Array<FeaturesItem_Aggregated>;
  featuresItem_by_id?: Maybe<FeaturesItem>;
  features_aggregated: Array<Features_Aggregated>;
  features_by_id?: Maybe<Features>;
  features_featuresItem: Array<Features_FeaturesItem>;
  features_featuresItem_aggregated: Array<Features_FeaturesItem_Aggregated>;
  features_featuresItem_by_id?: Maybe<Features_FeaturesItem>;
  headlineDescriptionVideo: Array<HeadlineDescriptionVideo>;
  headlineDescriptionVideo_aggregated: Array<HeadlineDescriptionVideo_Aggregated>;
  headlineDescriptionVideo_by_id?: Maybe<HeadlineDescriptionVideo>;
  headlineImage: Array<HeadlineImage>;
  headlineImage_aggregated: Array<HeadlineImage_Aggregated>;
  headlineImage_by_id?: Maybe<HeadlineImage>;
  junction_directus_users_Property: Array<Junction_Directus_Users_Property>;
  junction_directus_users_Property_aggregated: Array<Junction_Directus_Users_Property_Aggregated>;
  junction_directus_users_Property_by_id?: Maybe<Junction_Directus_Users_Property>;
  network: Array<Network>;
  network_aggregated: Array<Network_Aggregated>;
  network_by_id?: Maybe<Network>;
  network_page: Array<Network_Page>;
  network_page_1: Array<Network_Page_1>;
  network_page_1_aggregated: Array<Network_Page_1_Aggregated>;
  network_page_1_by_id?: Maybe<Network_Page_1>;
  network_page_aggregated: Array<Network_Page_Aggregated>;
  network_page_by_id?: Maybe<Network_Page>;
  page: Array<Page>;
  page_aggregated: Array<Page_Aggregated>;
  page_by_id?: Maybe<Page>;
  page_sections: Array<Page_Sections>;
  page_sections_aggregated: Array<Page_Sections_Aggregated>;
  page_sections_by_id?: Maybe<Page_Sections>;
  prosCons: Array<ProsCons>;
  prosCons_aggregated: Array<ProsCons_Aggregated>;
  prosCons_by_id?: Maybe<ProsCons>;
  quizCall: Array<QuizCall>;
  quizCall_aggregated: Array<QuizCall_Aggregated>;
  quizCall_by_id?: Maybe<QuizCall>;
  tools: Array<Tools>;
  tools_aggregated: Array<Tools_Aggregated>;
  tools_by_id?: Maybe<Tools>;
};


export type QueryPropertyArgs = {
  filter?: InputMaybe<Property_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProperty_AggregatedArgs = {
  filter?: InputMaybe<Property_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProperty_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryProperty_SectionsArgs = {
  filter?: InputMaybe<Property_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProperty_Sections_AggregatedArgs = {
  filter?: InputMaybe<Property_Sections_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProperty_Sections_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryBullEyeArgs = {
  filter?: InputMaybe<BullEye_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBullEyeItemArgs = {
  filter?: InputMaybe<BullEyeItem_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBullEyeItem_AggregatedArgs = {
  filter?: InputMaybe<BullEyeItem_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBullEyeItem_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryBullEye_AggregatedArgs = {
  filter?: InputMaybe<BullEye_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBullEye_BullEyeItemArgs = {
  filter?: InputMaybe<BullEye_BullEyeItem_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBullEye_BullEyeItem_AggregatedArgs = {
  filter?: InputMaybe<BullEye_BullEyeItem_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBullEye_BullEyeItem_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryBullEye_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryCompareSectionArgs = {
  filter?: InputMaybe<CompareSection_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCompareSection_AggregatedArgs = {
  filter?: InputMaybe<CompareSection_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCompareSection_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryContentArgs = {
  filter?: InputMaybe<Content_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContent_AggregatedArgs = {
  filter?: InputMaybe<Content_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContent_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryDescriptionTagCloudArgs = {
  filter?: InputMaybe<DescriptionTagCloud_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDescriptionTagCloud_AggregatedArgs = {
  filter?: InputMaybe<DescriptionTagCloud_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDescriptionTagCloud_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryFeaturesArgs = {
  filter?: InputMaybe<Features_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFeaturesItemArgs = {
  filter?: InputMaybe<FeaturesItem_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFeaturesItem_AggregatedArgs = {
  filter?: InputMaybe<FeaturesItem_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFeaturesItem_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryFeatures_AggregatedArgs = {
  filter?: InputMaybe<Features_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFeatures_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryFeatures_FeaturesItemArgs = {
  filter?: InputMaybe<Features_FeaturesItem_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFeatures_FeaturesItem_AggregatedArgs = {
  filter?: InputMaybe<Features_FeaturesItem_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFeatures_FeaturesItem_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryHeadlineDescriptionVideoArgs = {
  filter?: InputMaybe<HeadlineDescriptionVideo_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHeadlineDescriptionVideo_AggregatedArgs = {
  filter?: InputMaybe<HeadlineDescriptionVideo_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHeadlineDescriptionVideo_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryHeadlineImageArgs = {
  filter?: InputMaybe<HeadlineImage_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHeadlineImage_AggregatedArgs = {
  filter?: InputMaybe<HeadlineImage_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHeadlineImage_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryJunction_Directus_Users_PropertyArgs = {
  filter?: InputMaybe<Junction_Directus_Users_Property_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryJunction_Directus_Users_Property_AggregatedArgs = {
  filter?: InputMaybe<Junction_Directus_Users_Property_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryJunction_Directus_Users_Property_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryNetworkArgs = {
  filter?: InputMaybe<Network_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNetwork_AggregatedArgs = {
  filter?: InputMaybe<Network_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNetwork_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryNetwork_PageArgs = {
  filter?: InputMaybe<Network_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNetwork_Page_1Args = {
  filter?: InputMaybe<Network_Page_1_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNetwork_Page_1_AggregatedArgs = {
  filter?: InputMaybe<Network_Page_1_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNetwork_Page_1_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryNetwork_Page_AggregatedArgs = {
  filter?: InputMaybe<Network_Page_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNetwork_Page_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPageArgs = {
  filter?: InputMaybe<Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPage_AggregatedArgs = {
  filter?: InputMaybe<Page_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPage_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPage_SectionsArgs = {
  filter?: InputMaybe<Page_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPage_Sections_AggregatedArgs = {
  filter?: InputMaybe<Page_Sections_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPage_Sections_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryProsConsArgs = {
  filter?: InputMaybe<ProsCons_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProsCons_AggregatedArgs = {
  filter?: InputMaybe<ProsCons_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProsCons_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryQuizCallArgs = {
  filter?: InputMaybe<QuizCall_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryQuizCall_AggregatedArgs = {
  filter?: InputMaybe<QuizCall_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryQuizCall_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryToolsArgs = {
  filter?: InputMaybe<Tools_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTools_AggregatedArgs = {
  filter?: InputMaybe<Tools_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTools_By_IdArgs = {
  id: Scalars['ID'];
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type BullEye = {
  __typename?: 'bullEye';
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<BullEye_BullEyeItem>>>;
  items_func?: Maybe<Count_Functions>;
  name?: Maybe<Scalars['String']>;
};


export type BullEyeItemsArgs = {
  filter?: InputMaybe<BullEye_BullEyeItem_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BullEyeItem = {
  __typename?: 'bullEyeItem';
  ctaTarget?: Maybe<Scalars['String']>;
  ctaText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Directus_Files>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Directus_Files>;
  title?: Maybe<Scalars['String']>;
};


export type BullEyeItemIconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BullEyeItemThumbnailArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BullEyeItem_Aggregated = {
  __typename?: 'bullEyeItem_aggregated';
  avg?: Maybe<BullEyeItem_Aggregated_Fields>;
  avgDistinct?: Maybe<BullEyeItem_Aggregated_Fields>;
  count?: Maybe<BullEyeItem_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<BullEyeItem_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<BullEyeItem_Aggregated_Fields>;
  min?: Maybe<BullEyeItem_Aggregated_Fields>;
  sum?: Maybe<BullEyeItem_Aggregated_Fields>;
  sumDistinct?: Maybe<BullEyeItem_Aggregated_Fields>;
};

export type BullEyeItem_Aggregated_Count = {
  __typename?: 'bullEyeItem_aggregated_count';
  ctaTarget?: Maybe<Scalars['Int']>;
  ctaText?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

export type BullEyeItem_Aggregated_Fields = {
  __typename?: 'bullEyeItem_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type BullEyeItem_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BullEyeItem_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BullEyeItem_Filter>>>;
  ctaTarget?: InputMaybe<String_Filter_Operators>;
  ctaText?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  thumbnail?: InputMaybe<Directus_Files_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type BullEye_Aggregated = {
  __typename?: 'bullEye_aggregated';
  avg?: Maybe<BullEye_Aggregated_Fields>;
  avgDistinct?: Maybe<BullEye_Aggregated_Fields>;
  count?: Maybe<BullEye_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<BullEye_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<BullEye_Aggregated_Fields>;
  min?: Maybe<BullEye_Aggregated_Fields>;
  sum?: Maybe<BullEye_Aggregated_Fields>;
  sumDistinct?: Maybe<BullEye_Aggregated_Fields>;
};

export type BullEye_Aggregated_Count = {
  __typename?: 'bullEye_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  items?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type BullEye_Aggregated_Fields = {
  __typename?: 'bullEye_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type BullEye_BullEyeItem = {
  __typename?: 'bullEye_bullEyeItem';
  bullEyeItem_id?: Maybe<BullEyeItem>;
  bullEye_id?: Maybe<BullEye>;
  id: Scalars['ID'];
};


export type BullEye_BullEyeItemBullEyeItem_IdArgs = {
  filter?: InputMaybe<BullEyeItem_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BullEye_BullEyeItemBullEye_IdArgs = {
  filter?: InputMaybe<BullEye_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BullEye_BullEyeItem_Aggregated = {
  __typename?: 'bullEye_bullEyeItem_aggregated';
  avg?: Maybe<BullEye_BullEyeItem_Aggregated_Fields>;
  avgDistinct?: Maybe<BullEye_BullEyeItem_Aggregated_Fields>;
  count?: Maybe<BullEye_BullEyeItem_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<BullEye_BullEyeItem_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<BullEye_BullEyeItem_Aggregated_Fields>;
  min?: Maybe<BullEye_BullEyeItem_Aggregated_Fields>;
  sum?: Maybe<BullEye_BullEyeItem_Aggregated_Fields>;
  sumDistinct?: Maybe<BullEye_BullEyeItem_Aggregated_Fields>;
};

export type BullEye_BullEyeItem_Aggregated_Count = {
  __typename?: 'bullEye_bullEyeItem_aggregated_count';
  bullEyeItem_id?: Maybe<Scalars['Int']>;
  bullEye_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type BullEye_BullEyeItem_Aggregated_Fields = {
  __typename?: 'bullEye_bullEyeItem_aggregated_fields';
  bullEyeItem_id?: Maybe<Scalars['Float']>;
  bullEye_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type BullEye_BullEyeItem_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BullEye_BullEyeItem_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BullEye_BullEyeItem_Filter>>>;
  bullEyeItem_id?: InputMaybe<BullEyeItem_Filter>;
  bullEye_id?: InputMaybe<BullEye_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type BullEye_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BullEye_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BullEye_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  items?: InputMaybe<BullEye_BullEyeItem_Filter>;
  items_func?: InputMaybe<Count_Function_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type CompareSection = {
  __typename?: 'compareSection';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
};

export type CompareSection_Aggregated = {
  __typename?: 'compareSection_aggregated';
  avg?: Maybe<CompareSection_Aggregated_Fields>;
  avgDistinct?: Maybe<CompareSection_Aggregated_Fields>;
  count?: Maybe<CompareSection_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<CompareSection_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<CompareSection_Aggregated_Fields>;
  min?: Maybe<CompareSection_Aggregated_Fields>;
  sum?: Maybe<CompareSection_Aggregated_Fields>;
  sumDistinct?: Maybe<CompareSection_Aggregated_Fields>;
};

export type CompareSection_Aggregated_Count = {
  __typename?: 'compareSection_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  section?: Maybe<Scalars['Int']>;
};

export type CompareSection_Aggregated_Fields = {
  __typename?: 'compareSection_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type CompareSection_Filter = {
  _and?: InputMaybe<Array<InputMaybe<CompareSection_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CompareSection_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  section?: InputMaybe<String_Filter_Operators>;
};

export type Content = {
  __typename?: 'content';
  content?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Content_Aggregated = {
  __typename?: 'content_aggregated';
  avg?: Maybe<Content_Aggregated_Fields>;
  avgDistinct?: Maybe<Content_Aggregated_Fields>;
  count?: Maybe<Content_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Content_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Content_Aggregated_Fields>;
  min?: Maybe<Content_Aggregated_Fields>;
  sum?: Maybe<Content_Aggregated_Fields>;
  sumDistinct?: Maybe<Content_Aggregated_Fields>;
};

export type Content_Aggregated_Count = {
  __typename?: 'content_aggregated_count';
  content?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Content_Aggregated_Fields = {
  __typename?: 'content_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Content_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Content_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Content_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type DescriptionTagCloud = {
  __typename?: 'descriptionTagCloud';
  description?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  logo?: Maybe<Directus_Files>;
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  thumbnail?: Maybe<Directus_Files>;
};


export type DescriptionTagCloudLogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type DescriptionTagCloudThumbnailArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DescriptionTagCloud_Aggregated = {
  __typename?: 'descriptionTagCloud_aggregated';
  avg?: Maybe<DescriptionTagCloud_Aggregated_Fields>;
  avgDistinct?: Maybe<DescriptionTagCloud_Aggregated_Fields>;
  count?: Maybe<DescriptionTagCloud_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<DescriptionTagCloud_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<DescriptionTagCloud_Aggregated_Fields>;
  min?: Maybe<DescriptionTagCloud_Aggregated_Fields>;
  sum?: Maybe<DescriptionTagCloud_Aggregated_Fields>;
  sumDistinct?: Maybe<DescriptionTagCloud_Aggregated_Fields>;
};

export type DescriptionTagCloud_Aggregated_Count = {
  __typename?: 'descriptionTagCloud_aggregated_count';
  description?: Maybe<Scalars['Int']>;
  headline?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['Int']>;
};

export type DescriptionTagCloud_Aggregated_Fields = {
  __typename?: 'descriptionTagCloud_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type DescriptionTagCloud_Filter = {
  _and?: InputMaybe<Array<InputMaybe<DescriptionTagCloud_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DescriptionTagCloud_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  logo?: InputMaybe<Directus_Files_Filter>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  thumbnail?: InputMaybe<Directus_Files_Filter>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['String']>;
  folder?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars['String']>;
  modified_on?: Maybe<Scalars['Date']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Scalars['String']>;
  uploaded_on?: Maybe<Scalars['Date']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<String_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<String_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Features = {
  __typename?: 'features';
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<Features_FeaturesItem>>>;
  items_func?: Maybe<Count_Functions>;
  name?: Maybe<Scalars['String']>;
};


export type FeaturesItemsArgs = {
  filter?: InputMaybe<Features_FeaturesItem_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FeaturesItem = {
  __typename?: 'featuresItem';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Directus_Files>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type FeaturesItemIconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FeaturesItem_Aggregated = {
  __typename?: 'featuresItem_aggregated';
  avg?: Maybe<FeaturesItem_Aggregated_Fields>;
  avgDistinct?: Maybe<FeaturesItem_Aggregated_Fields>;
  count?: Maybe<FeaturesItem_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<FeaturesItem_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<FeaturesItem_Aggregated_Fields>;
  min?: Maybe<FeaturesItem_Aggregated_Fields>;
  sum?: Maybe<FeaturesItem_Aggregated_Fields>;
  sumDistinct?: Maybe<FeaturesItem_Aggregated_Fields>;
};

export type FeaturesItem_Aggregated_Count = {
  __typename?: 'featuresItem_aggregated_count';
  description?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

export type FeaturesItem_Aggregated_Fields = {
  __typename?: 'featuresItem_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type FeaturesItem_Filter = {
  _and?: InputMaybe<Array<InputMaybe<FeaturesItem_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<FeaturesItem_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Features_Aggregated = {
  __typename?: 'features_aggregated';
  avg?: Maybe<Features_Aggregated_Fields>;
  avgDistinct?: Maybe<Features_Aggregated_Fields>;
  count?: Maybe<Features_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Features_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Features_Aggregated_Fields>;
  min?: Maybe<Features_Aggregated_Fields>;
  sum?: Maybe<Features_Aggregated_Fields>;
  sumDistinct?: Maybe<Features_Aggregated_Fields>;
};

export type Features_Aggregated_Count = {
  __typename?: 'features_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  items?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type Features_Aggregated_Fields = {
  __typename?: 'features_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Features_FeaturesItem = {
  __typename?: 'features_featuresItem';
  featuresItem_id?: Maybe<FeaturesItem>;
  features_id?: Maybe<Features>;
  id: Scalars['ID'];
};


export type Features_FeaturesItemFeaturesItem_IdArgs = {
  filter?: InputMaybe<FeaturesItem_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Features_FeaturesItemFeatures_IdArgs = {
  filter?: InputMaybe<Features_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Features_FeaturesItem_Aggregated = {
  __typename?: 'features_featuresItem_aggregated';
  avg?: Maybe<Features_FeaturesItem_Aggregated_Fields>;
  avgDistinct?: Maybe<Features_FeaturesItem_Aggregated_Fields>;
  count?: Maybe<Features_FeaturesItem_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Features_FeaturesItem_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Features_FeaturesItem_Aggregated_Fields>;
  min?: Maybe<Features_FeaturesItem_Aggregated_Fields>;
  sum?: Maybe<Features_FeaturesItem_Aggregated_Fields>;
  sumDistinct?: Maybe<Features_FeaturesItem_Aggregated_Fields>;
};

export type Features_FeaturesItem_Aggregated_Count = {
  __typename?: 'features_featuresItem_aggregated_count';
  featuresItem_id?: Maybe<Scalars['Int']>;
  features_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Features_FeaturesItem_Aggregated_Fields = {
  __typename?: 'features_featuresItem_aggregated_fields';
  featuresItem_id?: Maybe<Scalars['Float']>;
  features_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Features_FeaturesItem_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Features_FeaturesItem_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Features_FeaturesItem_Filter>>>;
  featuresItem_id?: InputMaybe<FeaturesItem_Filter>;
  features_id?: InputMaybe<Features_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Features_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Features_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Features_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  items?: InputMaybe<Features_FeaturesItem_Filter>;
  items_func?: InputMaybe<Count_Function_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type HeadlineDescriptionVideo = {
  __typename?: 'headlineDescriptionVideo';
  description?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  videoThumbnail?: Maybe<Directus_Files>;
  videoURL?: Maybe<Scalars['String']>;
};


export type HeadlineDescriptionVideoVideoThumbnailArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeadlineDescriptionVideo_Aggregated = {
  __typename?: 'headlineDescriptionVideo_aggregated';
  avg?: Maybe<HeadlineDescriptionVideo_Aggregated_Fields>;
  avgDistinct?: Maybe<HeadlineDescriptionVideo_Aggregated_Fields>;
  count?: Maybe<HeadlineDescriptionVideo_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<HeadlineDescriptionVideo_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<HeadlineDescriptionVideo_Aggregated_Fields>;
  min?: Maybe<HeadlineDescriptionVideo_Aggregated_Fields>;
  sum?: Maybe<HeadlineDescriptionVideo_Aggregated_Fields>;
  sumDistinct?: Maybe<HeadlineDescriptionVideo_Aggregated_Fields>;
};

export type HeadlineDescriptionVideo_Aggregated_Count = {
  __typename?: 'headlineDescriptionVideo_aggregated_count';
  description?: Maybe<Scalars['Int']>;
  headline?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  videoThumbnail?: Maybe<Scalars['Int']>;
  videoURL?: Maybe<Scalars['Int']>;
};

export type HeadlineDescriptionVideo_Aggregated_Fields = {
  __typename?: 'headlineDescriptionVideo_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type HeadlineDescriptionVideo_Filter = {
  _and?: InputMaybe<Array<InputMaybe<HeadlineDescriptionVideo_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<HeadlineDescriptionVideo_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  videoThumbnail?: InputMaybe<Directus_Files_Filter>;
  videoURL?: InputMaybe<String_Filter_Operators>;
};

export type HeadlineImage = {
  __typename?: 'headlineImage';
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Directus_Files>;
};


export type HeadlineImageImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeadlineImage_Aggregated = {
  __typename?: 'headlineImage_aggregated';
  avg?: Maybe<HeadlineImage_Aggregated_Fields>;
  avgDistinct?: Maybe<HeadlineImage_Aggregated_Fields>;
  count?: Maybe<HeadlineImage_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<HeadlineImage_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<HeadlineImage_Aggregated_Fields>;
  min?: Maybe<HeadlineImage_Aggregated_Fields>;
  sum?: Maybe<HeadlineImage_Aggregated_Fields>;
  sumDistinct?: Maybe<HeadlineImage_Aggregated_Fields>;
};

export type HeadlineImage_Aggregated_Count = {
  __typename?: 'headlineImage_aggregated_count';
  headline?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
};

export type HeadlineImage_Aggregated_Fields = {
  __typename?: 'headlineImage_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type HeadlineImage_Filter = {
  _and?: InputMaybe<Array<InputMaybe<HeadlineImage_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<HeadlineImage_Filter>>>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
};

export type Junction_Directus_Users_Property = {
  __typename?: 'junction_directus_users_Property';
  Property_id?: Maybe<Property>;
  directus_users_id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type Junction_Directus_Users_PropertyProperty_IdArgs = {
  filter?: InputMaybe<Property_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Junction_Directus_Users_Property_Aggregated = {
  __typename?: 'junction_directus_users_Property_aggregated';
  avg?: Maybe<Junction_Directus_Users_Property_Aggregated_Fields>;
  avgDistinct?: Maybe<Junction_Directus_Users_Property_Aggregated_Fields>;
  count?: Maybe<Junction_Directus_Users_Property_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Junction_Directus_Users_Property_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Junction_Directus_Users_Property_Aggregated_Fields>;
  min?: Maybe<Junction_Directus_Users_Property_Aggregated_Fields>;
  sum?: Maybe<Junction_Directus_Users_Property_Aggregated_Fields>;
  sumDistinct?: Maybe<Junction_Directus_Users_Property_Aggregated_Fields>;
};

export type Junction_Directus_Users_Property_Aggregated_Count = {
  __typename?: 'junction_directus_users_Property_aggregated_count';
  Property_id?: Maybe<Scalars['Int']>;
  directus_users_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Junction_Directus_Users_Property_Aggregated_Fields = {
  __typename?: 'junction_directus_users_Property_aggregated_fields';
  Property_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Junction_Directus_Users_Property_Filter = {
  Property_id?: InputMaybe<Property_Filter>;
  _and?: InputMaybe<Array<InputMaybe<Junction_Directus_Users_Property_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Junction_Directus_Users_Property_Filter>>>;
  directus_users_id?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Network = {
  __typename?: 'network';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']>;
  favicon?: Maybe<Directus_Files>;
  footerLinks?: Maybe<Scalars['JSON']>;
  footerLinks_func?: Maybe<Count_Functions>;
  homepage?: Maybe<Page>;
  id: Scalars['ID'];
  logo?: Maybe<Directus_Files>;
  name?: Maybe<Scalars['String']>;
  navbarLinks?: Maybe<Scalars['JSON']>;
  navbarLinks_func?: Maybe<Count_Functions>;
  pages?: Maybe<Array<Maybe<Network_Page_1>>>;
  pages_func?: Maybe<Count_Functions>;
  socialMediaLinks?: Maybe<Scalars['JSON']>;
  socialMediaLinks_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type NetworkFaviconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NetworkHomepageArgs = {
  filter?: InputMaybe<Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NetworkLogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NetworkPagesArgs = {
  filter?: InputMaybe<Network_Page_1_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Network_Aggregated = {
  __typename?: 'network_aggregated';
  avg?: Maybe<Network_Aggregated_Fields>;
  avgDistinct?: Maybe<Network_Aggregated_Fields>;
  count?: Maybe<Network_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Network_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Network_Aggregated_Fields>;
  min?: Maybe<Network_Aggregated_Fields>;
  sum?: Maybe<Network_Aggregated_Fields>;
  sumDistinct?: Maybe<Network_Aggregated_Fields>;
};

export type Network_Aggregated_Count = {
  __typename?: 'network_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  favicon?: Maybe<Scalars['Int']>;
  footerLinks?: Maybe<Scalars['Int']>;
  homepage?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  navbarLinks?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  socialMediaLinks?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Network_Aggregated_Fields = {
  __typename?: 'network_aggregated_fields';
  homepage?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Network_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Network_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Network_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  favicon?: InputMaybe<Directus_Files_Filter>;
  footerLinks?: InputMaybe<String_Filter_Operators>;
  footerLinks_func?: InputMaybe<Count_Function_Filter_Operators>;
  homepage?: InputMaybe<Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  logo?: InputMaybe<Directus_Files_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  navbarLinks?: InputMaybe<String_Filter_Operators>;
  navbarLinks_func?: InputMaybe<Count_Function_Filter_Operators>;
  pages?: InputMaybe<Network_Page_1_Filter>;
  pages_func?: InputMaybe<Count_Function_Filter_Operators>;
  socialMediaLinks?: InputMaybe<String_Filter_Operators>;
  socialMediaLinks_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Network_Page = {
  __typename?: 'network_page';
  id: Scalars['ID'];
  network_id?: Maybe<Network>;
  page_id?: Maybe<Page>;
};


export type Network_PageNetwork_IdArgs = {
  filter?: InputMaybe<Network_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Network_PagePage_IdArgs = {
  filter?: InputMaybe<Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Network_Page_1 = {
  __typename?: 'network_page_1';
  id: Scalars['ID'];
  network_id?: Maybe<Network>;
  page_id?: Maybe<Page>;
};


export type Network_Page_1Network_IdArgs = {
  filter?: InputMaybe<Network_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Network_Page_1Page_IdArgs = {
  filter?: InputMaybe<Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Network_Page_1_Aggregated = {
  __typename?: 'network_page_1_aggregated';
  avg?: Maybe<Network_Page_1_Aggregated_Fields>;
  avgDistinct?: Maybe<Network_Page_1_Aggregated_Fields>;
  count?: Maybe<Network_Page_1_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Network_Page_1_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Network_Page_1_Aggregated_Fields>;
  min?: Maybe<Network_Page_1_Aggregated_Fields>;
  sum?: Maybe<Network_Page_1_Aggregated_Fields>;
  sumDistinct?: Maybe<Network_Page_1_Aggregated_Fields>;
};

export type Network_Page_1_Aggregated_Count = {
  __typename?: 'network_page_1_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  network_id?: Maybe<Scalars['Int']>;
  page_id?: Maybe<Scalars['Int']>;
};

export type Network_Page_1_Aggregated_Fields = {
  __typename?: 'network_page_1_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  network_id?: Maybe<Scalars['Float']>;
  page_id?: Maybe<Scalars['Float']>;
};

export type Network_Page_1_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Network_Page_1_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Network_Page_1_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  network_id?: InputMaybe<Network_Filter>;
  page_id?: InputMaybe<Page_Filter>;
};

export type Network_Page_Aggregated = {
  __typename?: 'network_page_aggregated';
  avg?: Maybe<Network_Page_Aggregated_Fields>;
  avgDistinct?: Maybe<Network_Page_Aggregated_Fields>;
  count?: Maybe<Network_Page_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Network_Page_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Network_Page_Aggregated_Fields>;
  min?: Maybe<Network_Page_Aggregated_Fields>;
  sum?: Maybe<Network_Page_Aggregated_Fields>;
  sumDistinct?: Maybe<Network_Page_Aggregated_Fields>;
};

export type Network_Page_Aggregated_Count = {
  __typename?: 'network_page_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  network_id?: Maybe<Scalars['Int']>;
  page_id?: Maybe<Scalars['Int']>;
};

export type Network_Page_Aggregated_Fields = {
  __typename?: 'network_page_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  network_id?: Maybe<Scalars['Float']>;
  page_id?: Maybe<Scalars['Float']>;
};

export type Network_Page_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Network_Page_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Network_Page_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  network_id?: InputMaybe<Network_Filter>;
  page_id?: InputMaybe<Page_Filter>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Page = {
  __typename?: 'page';
  compare?: Maybe<CompareSection>;
  content?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<Page_Sections>>>;
  sections_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type PageCompareArgs = {
  filter?: InputMaybe<CompareSection_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PageSectionsArgs = {
  filter?: InputMaybe<Page_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Page_Aggregated = {
  __typename?: 'page_aggregated';
  avg?: Maybe<Page_Aggregated_Fields>;
  avgDistinct?: Maybe<Page_Aggregated_Fields>;
  count?: Maybe<Page_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Page_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Page_Aggregated_Fields>;
  min?: Maybe<Page_Aggregated_Fields>;
  sum?: Maybe<Page_Aggregated_Fields>;
  sumDistinct?: Maybe<Page_Aggregated_Fields>;
};

export type Page_Aggregated_Count = {
  __typename?: 'page_aggregated_count';
  compare?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  headline?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sections?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Page_Aggregated_Fields = {
  __typename?: 'page_aggregated_fields';
  compare?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Page_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Page_Filter>>>;
  compare?: InputMaybe<CompareSection_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sections?: InputMaybe<Page_Sections_Filter>;
  sections_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Page_Sections = {
  __typename?: 'page_sections';
  collection?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  item?: Maybe<Page_Sections_Item_Union>;
  page_id?: Maybe<Page>;
};


export type Page_SectionsPage_IdArgs = {
  filter?: InputMaybe<Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Page_Sections_Aggregated = {
  __typename?: 'page_sections_aggregated';
  avg?: Maybe<Page_Sections_Aggregated_Fields>;
  avgDistinct?: Maybe<Page_Sections_Aggregated_Fields>;
  count?: Maybe<Page_Sections_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Page_Sections_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Page_Sections_Aggregated_Fields>;
  min?: Maybe<Page_Sections_Aggregated_Fields>;
  sum?: Maybe<Page_Sections_Aggregated_Fields>;
  sumDistinct?: Maybe<Page_Sections_Aggregated_Fields>;
};

export type Page_Sections_Aggregated_Count = {
  __typename?: 'page_sections_aggregated_count';
  collection?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<Scalars['Int']>;
  page_id?: Maybe<Scalars['Int']>;
};

export type Page_Sections_Aggregated_Fields = {
  __typename?: 'page_sections_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  page_id?: Maybe<Scalars['Float']>;
};

export type Page_Sections_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Sections_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Page_Sections_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__bullEye?: InputMaybe<BullEye_Filter>;
  item__descriptionTagCloud?: InputMaybe<DescriptionTagCloud_Filter>;
  item__features?: InputMaybe<Features_Filter>;
  item__headlineDescriptionVideo?: InputMaybe<HeadlineDescriptionVideo_Filter>;
  item__headlineImage?: InputMaybe<HeadlineImage_Filter>;
  item__prosCons?: InputMaybe<ProsCons_Filter>;
  item__quizCall?: InputMaybe<QuizCall_Filter>;
  item__tools?: InputMaybe<Tools_Filter>;
  page_id?: InputMaybe<Page_Filter>;
};

export type Page_Sections_Item_Union = BullEye | DescriptionTagCloud | Features | HeadlineDescriptionVideo | HeadlineImage | ProsCons | QuizCall | Tools;

export type ProsCons = {
  __typename?: 'prosCons';
  cons?: Maybe<Scalars['JSON']>;
  consHeadline?: Maybe<Scalars['String']>;
  cons_func?: Maybe<Count_Functions>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPros?: Maybe<Scalars['Boolean']>;
  pros?: Maybe<Scalars['JSON']>;
  prosHeadline?: Maybe<Scalars['String']>;
  pros_func?: Maybe<Count_Functions>;
};

export type ProsCons_Aggregated = {
  __typename?: 'prosCons_aggregated';
  avg?: Maybe<ProsCons_Aggregated_Fields>;
  avgDistinct?: Maybe<ProsCons_Aggregated_Fields>;
  count?: Maybe<ProsCons_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<ProsCons_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<ProsCons_Aggregated_Fields>;
  min?: Maybe<ProsCons_Aggregated_Fields>;
  sum?: Maybe<ProsCons_Aggregated_Fields>;
  sumDistinct?: Maybe<ProsCons_Aggregated_Fields>;
};

export type ProsCons_Aggregated_Count = {
  __typename?: 'prosCons_aggregated_count';
  cons?: Maybe<Scalars['Int']>;
  consHeadline?: Maybe<Scalars['Int']>;
  headline?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isPros?: Maybe<Scalars['Int']>;
  pros?: Maybe<Scalars['Int']>;
  prosHeadline?: Maybe<Scalars['Int']>;
};

export type ProsCons_Aggregated_Fields = {
  __typename?: 'prosCons_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type ProsCons_Filter = {
  _and?: InputMaybe<Array<InputMaybe<ProsCons_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<ProsCons_Filter>>>;
  cons?: InputMaybe<String_Filter_Operators>;
  consHeadline?: InputMaybe<String_Filter_Operators>;
  cons_func?: InputMaybe<Count_Function_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  isPros?: InputMaybe<Boolean_Filter_Operators>;
  pros?: InputMaybe<String_Filter_Operators>;
  prosHeadline?: InputMaybe<String_Filter_Operators>;
  pros_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type QuizCall = {
  __typename?: 'quizCall';
  ctaTarget?: Maybe<Scalars['String']>;
  ctaText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Directus_Files>;
};


export type QuizCallImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuizCall_Aggregated = {
  __typename?: 'quizCall_aggregated';
  avg?: Maybe<QuizCall_Aggregated_Fields>;
  avgDistinct?: Maybe<QuizCall_Aggregated_Fields>;
  count?: Maybe<QuizCall_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<QuizCall_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<QuizCall_Aggregated_Fields>;
  min?: Maybe<QuizCall_Aggregated_Fields>;
  sum?: Maybe<QuizCall_Aggregated_Fields>;
  sumDistinct?: Maybe<QuizCall_Aggregated_Fields>;
};

export type QuizCall_Aggregated_Count = {
  __typename?: 'quizCall_aggregated_count';
  ctaTarget?: Maybe<Scalars['Int']>;
  ctaText?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  headline?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
};

export type QuizCall_Aggregated_Fields = {
  __typename?: 'quizCall_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type QuizCall_Filter = {
  _and?: InputMaybe<Array<InputMaybe<QuizCall_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<QuizCall_Filter>>>;
  ctaTarget?: InputMaybe<String_Filter_Operators>;
  ctaText?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Tools = {
  __typename?: 'tools';
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  tools?: Maybe<Scalars['JSON']>;
  tools_func?: Maybe<Count_Functions>;
};

export type Tools_Aggregated = {
  __typename?: 'tools_aggregated';
  avg?: Maybe<Tools_Aggregated_Fields>;
  avgDistinct?: Maybe<Tools_Aggregated_Fields>;
  count?: Maybe<Tools_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Tools_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Tools_Aggregated_Fields>;
  min?: Maybe<Tools_Aggregated_Fields>;
  sum?: Maybe<Tools_Aggregated_Fields>;
  sumDistinct?: Maybe<Tools_Aggregated_Fields>;
};

export type Tools_Aggregated_Count = {
  __typename?: 'tools_aggregated_count';
  headline?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tools?: Maybe<Scalars['Int']>;
};

export type Tools_Aggregated_Fields = {
  __typename?: 'tools_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Tools_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tools_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Tools_Filter>>>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  tools?: InputMaybe<String_Filter_Operators>;
  tools_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type HomePageFragmentFragment = { __typename?: 'Property', id: string, name?: string | null, description?: string | null, headline?: string | null, excerpt?: string | null, footerDisclaimer?: string | null, logo?: { __typename?: 'directus_files', title?: string | null, filename_download: string, height?: number | null, width?: number | null, id: string } | null, favicon?: { __typename?: 'directus_files', filename_download: string, id: string } | null, thumbnail?: { __typename?: 'directus_files', title?: string | null, filename_download: string, height?: number | null, width?: number | null, id: string } | null, sections?: Array<{ __typename?: 'Property_sections', id: string, item?: { __typename: 'compareSection', id: string, section?: string | null } | { __typename: 'content', id: string, content?: string | null } | null } | null> | null } & { ' $fragmentName'?: 'HomePageFragmentFragment' };

export type PropertyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PropertyQuery = { __typename?: 'Query', Property_by_id?: (
    { __typename?: 'Property' }
    & { ' $fragmentRefs'?: { 'HomePageFragmentFragment': HomePageFragmentFragment } }
  ) | null };

export const HomePageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"favicon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename_download"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"compareSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"section"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"content"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"footerDisclaimer"}}]}}]} as unknown as DocumentNode<HomePageFragmentFragment, unknown>;
export const PropertyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"property"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Property_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageFragment"}}]}}]}},...HomePageFragmentFragmentDoc.definitions]} as unknown as DocumentNode<PropertyQuery, PropertyQueryVariables>;