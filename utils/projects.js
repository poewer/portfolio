export const projects = [
    {
        title: "BLUEBOX-AI",
        technologies: {
            languages: ["Python", "Bash", "JavaScript (React)"],
            frameworks: ["FastAPI", "Sanic", "SQLAlchemy", "BeautifulSoup", "Next.js"],
            databases: ["PostgreSQL", "Elasticsearch", "DBrave"],
            tools: [
                "Docker",
                "RabbitMQ",
                "Postman",
                "Jira",
                "Git",
                "GitHub",
                "Jenkins",
                "Pycharm",
                "VS Code",
                "Swagger",
                "MobaXterm",
                "PuTTY",
            ],
            apis: [
                "REST API",
                "OpenAI API",
                "Microsoft Azure API",
                "SharePoint API",
                "Grafana API",
                "Zewnętrzne API (tajemnica zawodowa)",
            ],
            libraries: ["Pandas", "Selenium", "Pytest", "NumPy", "HTTPx", "Requests", "BeautifulSoup"],
            data_processing: ["Apache Tika"],
            os: ["Linux", "Windows"],
        },
        description:
            "System BLUEBOX-AI wspierający integrację procesów biznesowych w oparciu o modele sztucznej inteligencji. Projekt realizowany we współpracy z firmą IBPM S.A. System umożliwia automatyzację procesów biznesowych, integrację z różnymi narzędziami w chmurze (Azure, SharePoint) oraz wykorzystanie OpenAI i ChatGPT do analizy danych i generowania odpowiedzi.",
        role:
            "Developer backendu - pisanie API, integracja z RabbitMQ oraz wdrażanie kontenerów Dockera dla zautomatyzowanego uruchamiania środowiska. W ramach projektu realizowałem integrację z Microsoft Azure oraz SharePoint, a także implementację funkcji wykorzystujących OpenAI i ChatGPT. Przygotowywałem dane do fine-tuningu modeli OpenAI, w tym ekstrakcję i przetwarzanie danych z dokumentów przy użyciu Apache Tika oraz analizę i transformację danych z plików CSV i Excel za pomocą Pandas. Dodatkowo realizowałem scrapowanie stron internetowych przy użyciu Selenium i BeautifulSoup w celu pozyskiwania danych. Byłem odpowiedzialny za debugowanie kodu, rozwiązywanie błędów, integrację z zewnętrznymi API (nieujawnione) oraz krótki epizod pracy z Grafana API do automatyzacji monitorowania systemu.",
        methodology:
            "Praca w metodologii Agile z codziennymi standupami (daily stand-ups), na których omawiano postępy prac oraz planowanie kolejnych zadań. Zadania były zarządzane w Jira i podzielone na statusy: 'To Do', 'In Progress', 'Review' oraz 'Done'. Współpraca zespołowa obejmowała częste code review oraz retrospekcje sprintów.",
        key_contributions: [
            "Projektowanie i rozwój skalowalnych API w FastAPI oraz Sanic.",
            "Integracja z Microsoft Azure i SharePoint w celu synchronizacji danych biznesowych.",
            "Implementacja funkcji opartych na OpenAI i ChatGPT, w tym fine-tuning modeli do specyficznych wymagań klienta.",
            "Tworzenie procesów ETL do przygotowywania danych wejściowych do fine-tuningu modeli AI.",
            "Ekstrakcja danych z dokumentów (PDF, Word) za pomocą Apache Tika.",
            "Przetwarzanie danych z plików Excel i CSV z użyciem Pandas.",
            "Realizacja procesów scrapowania danych z wykorzystaniem Selenium i BeautifulSoup.",
            "Integracja z Grafana API w celu automatyzacji procesów monitorowania.",
            "Wdrażanie i utrzymywanie testów jednostkowych w pytest, w tym pokrycie kluczowych funkcji biznesowych.",
            "Debugowanie kodu i rozwiązywanie błędów w kluczowych modułach systemu.",
            "Integracja z zewnętrznymi API (nieujawnione) w celu rozszerzenia funkcjonalności systemu.",
            "Tworzenie komponentów frontendu w React/Next.js jako wsparcie dla zespołu frontendowego.",
            "Przygotowywanie dokumentacji technicznej obejmującej API, procesy CI/CD oraz instrukcje wdrożenia.",
            "Prowadzenie szkoleń wewnętrznych z zakresu integracji OpenAI API i SharePoint.",
            "Udział w spotkaniach z klientami w celu zbierania wymagań i prezentowania postępów projektu.",
        ],
        duration: "Marzec 2024 - Obecnie",
    },

    {
        title: "Integracja w ACE Toolkit IBM",
        technologies: {
            languages: ["ESQL"],
            frameworks: ["IBM App Connect Enterprise (ACE)"],
            apis: ["REST API", "SOAP"],
            data_formats: ["XML", "JSON"],
        },
        description:
            "Rozwój i utrzymanie przepływów integracyjnych dla aplikacji biznesowych w oparciu o IBM ACE Toolkit. Projekt zrealizowany w ramach dużego przedsiębiorstwa (bez możliwości podania klienta).",
        role: "Specjalista ds. integracji - projektowanie i optymalizacja przepływów danych, implementacja logiki w ESQL oraz dostosowywanie interfejsów REST i SOAP.",
        duration: "Marzec 2023 - Marzec 2024",
    },
    {
        title: "System automatyzacji informacji o pracownikach",
        technologies: {
            languages: ["Python", "VBA"],
            frameworks: ["Office365", "Excel"],
            tools: ["API Skype/Teams/SharePoint"],
        },
        description:
            "Wytwarzanie systemu automatyzacji organizacji informacji o pracownikach, profili zawodowych, portfolio, ścieżek rozwoju między poziomami wiedzy. Generowanie unikalnych ID dla każdego pracownika. Automatyzacja urodzin, powiadomień dla działu HR o kończących się umowach, szkoleniach i innych istotnych wydarzeniach.",
        role: "Full-stack developer - projektowanie skryptów automatyzujących, integracja z API Skype/Teams/SharePoint, tworzenie powiadomień dla działu HR oraz wdrażanie funkcji analitycznych w Excel i VBA.",
        duration: "2022 - Luty 2023",
    },
    {
        title: "Testy i dokumentacja",
        technologies: {
            languages: ["Python"],
            tools: ["Pytest", "Sphinx", "Postman"],
        },
        description:
            "Projekt obejmujący przygotowanie automatycznych testów integracyjnych i jednostkowych oraz dokumentacji technicznej dla systemu informatycznego klienta.",
        role: "Tester i dokumentalista - przygotowanie skryptów testowych, dokumentacji technicznej oraz raportów z testów dla zespołu deweloperskiego.",
        duration: "Marzec 2022 - Marzec 2023",
    },
    {
        title: "Staż z integracji systemów biznesowych",
        technologies: {
            languages: ["ESQL"],
            frameworks: ["IBM Integration Bus (IIB)"],
            apis: ["SOAP"],
            data_formats: ["XML", "JSON"],
            tools: ["Postman"],
        },
        description:
            "Staż obejmujący pracę nad przepływami danych w szynie integracyjnej IIB (IBM Integration Bus) dla aplikacji biznesowych. Główny cel to rozwój nowych przepływów oraz wsparcie zespołu w debugowaniu istniejących procesów.",
        role: "Stażysta ds. integracji - implementacja przepływów SOAP, testowanie procesów oraz wsparcie dokumentacyjne zespołu.",
        duration: "Lipiec 2022 - Październik 2022",
    },
];
