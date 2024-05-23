
import axios from 'axios';

export const fetchBooks = async (page = 1, limit = 10) => {
    const response = await axios.get(`https://openlibrary.org/search.json?q=subject:book&page=${page}&limit=${limit}`);
    return response.data.docs.map(book => ({
        ratings_average: book.ratings_average,
        author_name: book.author_name,
        title: book.title,
        first_publish_year: book.first_publish_year,
        subject: book.subject,
        author_birth_date: book.author_birth_date,
        author_top_work: book.author_top_work,
    }));
};
