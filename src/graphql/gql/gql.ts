/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  fragment HomePageFragment on Property {\n    id\n    name\n    description\n    logo {\n      title\n      filename_download\n      height\n      width\n      id\n    }\n    favicon {\n      filename_download\n      id\n    }\n    headline\n    thumbnail {\n      title\n      filename_download\n      height\n      width\n      id\n    }\n    excerpt\n    sections {\n      id\n      item {\n\t\t\t\t__typename\n        ... on compareSection {\n          id\n          section\n        }\n        ... on content {\n          id\n          content\n        }\n      }\n    }\n    footerDisclaimer\n  }\n": types.HomePageFragmentFragmentDoc,
    "\n  fragment LegalPageFragment on Property {\n    id\n\t\tname\n\t\tdescription\n\t\tlogo {\n\t\t\ttitle\n\t\t\tfilename_download\n\t\t\theight\n\t\t\twidth\n\t\t\tid\n\t\t}\n\t\tfavicon {\n\t\t\tfilename_download\n\t\t\tid\n\t\t}\n\t\tfooterDisclaimer\n\t\tPrivacyPolicy\n\t\tTermsConditions\n\t\tAffiliateDisclosure\n  }\n": types.LegalPageFragmentFragmentDoc,
    "\nquery legalPage($id: ID!) {\n\tProperty_by_id(id: $id) {\n\t\t...LegalPageFragment\n\t}\n}\n": types.LegalPageDocument,
    "\nquery property($id: ID!) {\n\tProperty_by_id(id: $id) {\n\t\t...HomePageFragment\n\t}\n}\n": types.PropertyDocument,
};

export function graphql(source: "\n  fragment HomePageFragment on Property {\n    id\n    name\n    description\n    logo {\n      title\n      filename_download\n      height\n      width\n      id\n    }\n    favicon {\n      filename_download\n      id\n    }\n    headline\n    thumbnail {\n      title\n      filename_download\n      height\n      width\n      id\n    }\n    excerpt\n    sections {\n      id\n      item {\n\t\t\t\t__typename\n        ... on compareSection {\n          id\n          section\n        }\n        ... on content {\n          id\n          content\n        }\n      }\n    }\n    footerDisclaimer\n  }\n"): (typeof documents)["\n  fragment HomePageFragment on Property {\n    id\n    name\n    description\n    logo {\n      title\n      filename_download\n      height\n      width\n      id\n    }\n    favicon {\n      filename_download\n      id\n    }\n    headline\n    thumbnail {\n      title\n      filename_download\n      height\n      width\n      id\n    }\n    excerpt\n    sections {\n      id\n      item {\n\t\t\t\t__typename\n        ... on compareSection {\n          id\n          section\n        }\n        ... on content {\n          id\n          content\n        }\n      }\n    }\n    footerDisclaimer\n  }\n"];
export function graphql(source: "\n  fragment LegalPageFragment on Property {\n    id\n\t\tname\n\t\tdescription\n\t\tlogo {\n\t\t\ttitle\n\t\t\tfilename_download\n\t\t\theight\n\t\t\twidth\n\t\t\tid\n\t\t}\n\t\tfavicon {\n\t\t\tfilename_download\n\t\t\tid\n\t\t}\n\t\tfooterDisclaimer\n\t\tPrivacyPolicy\n\t\tTermsConditions\n\t\tAffiliateDisclosure\n  }\n"): (typeof documents)["\n  fragment LegalPageFragment on Property {\n    id\n\t\tname\n\t\tdescription\n\t\tlogo {\n\t\t\ttitle\n\t\t\tfilename_download\n\t\t\theight\n\t\t\twidth\n\t\t\tid\n\t\t}\n\t\tfavicon {\n\t\t\tfilename_download\n\t\t\tid\n\t\t}\n\t\tfooterDisclaimer\n\t\tPrivacyPolicy\n\t\tTermsConditions\n\t\tAffiliateDisclosure\n  }\n"];
export function graphql(source: "\nquery legalPage($id: ID!) {\n\tProperty_by_id(id: $id) {\n\t\t...LegalPageFragment\n\t}\n}\n"): (typeof documents)["\nquery legalPage($id: ID!) {\n\tProperty_by_id(id: $id) {\n\t\t...LegalPageFragment\n\t}\n}\n"];
export function graphql(source: "\nquery property($id: ID!) {\n\tProperty_by_id(id: $id) {\n\t\t...HomePageFragment\n\t}\n}\n"): (typeof documents)["\nquery property($id: ID!) {\n\tProperty_by_id(id: $id) {\n\t\t...HomePageFragment\n\t}\n}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;