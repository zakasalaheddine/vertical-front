import { request } from 'graphql-request'
import { getLegalPageByPropertyIdQueryDocument } from '../graphql/queries/getLegalPagesQuery'
import { GRAPHQL_API_URL, PROPERTY_ID } from '../utils/constants'

export const getLegalPageByPropertyIdRequest = async () =>
  request(GRAPHQL_API_URL, getLegalPageByPropertyIdQueryDocument, {
    id: PROPERTY_ID as string
  })
