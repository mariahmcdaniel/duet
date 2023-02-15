import react, { useState } from 'react';
import surveyQuestions from '../../utils/questions';
import { useMutation } from '@apollo/client';
import {useNavigate} from 'react-router-dom';
import {UPDATE_ANSWERS, UPDATE_PLAYLIST, UPDATE } from '../../utils/mutations';

const [currentQuestion, setCurrentQuestion] = useState('');
const [response, setResponse] = useState('');

const handleQuestionChange = ""