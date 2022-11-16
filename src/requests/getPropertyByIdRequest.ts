import { request } from 'graphql-request'
import { getPropertyByIdQueryDocument } from '../graphql/queries/getPropertyByIdQueryDocument'
import { GRAPHQL_API_URL, PROPERTY_ID } from '../utils/constants'

export const getPropertyByIdRequest = async () => request(GRAPHQL_API_URL, getPropertyByIdQueryDocument, {
  id: PROPERTY_ID as string
})