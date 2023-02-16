import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import questions from '../../utils/questions';
import Yes from './assets/yes.png';
import No from './assets/no.png';

const UserPage = () => {
    const { loading, data } = useQuery(QUERY_USER);
    const user = data?.user || [];

};