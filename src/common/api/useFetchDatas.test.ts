import { renderHook, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import useFetchDatas from './useFetchDatas';
import { APIError } from './apiErrors';


describe('useFetchDatas tests', () => {
  test(
    'useFetchDatas returns expected datas when given apiCall',
    async () => {
        // Mocked function
        const mockApiCall = vi.fn().mockResolvedValue('coucou');

        // hook rendered and result retrieved
        const { result } = renderHook(
            () => useFetchDatas(mockApiCall)
        );
        
        // loading state while promise is processed
        expect(result.current.isLoading).toBe(true);

        // update with useFetchdatas results
        await waitFor(() => {
          expect(result.current.isLoading).toBe(false);
          expect(result.current.datas).toBe('coucou');
          expect(result.current.error).toBe(null);
        })
  });

  test(
    'useFetchDatas throws APIError when apiCalls returns error',
    async () => {
        const mockFetchFunction = vi.fn().mockRejectedValue(new APIError('oupsie'));
        const { result } = renderHook(
            () => useFetchDatas(mockFetchFunction)
        );

        expect(result.current.isLoading).toBe(true);

        await waitFor(() => {
          expect(result.current.isLoading).toBe(false);
          expect(result.current.datas).toBe(null);
          // Since error can be of type null
          // We need to check if it exists firts before accessing its properties
          if (result.current.error) {
            expect(result.current.error.message).toBe('oupsie');
          } else {
            throw new Error('Error was expected but was not thrown');
          }
        })
  });
});
