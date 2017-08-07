/* @flow */
import type {
  LOAD_DATA_INITIATION_TYPE,
  LOAD_DATA_SUCCESS_TYPE,
  LOAD_DATA_FAILURE_TYPE,
  RESET_DATA_TYPE
} from './flowTypes';
export const LOAD_DATA_INITIATION: LOAD_DATA_INITIATION_TYPE = 'SYNC/LOAD_DATA_INITIATION';
export const LOAD_DATA_SUCCESS: LOAD_DATA_SUCCESS_TYPE = 'SYNC/LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAILURE: LOAD_DATA_FAILURE_TYPE = 'SYNC/LOAD_DATA_FAILURE';
export const RESET_DATA: RESET_DATA_TYPE = 'SYNC/RESET_DATA';