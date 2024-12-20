export const projects = [
    {
        title: "BLUEBOX-AI",
        technologies: {
            languages: ["Python3", "Bash", "JavaScript (React)"],
            frameworks: ["Sanic", "FastAPI", "SQLAlchemy", "BeautifulSoup", "Next.js", "Zato"],
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
            "System wspierający integrację procesów biznesowych w oparciu o sztuczną inteligencję i mikroserwisy. Projekt skoncentrowany na automatyzacji procesów oraz integracji z różnorodnymi narzędziami chmurowymi.",
        role:
            "Developer backendu odpowiedzialny za implementację mikroserwisów, integrację z API oraz automatyzację procesów z wykorzystaniem Zato. Rozwijałem backend w Pythonie, przygotowywałem dane do fine-tuningu modeli AI oraz wdrażałem testy integracyjne w pytest.",
        methodology:
            "Agile z codziennymi standupami, retrospekcjami oraz zarządzaniem zadaniami w Jira. Współpraca zespołowa obejmowała code review i szkolenia.",
        key_contributions: [
            "Projektowanie API i mikroserwisów w Zato i FastAPI.",
            "Integracja z narzędziami: Microsoft Azure, SharePoint, RabbitMQ.",
            "Przygotowanie danych dla fine-tuningu modeli AI.",
            "Automatyzacja procesów monitorowania za pomocą Grafana API.",
            "Testowanie i optymalizacja przepływów danych z wykorzystaniem RabbitMQ.",
            "Debugowanie kluczowych problemów systemowych i analiza logów.",
        ],
        duration: "Marzec 2024 - Obecnie",
    },
    {
        title: "Integracja w ACE Toolkit IBM",
        technologies: {
            languages: ["ESQL", "Java"],
            frameworks: ["IBM App Connect Enterprise (ACE)"],
            tools: ["Postman", "Git", "Swagger Editor", "SoapUI"],
            apis: ["REST API", "SOAP"],
            data_formats: ["XML", "JSON"]
        },
        description: "Projekt realizowany dla klienta z branży ubezpieczeniowej, koncentrujący się na rozwoju i utrzymaniu integracji w środowisku IBM ACE Toolkit. Kluczowe zadania obejmowały wdrażanie nowych funkcjonalności, takich jak REST API, oraz optymalizację istniejących przepływów opartych na SOAP. Pracowałem na środowisku developerskim, gdzie testowałem swoje rozwiązania przed przekazaniem ich dedykowanym testerom do pełnej weryfikacji. Po pozytywnych testach funkcjonalności były przekazywane administratorom i architektom, którzy decydowali o ich wdrożeniu na środowisko produkcyjne. Uczestniczyłem w spotkaniach, na których prezentowałem moje rozwiązania klientowi, oraz realizowałem tygodniowe zadanie związane ze standaryzacją struktury danych JSON, wdrażanej w systemie AS400 oraz organizacyjnych przepływach przetwarzających te informacje. Rozpocząłem również implementację innowacyjnego podejścia do agregacji danych w języku Java, które miało na celu zwiększenie wydajności i elastyczności systemu. Projekt został przekazany innym developerom do kontynuacji i wdrożenia w pełni funkcjonalnej wersji.",
        role: "Specjalista ds. integracji - rozwój nowych interfejsów API, optymalizacja istniejących przepływów, analiza i rozwiązywanie błędów oraz wdrażanie nowych funkcjonalności w środowisku developerskim.",
        methodology: "SCRUM z iteracjami dwutygodniowymi, codziennymi spotkaniami (daily), podziałem zadań na sprinty oraz wyceną czasochłonności pracy. Regularna komunikacja z zespołem developerskim, biznesowym i architektem.",
        key_contributions: [
            "Tworzenie i testowanie przepływów integracyjnych SOAP/REST w IBM ACE na środowisku developerskim.",
            "Wdrażanie nowych usług REST API u klienta, który wcześniej korzystał wyłącznie z protokołu SOAP, co przyczyniło się do modernizacji systemu.",
            "Aktualizacja schematów danych przygotowywanych przez architektów oraz wdrażanie ich w przepływach testowych przed przekazaniem na produkcję.",
            "Realizacja tygodniowego zadania dotyczącego standaryzacji struktury danych JSON, co umożliwiło płynną wymianę informacji między systemami klienckimi i przepływami organizacyjnymi.",
            "Rozpoczęcie implementacji procesu agregacji danych w języku Java, mającego na celu zwiększenie wydajności i elastyczności systemu. Projekt został przekazany innym developerom do dalszej realizacji i pełnego wdrożenia.",
            "Rozwiązywanie konfliktów w systemie kontroli wersji Git oraz utrzymanie stabilności kodu w środowisku developerskim.",
            "Prowadzenie testów funkcjonalności na środowisku developerskim, a następnie przekazywanie kodu do testerów w celu weryfikacji penetracyjnej. Poprawa błędów zgłaszanych przez testerów i ponowne wdrażanie funkcjonalności.",
            "Prezentowanie rozwiązań i wyników prac na spotkaniach z klientem, co pozwalało na bieżące uzgadnianie wymagań i wprowadzanie zmian w procesie.",
            "Implementacja struktury danych w systemie AS400 oraz organizacyjnych przepływach przetwarzających informacje w formacie JSON.",
            "Optymalizacja wydajności przepływów danych w środowisku developerskim.",
            "Wsparcie administratorów i architektów w procesie weryfikacji i akceptacji rozwiązań do wdrożenia na produkcję."
        ],
        duration: "Marzec 2023 - Marzec 2024"
    },        

    {
        "title": "Testy i dokumentacja",
        "technologies": {
            "languages": [],
            "tools": ["MS Office (Word, Excel)", "Postman", "Przeglądarki internetowe"]
        },
        "description": "Projekt obejmujący przygotowanie testów wydajności oraz dokumentacji technicznej dla produktu fizycznego klienta z branży energetycznej. Zadania obejmowały zapewnienie spełniania wymagań sprzętowych w oparciu o dokumentację producenta oraz testy w dedykowanych aplikacjach. Testy przeprowadzano w złożonym środowisku obejmującym interfejsy użytkownika i administratora, weryfikując zgodność z przypadkami testowymi opracowanymi wspólnie z klientem. Dodatkowo uczestniczyłem w codziennych spotkaniach typu daily, planowaniu zadań i wspólnej pracy nad dokumentacją w MS Office (Word, Excel). Projekt zakończył się dostarczeniem kompletu dokumentacji (technicznej, wydajnościowej i użytkowej) oraz raportów z testów, co potwierdziło zgodność produktu ze specyfikacją techniczną.",
        "role": "Tester i dokumentalista - przygotowanie testów wydajnościowych, dokumentacji technicznej oraz raportów z testów dla klienta.",
        "methodology": "SCRUM z codziennymi spotkaniami typu daily oraz ustalaniem zadań na kolejne dni.",
        "key_contributions": [
            "Przygotowanie szczegółowej dokumentacji technicznej i raportów testowych.",
            "Przeprowadzenie testów wydajnościowych i funkcjonalnych w dedykowanych aplikacjach.",
            "Weryfikacja zgodności produktu z wymaganiami technicznymi i specyfikacją klienta.",
            "Koordynacja testów interfejsów użytkownika i administratora w środowisku przeglądarkowym.",
            "Usprawnienie współpracy zespołowej dzięki efektywnemu zarządzaniu dokumentami w MS Office.",
            "Opracowanie przypadków testowych we współpracy z klientem."
        ],
        "duration": "Styczeń 2023 - Marzec 2023"
    },
    {
        title: "System automatyzacji informacji o pracownikach",
        technologies: {
            languages: ["Python3", "VBA", "Java"],
            frameworks: ["Office365", "Excel"],
            tools: ["API Skype/Teams/SharePoint", "Outlook API"]
        },
        description: "Projekt polegający na stworzeniu systemu automatyzacji procesów biznesowych związanych z zarządzaniem informacjami o pracownikach, ich profilami zawodowymi oraz ścieżkami rozwoju. System oferował funkcjonalności analityczne, raportowe oraz integracje z zewnętrznymi narzędziami. Główne zadania obejmowały optymalizację zapytań VBA, integrację z pocztą Outlook, oraz opracowanie algorytmu generującego unikalne identyfikatory pracowników. System usprawnił procesy HR, umożliwił bardziej efektywne zarządzanie informacjami oraz ułatwił odnajdywanie pracowników w systemie.",
        role: "Developer automatyzacji procesów biznesowych - rozwój i optymalizacja procesów HR, integracja z systemami zewnętrznymi oraz implementacja algorytmów wspierających zarządzanie informacjami.",
        methodology: "SCRUM z regularnymi spotkaniami i raportowaniem postępów pracy.",
        key_contributions: [
            "Projektowanie i rozwój funkcji analitycznych w Excel i VBA, w tym optymalizacja zapytań w celu poprawy wydajności makr.",
            "Opracowanie algorytmu generującego uniwersalne identyfikatory pracowników (ID), umożliwiającego lepsze zarządzanie ich kontami i wyszukiwanie w systemie.",
            "Integracja z Outlook API w celu automatyzacji korespondencji i zarządzania harmonogramami.",
            "Automatyzacja procesów HR z wykorzystaniem Office365 API oraz narzędzi do zarządzania dokumentami.",
            "Integracja z systemami zewnętrznymi, takimi jak Skype, Teams, SharePoint.",
            "Tworzenie raportów analitycznych na podstawie danych HR oraz generowanie spersonalizowanych powiadomień.",
            "Zarządzanie złożonymi procesami dokumentacyjnymi w Excel, w tym wdrożenie zaawansowanych formuł i makr."
        ],
        duration: "Listopad 2022 - Marzec 2023"
    },

    {
        title: "Staż z integracji systemów biznesowych",
        technologies: {
            languages: ["ESQL", "Java"],
            frameworks: ["IBM Integration Bus (IIB)"],
            apis: ["dane.gov.pl API", "Wewnętrzne API"],
            data_formats: ["XML", "JSON", "CSV"],
            tools: ["Postman", "Git", "Swagger Editor", "SoapUI", "ACE Toolkit 11/12"],
        },
        description:
            "Staż obejmował intensywną pracę nad przepływami danych w szynie integracyjnej IBM Integration Bus (IIB) dla aplikacji biznesowych. Głównym celem było projektowanie i rozwój nowych przepływów, a także wsparcie zespołu w debugowaniu istniejących procesów oraz pomoc początkującym stażystom w zrozumieniu narzędzi i zadań projektowych." +
            "" +
            "Codzienne spotkania, trwające około godziny, pozwalały na wymianę wiedzy, omawianie statusów zadań oraz wspólne analizowanie napotkanych problemów. Spotkania te były nagrywane i udostępniane w wewnętrznej bazie wiedzy firmy, która zawierała również szczegółowe materiały szkoleniowe, wymagające wcześniejszego zapoznania się w celu realizacji zadań." +
            "" +
            "Realizacja zadań obejmowała zarówno projektowanie przepływów SOAP i REST, jak i tworzenie oraz testowanie procesów integracyjnych, które miały realny wpływ na dalszy rozwój istniejących projektów. Praca wymagała ścisłej współpracy między stażystami, gdyż wiele zadań było wzajemnie zależnych, co sprzyjało rozwojowi umiejętności komunikacyjnych i pracy zespołowej." +
            "" +
            "Zadania realizowane w ramach stażu były zróżnicowane – od krótkoterminowych, trwających kilka godzin, po bardziej złożone, wymagające kilku dni pracy. W ramach stażu uczestnicy mieli również okazję samodzielnie projektować i testować przepływy, zapewniając ich zgodność z wymaganiami technicznymi oraz wysoką jakość rozwiązania. Praca przyczyniła się do rozwoju systemów integracyjnych firmy i była istotnym wkładem w tworzenie nowoczesnych rozwiązań integracyjnych.",
        role: "Stażysta ds. integracji - implementacja przepływów SOAP oraz Rest, testowanie procesów oraz ich wytwarzanie, wsparcie reszty zespołu początkujacych stażystów.",
        methodology: "SCRUM",
        key_contributions: [
            "Projektowanie przepływów SOAP w IBM Integration Bus.",
            "Testowanie procesów integracyjnych z Postman.",
            "Utzymywanie kodu w systemie kontroli wersji Git.",
            "Wsparcie zespołu w rozwiązywaniu problemów integracyjnych.",
            "Pomoc w reazlizacji przetwarzania danych w ramach implementacji komunikacji między stworzonymi przepływami.",
        ],
        duration: "Lipiec 2022 - Październik 2022",
    },
];
