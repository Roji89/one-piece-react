import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Boat } from './types/Boats';

type Boats = Boat[];
export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.api-onepiece.com',
	}),
	tagTypes: [
        'Boat'
	],
	endpoints: builder => ({
		// getUser: builder.query<Users.User, string>({
		// 	query: userId => `/users/${userId}`,
		// 	providesTags: (_result, _error, id) => [{ type: 'Users', id }],
		// }),
		getBoats: builder.query<Boats, void>({
			query: () => ({
                url : `/boats`,
                method: 'GET'
            }),
			providesTags: result =>
				result
					? [
							...result.map(
								({ id }) => ({ type: 'Boat', id } as const),
							),
							{ type: 'Boat', id: 'LIST' },
					  ]
					: [{ type: 'Boat', id: 'LIST' }],
		}),
		
	}),
});
