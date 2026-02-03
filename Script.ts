interface Translation {
    [key: string]: string | undefined,
    spanish?: string,
    french?: string,
    korean?: string,
    bengali?: string,
    portuguese?: string
}

interface Review {
    rating: number,
    ratingsCount?: number,
    reviewsCount?: number
}

interface Reviews {
    [key: string]: Review | undefined,
}

interface Book {
    id: number,
    title: string,
    publicationDate: string,
    author: string,
    genres: string[],
    hasMovieAdaptation: boolean,
    pages: number,
    translations: Translation,
    reviews?: Reviews
}

const data: Book[] = [
    {
      id: 101,
      title: "The Silver Mountain",
      publicationDate: "2001-03-15",
      author: "Alan Peters",
      genres: ["fantasy", "adventure", "myth"],
      hasMovieAdaptation: false,
      pages: 540,
      translations: {
        spanish: "La montaña plateada",
        french: "La montagne d'argent",
      },
      reviews: {
        goodreads: {
          rating: 3.8,
          ratingsCount: 12045,
          reviewsCount: 980,
        },
        librarything: {
          rating: 3.9,
          ratingsCount: 4300,
          reviewsCount: 210,
        },
      },
    },
    {
      id: 102,
      title: "Robots of Tomorrow",
      publicationDate: "2010-11-02",
      author: "Mila Novak",
      genres: ["science fiction", "technology"],
      hasMovieAdaptation: true,
      pages: 310,
      translations: {
        german: "Roboter von morgen",
      },
      reviews: {
        goodreads: {
          rating: 4.1,
          ratingsCount: 56000,
          reviewsCount: 4300,
        },
        librarything: {
          rating: 4.0,
          ratingsCount: 12000,
          reviewsCount: 900,
        },
      },
    },
    {
      id: 103,
      title: "Desert Storm",
      publicationDate: "1998-07-20",
      author: "Khalid Rahman",
      genres: ["thriller", "adventure"],
      hasMovieAdaptation: false,
      pages: 420,
      translations: {
        arabic: "عاصفة الصحراء",
      },
      reviews: {
        goodreads: {
          rating: 3.6,
          ratingsCount: 18000,
          reviewsCount: 1500,
        },
      },
    },
    {
      id: 104,
      title: "The Lost City of Gold",
      publicationDate: "2005-05-10",
      author: "Sophie Laurent",
      genres: ["adventure", "mystery"],
      hasMovieAdaptation: true,
      pages: 275,
      translations: {
        spanish: "La ciudad perdida de oro",
        italian: "La città perduta d'oro",
        japanese: "失われた黄金の都",
      },
      reviews: {
        goodreads: {
          rating: 4.5,
          ratingsCount: 950000,
          reviewsCount: 32000,
        },
        librarything: {
          rating: 4.3,
          ratingsCount: 88000,
          reviewsCount: 4100,
        },
      },
    },
    {
      id: 105,
      title: "Echoes in the Dark",
      publicationDate: "2018-09-01",
      author: "Rachel Moore",
      genres: ["horror", "psychological"],
      hasMovieAdaptation: false,
      pages: 360,
      translations: {
        korean: "어둠 속의 메아리",
        portuguese: "Ecos na escuridão",
      },
      reviews: {
        goodreads: {
          rating: 4.0,
          ratingsCount: 74000,
          reviewsCount: 5200,
        },
        librarything: {
          rating: 3.8,
          ratingsCount: 15000,
          reviewsCount: 1100,
        },
      },
    },
  ];
  
  

  function getBooks() :Book[] {
    return data;
  }

  function getBook(id :number) :Book | undefined {
    return data.find((d) => d.id === id);
  }
  
  
  // getBooks
  const allBooks:Book[] = getBooks();
  allBooks;

  // destructuring with Object
  const book = getBook(101); 
  // book is of type Book | undefined
  if (book) {
    const { title, author, genres, pages, translations } = book;
    console.log(`Tile: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`Genres: ${genres.join(", ")}`);
    console.log(`Pages: ${pages}`);
    console.log(`Spanish Title: ${translations.spanish ?? "N/A"}`);
  }

  // destructuring with Array
  const [firstBook, secondBook] = allBooks;
   
  const primaryGenreOfFirstBook = firstBook.genres[0] ?? "N/A";
  const secondaryGenreOfFirstBook = firstBook.genres[1] ?? "N/A";
  console.log(`First Book Primary Genre: ${primaryGenreOfFirstBook}`);
  console.log(`First Book Secondary Genre: ${secondaryGenreOfFirstBook}`);

  // const [one,two] = firstBook.genres;
  // console.log(`One: ${one}`);
  // console.log(`Two: ${two}`);

  // rest parameter with Array
  const [first, second, ...otherBooks] = allBooks;

  const [one,two,...other] = firstBook.genres;
  console.log(`One: ${one}`);
  console.log(`Two: ${two}`);

  const newGenres = [...firstBook.genres, "classic"];

const updatedBook = {
    ...firstBook,
    "moviePublicationDate": "2023-12-15",
};

const tempLiteral = `Hello React`;

console.log(`${first.title} by ${first.author} has ${first.pages} pages.`);
console.log(`New Genres: ${newGenres.join(", ")}`);
console.log(`2 + 2 = ${2 + 2}`);

const pages = firstBook.pages > 300 ? "Long read" : "Short read";

function getYear(dateString: string): string {
    return dateString.split("-")[0];
}

const publicationYear = (dateString: string) : string => dateString.split("-")[0];

getYear(firstBook.publicationDate);
console.log(`${firstBook.title} was published in ${publicationYear(firstBook.publicationDate)} and is a ${pages}.`);

console.log(0 || "No pages");
console.log(true || "No pages");
console.log( "Hello" || "World");

(book?.reviews?.goodreads?.rating ?? 0) + (book?.reviews?.librarything?.rating ?? 0);