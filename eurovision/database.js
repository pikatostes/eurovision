// database.js
import initSqlJs from "sql.js";

const initDatabase = async () => {
    const SQL = await initSqlJs({
        locateFile: file => `https://sql.js.org/dist/${file}` // Asegura que el archivo esté disponible
    });

    // Crear una base de datos en memoria
    const db = new SQL.Database();

    // Crear tablas
    db.run(`
        CREATE TABLE users (
            id TEXT PRIMARY KEY,
            name TEXT,
            email TEXT
        );

        CREATE TABLE songs (
            id TEXT PRIMARY KEY,
            title TEXT,
            artist TEXT,
            country_id TEXT,
            image TEXT,
            information TEXT,
            edition_id TEXT,
            FOREIGN KEY (edition_id) REFERENCES editions(id),
            FOREIGN KEY (country_id) REFERENCES countries(id)
        );

        CREATE TABLE editions (
            id TEXT PRIMARY KEY,
            year INTEGER,
            city TEXT
        );

        CREATE TABLE countries (
            id TEXT PRIMARY KEY,
            name TEXT
        );

        -- Tabla para la relación muchos a muchos entre ediciones y países
        CREATE TABLE edition_countries (
            edition_id TEXT,
            country_id TEXT,
            FOREIGN KEY (edition_id) REFERENCES editions(id),
            FOREIGN KEY (country_id) REFERENCES countries(id),
            PRIMARY KEY (edition_id, country_id)
        );
    `);

    // Insertar datos de ejemplo en `users`
    db.run(`
        INSERT INTO users (id, name, email) VALUES
        ('1', 'Updated Name', 'updated@example.com'),
        ('2', 'Updated Name', 'updated@example.com');
    `);

    // Insertar datos de ejemplo en `editions`
    db.run(`
        INSERT INTO editions (id, year, city) VALUES
        ('1', 1956, 'Lugano'),
        ('2', 1957, 'Frankfurt'),
        ('3', 1958, 'Hilversum'),
        ('4', 1959, 'Cannes'),
        ('5', 1960, 'London'),
        ('6', 1961, 'Cannes'),
        ('7', 1962, 'Luxembourg'),
        ('8', 1963, 'London'),
        ('9', 1964, 'Copenhagen'),
        ('10', 1965, 'Naples'),
        ('11', 1966, 'Luxembourg'),
        ('12', 1967, 'Vienna'),
        ('13', 1968, 'London'),
        ('14', 1969, 'Madrid'),
        ('15', 1970, 'Amsterdam'),
        ('16', 1971, 'Dublin'),
        ('17', 1972, 'Edinburgh'),
        ('18', 1973, 'Luxembourg'),
        ('19', 1974, 'Brighton'),
        ('20', 1975, 'Stockholm'),
        ('21', 1976, 'The Hague'),
        ('22', 1977, 'London'),
        ('23', 1978, 'Paris'),
        ('24', 1979, 'Jerusalem'),
        ('25', 1980, 'The Hague'),
        ('26', 1981, 'Dublin'),
        ('27', 1982, 'Harrogate'),
        ('28', 1983, 'Munich'),
        ('29', 1984, 'Luxembourg'),
        ('30', 1985, 'Gothenburg'),
        ('31', 1986, 'Bergen'),
        ('32', 1987, 'Brussels'),
        ('33', 1988, 'Dublin'),
        ('34', 1989, 'Lausanne'),
        ('35', 1990, 'Zagreb'),
        ('36', 1991, 'Rome'),
        ('37', 1992, 'Malmö'),
        ('38', 1993, 'Millstreet'),
        ('39', 1994, 'Dublin'),
        ('40', 1995, 'Dublin'),
        ('41', 1996, 'Oslo'),
        ('42', 1997, 'Dublin'),
        ('43', 1998, 'Birmingham'),
        ('44', 1999, 'Jerusalem'),
        ('45', 2000, 'Stockholm'),
        ('46', 2001, 'Copenhagen'),
        ('47', 2002, 'Tallin'),
        ('48', 2003, 'Riga'),
        ('49', 2004, 'Istanbul'),
        ('50', 2005, 'Kiev'),
        ('51', 2006, 'Athen'),
        ('52', 2007, 'Helsinki'),
        ('53', 2008, 'Belgrade'),
        ('54', 2009, 'Moscow'),
        ('55', 2010, 'Oslo'),
        ('56', 2011, 'Düsseldorf'),
        ('57', 2012, 'Baku'),
        ('58', 2013, 'Malmö'),
        ('59', 2014, 'Copenhagen'),
        ('60', 2015, 'Vienna'),
        ('61', 2016, 'Stockholm'),
        ('62', 2017, 'Kyiv'),
        ('63', 2018, 'Lisbon'),
        ('64', 2019, 'Tel Aviv'),
        ('65', 2020, 'Rotterdam'),
        ('66', 2021, 'Rotterdam'),
        ('67', 2022, 'Turin'),
        ('68', 2023, 'Liverpool'),
        ('69', 2024, 'Malmö'),
        ('70', 2025, 'Basel');
    `);

    // Insertar datos de ejemplo en `countries`
    db.run(`
        INSERT INTO countries (id, name) VALUES
        (1, 'Albania'),
        (2, 'Andorra'),
        (3, 'Armenia'),
        (4, 'Australia'),
        (5, 'Austria'),
        (6, 'Azerbaijan'),
        (7, 'Belarus'),
        (8, 'Belgium'),
        (9, 'Bosnia and Herzegovina'),
        (10, 'Bulgaria'),
        (11, 'Croatia'),
        (12, 'Cyprus'),
        (13, 'Czechia'),
        (14, 'Denmark'),
        (15, 'Estonia'),
        (16, 'Finland'),
        (17, 'France'),
        (18, 'Georgia'),
        (19, 'Germany'),
        (20, 'Greece'),
        (21, 'Hungary'),
        (22, 'Iceland'),
        (23, 'Ireland'),
        (24, 'Israel'),
        (25, 'Italy'),
        (26, 'Kazakhstan'),
        (27, 'Latvia'),
        (28, 'Lithuania'),
        (29, 'Luxembourg'),
        (30, 'Malta'),
        (31, 'Moldova'),
        (32, 'Monaco'),
        (33, 'Montenegro'),
        (34, 'Morocco'),
        (35, 'Netherlands'),
        (36, 'North Macedonia'),
        (37, 'Norway'),
        (38, 'Poland'),
        (39, 'Portugal'),
        (40, 'Romania'),
        (41, 'Russia'),
        (42, 'San Marino'),
        (43, 'Serbia'),
        (44, 'Serbia and Montenegro'),
        (45, 'Slovakia'),
        (46, 'Slovenia'),
        (47, 'Spain'),
        (48, 'Sweden'),
        (49, 'Switzerland'),
        (50, 'Turkey'),
        (51, 'Ukraine'),
        (52, 'United Kingdom'),
        (53, 'Wales'),
        (54, 'Yugoslavia');
    `);

    // Insertar datos de ejemplo en `songs`
    // 1956
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
        ('1', 'Refrain', 'Lys Assia', '49', '', 'Lys Assia represented Switzerland in 1956 with the song Refrain', '1'),
        ('2', 'De vogels van Holland', 'Jetty Paerl', '35', '', 'Jetty Paerl represented Netherlands in 1956 with the song De vogels van Holland', '1'),
        ('3', 'Das alte Karussell', 'Lys Assia', '49', '', 'Lys Assia represented Switzerland in 1956 with the song Das alte Karussell', '1'),
        ('4', 'Messieurs les noyés de la Seine', 'Fud Leclerc', '8', '', 'Fud Leclerc represented Belgium in 1956 with the song Messieurs les noyés de la Seine', '1'),
        ('5', 'Im Wartesaal zum großen Glück', 'Walter Andreas Schwarz', '19', '', 'Walter Andreas Schwarz represented Germany in 1956 with the song Im Wartesaal zum großen Glück', '1'),
        ('6', 'Le Temps perdu', 'Mathé Altéry', '17', '', 'Mathé Altéry represented France in 1956 with the song Le Temps perdu', '1'),
        ('7', 'Ne crois pas', 'Michèle Arnaud', '29', '', 'Michèle Arnaud represented Luxembourg in 1956 with the song Ne crois pas', '1'),
        ('8', 'Aprite le finestre', 'Franca Raimondi', '25', '', 'Franca Raimondi represented Italy in 1956 with the song Aprite le finestre', '1'),
        ('9', 'Voorgoed voorbij', 'Corry Brokken', '35', '', 'Corry Brokken represented Netherlands in 1956 with the song Voorgoed voorbij', '1'),
        ('10', 'Le Plus Beau Jour de ma vie', 'Mony Marc', '8', '', 'Mony Marc represented Belgium in 1956 with the song Le Plus Beau Jour de ma vie', '1'),
        ('11', 'So geht das jede Nacht', 'Freddy Quinn', '19', '', 'Freddy Quinn represented Germany in 1956 with the song So geht das jede Nacht', '1'),
        ('12', 'Il est là', 'Dany Dauberson', '17', '', 'Dany Dauberson represented France in 1956 with the song Il est là', '1'),
        ('13', 'Les Amants de minuit', 'Michèle Arnaud', '29', '', 'Michèle Arnaud represented Luxembourg in 1956 with the song Les Amants de minuit', '1'),
        ('14', 'Amami se vuoi', 'Tonina Torielli', '25', '', 'Tonina Torielli represented Italy in 1956 with the song Amami se vuoi', '1');
    `);

    // 1957
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
        ('15', 'Net als toen', 'Corry Brokken', '35', '', 'Corry Brokken represented Netherlands in 1957 with the song Net als toen', '2'),
        ('16', 'La Belle Amour', 'Paule Desjardins', '17', '', 'Paule Desjardins represented France in 1957 with the song La Belle Amour', '2'),
        ('17', 'Skibet skal sejle i nat', 'Birthe Wilke & Gustav Winckler', '14', '', 'Birthe Wilke & Gustav Winckler represented Denmark in 1957 with the song Skibet skal sejle i nat', '2'),
        ('18', 'Tant de peine', 'Danièle Dupré', '29', '', 'Danièle Dupré represented Luxembourg in 1957 with the song Tant de peine', '2'),
        ('19', 'Telefon, Telefon', 'Margot Hielscher', '19', '', 'Margot Hielscher represented Germany in 1957 with the song Telefon, Telefon', '2'),
        ('20', 'Corde della mia chitarra', 'Nunzio Gallo', '25', '', 'Nunzio Gallo represented Italy in 1957 with the song Corde della mia chitarra', '2'),
        ('21', 'All', 'Patricia Bredin', '52', '', 'Patricia Bredin represented United Kingdom in 1957 with the song All', '2'),
        ('22', 'Straatdeuntje', 'Bobbejaan Schoepen', '8', '', 'Bobbejaan Schoepen represented Belgium in 1957 with the song Straatdeuntje', '2'),
        ('23', 'L''Enfant que j''étais', 'Lys Assia', '49', '', 'Lys Assia represented Switzerland in 1957 with the song L''Enfant que j''étais', '2'),
        ('24', 'Wohin, kleines Pony?', 'Bob Martin', '5', '', 'Bob Martin represented Austria in 1957 with the song Wohin, kleines Pony?', '2');
    `);

    // Armenia
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
        ('25', 'Dors mon amour', 'André Claveau', '17', '', 'André Claveau represented France in 1958 with the song Dors mon amour', '3'),
        ('26', 'Giorgio', 'Lys Assia', '49', '', 'Lys Assia represented Switzerland in 1958 with the song Giorgio', '3'),
        ('27', 'Nel blu, dipinto di blu', 'Domenico Modugno', '25', '', 'Domenico Modugno represented Italy in 1958 with the song Nel blu, dipinto di blu', '3'),
        ('28', 'Lilla stjärna', 'Alice Babs', '48', '', 'Alice Babs represented Sweden in 1958 with the song Lilla stjärna', '3'),
        ('29', 'Ma petite chatte', 'Fud Leclerc', '8', '', 'Fud Leclerc represented Belgium in 1958 with the song Ma petite chatte', '3'),
        ('30', 'Die ganze Welt braucht Liebe', 'Liane Augustin', '5', '', 'Liane Augustin represented Austria in 1958 with the song Die ganze Welt braucht Liebe', '3'),
        ('31', 'Für zwei Groschen Musik', 'Margot Hielscher', '19', '', 'Margot Hielscher represented Germany in 1958 with the song Für zwei Groschen Musik', '3'),
        ('32', 'Jeg rev et blad ud af min dagbog', 'Raquel Rastenni', '14', '', 'Raquel Rastenni represented Denmark in 1958 with the song Jeg rev et blad ud af min dagbog', '3'),
        ('33', 'Heel de wereld', 'Corry Brokken', '35', '', 'Corry Brokken represented Netherlands in 1958 with the song Heel de wereld', '3'),
        ('34', 'Un grand amour', 'Solange Berry', '29', '', 'Solange Berry represented Luxembourg in 1958 with the song Un grand amour', '3');
    `);

    // Australia
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
        ('35', 'Een beetje', 'Teddy Scholten', '35', '', 'Teddy Scholten represented Netherlands in 1959 with the song Een beetje', '4'),
        ('36', 'Sing Little Birdie', 'Pearl Carr & Teddy Johnson', '52', '', 'Pearl Carr & Teddy Johnson represented United Kingdom in 1959 with the song Sing Little Birdie', '4'),
        ('37', 'Oui, oui, oui, oui', 'Jean Philippe', '17', '', 'Jean Philippe represented France in 1959 with the song Oui, oui, oui, oui', '4'),
        ('38', 'Irgendwoher', 'Christa Williams', '49', '', 'Christa Williams represented Switzerland in 1959 with the song Irgendwoher', '4'),
        ('39', 'Uh, jeg ville ønske jeg var dig', 'Birthe Wilke', '14', '', 'Birthe Wilke represented Denmark in 1959 with the song Uh, jeg ville ønske jeg var dig', '4'),
        ('40', 'Piove', 'Domenico Modugno', '25', '', 'Domenico Modugno represented Italy in 1959 with the song Piove', '4'),
        ('41', 'Hou toch van mij', 'Bob Benny', '8', '', 'Bob Benny represented Belgium in 1959 with the song Hou toch van mij', '4'),
        ('42', 'Heut'' woll''n wir tanzen geh''n', 'Alice and Ellen Kessler', '19', '', 'Alice and Ellen Kessler represented Germany in 1959 with the song Heut'' woll''n wir tanzen geh''n', '4'),
        ('43', 'Augustin', 'Brita Borg', '48', '', 'Brita Borg represented Sweden in 1959 with the song Augustin', '4'),
        ('44', 'Der K. und K. Kalypso aus Wien', 'Ferry Graf', '5', '', 'Ferry Graf represented Austria in 1959 with the song Der K. und K. Kalypso aus Wien', '4'),
        ('45', 'Mon ami Pierrot', 'Jacques Pills', '32', '', 'Jacques Pills represented Monaco in 1959 with the song Mon ami Pierrot', '4');
    `);

    // Austria
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
        ('46', 'Tom Pillibi', 'Jacqueline Boyer', '17', '', 'Jacqueline Boyer represented France in 1960 with the song Tom Pillibi', '5'),
        ('47', 'Looking High, High, High', 'Bryan Johnson', '52', '', 'Bryan Johnson represented United Kingdom in 1960 with the song Looking High, High, High', '5'),
        ('48', 'Ce soir', 'François Deguelt', '32', '', 'François Deguelt represented Monaco in 1960 with the song Ce soir', '5'),
        ('49', 'Voi', 'Nora Brockstedt', '37', '', 'Nora Brockstedt represented Norway in 1960 with the song Voi', '5'),
        ('50', 'Bonne nuit ma chérie', 'Wyn Hoop', '19', '', 'Wyn Hoop represented Germany in 1960 with the song Bonne nuit ma chérie', '5'),
        ('51', 'Mon amour pour toi', 'Fud Leclerc', '8', '', 'Fud Leclerc represented Belgium in 1960 with the song Mon amour pour toi', '5'),
        ('52', 'Du hast mich so fasziniert', 'Harry Winter', '5', '', 'Harry Winter represented Austria in 1960 with the song Du hast mich so fasziniert', '5'),
        ('53', 'Cielo e terra', 'Anita Traversi', '49', '', 'Anita Traversi represented Switzerland in 1960 with the song Cielo e terra', '5'),
        ('54', 'Romantica', 'Renato Rascel', '25', '', 'Renato Rascel represented Italy in 1960 with the song Romantica', '5'),
        ('55', 'Alla andra får varann', 'Siw Malmkvist', '48', '', 'Siw Malmkvist represented Sweden in 1960 with the song Alla andra får varann', '5'),
        ('56', 'Det var en yndig tid', 'Katy Bødtger', '14', '', 'Katy Bødtger represented Denmark in 1960 with the song Det var en yndig tid', '5'),
        ('57', 'Wat een geluk', 'Rudi Carrell', '35', '', 'Rudi Carrell represented Netherlands in 1960 with the song Wat een geluk', '5'),
        ('58', 'So laang we''s du do bast', 'Camillo Felgen', '29', '', 'Camillo Felgen represented Luxembourg in 1960 with the song So laang we''s du do bast', '5');
    `);

    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
        ('59', 'Claude Pascal', 'Jean', '29', '', 'Jean represented Luxembourg in 1961 with the song Claude Pascal', '6'),
        ('60', 'Are You Sure?', 'The Allisons', '52', '', 'The Allisons represented United Kingdom in 1961 with the song Are You Sure?', '6'),
        ('61', 'Nous aurons demain', 'Franca di Rienzo', '49', '', 'Franca di Rienzo represented Switzerland in 1961 with the song Nous aurons demain', '6'),
        ('62', 'Paul Mauric', 'Jean', '17', '', 'Jean represented France in 1961 with the song Paul Mauric', '6'),
        ('63', 'Angelique', 'Dario Campeotto', '14', '', 'Dario Campeotto represented Denmark in 1961 with the song Angelique', '6'),
        ('64', 'Al di là', 'Betty Curtis', '25', '', 'Betty Curtis represented Italy in 1961 with the song Al di là', '6'),
        ('65', 'Sommer i Palma', 'Nora Brockstedt', '37', '', 'Nora Brockstedt represented Norway in 1961 with the song Sommer i Palma', '6'),
        ('66', 'Neke davne zvezde', 'Ljiljana Petrović', '54', '', 'Ljiljana Petrović represented Yugoslavia in 1961 with the song Neke davne zvezde', '6'),
        ('67', 'Estando contigo', 'Conchita Bautista', '47', './src/assets/es-1961.jpg', 'Conchita Bautista represented Spain in 1961 with the song Estando contigo', '6'),
        ('68', 'Allons, allons les enfants', 'Colette Deréal', '32', '', 'Colette Deréal represented Monaco in 1961 with the song Allons, allons les enfants', '6'),
        ('69', 'Valoa ikkunassa', 'Laila Kinnunen', '16', '', 'Laila Kinnunen represented Finland in 1961 with the song Valoa ikkunassa', '6'),
        ('70', 'Wat een dag', 'Greetje Kauffeld', '35', '', 'Greetje Kauffeld represented Netherlands in 1961 with the song Wat een dag', '6'),
        ('71', 'Einmal sehen wir uns wieder', 'Lale Andersen', '19', '', 'Lale Andersen represented Germany in 1961 with the song Einmal sehen wir uns wieder', '6'),
        ('72', 'Babs', 'Lill', '48', '', 'Lill represented Sweden in 1961 with the song Babs', '6'),
        ('73', 'Sehnsucht', 'Jimmy Makulis', '5', '', 'Jimmy Makulis represented Austria in 1961 with the song Sehnsucht', '6'),
        ('74', 'September, gouden roos', 'Bob Benny', '8', '', 'Bob Benny represented Belgium in 1961 with the song September, gouden roos', '6');
    `);

    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
        ('75', 'Un premier amour', 'Isabelle Aubret', '17', '', 'Isabelle Aubret represented France in 1962 with the song Un premier amour', '7'),
        ('76', 'Dis rien', 'François Deguelt', '32', '', 'François Deguelt represented Monaco in 1962 with the song Dis rien', '7'),
        ('77', 'Petit bonhomme', 'Camillo Felgen', '29', '', 'Camillo Felgen represented Luxembourg in 1962 with the song Petit bonhomme', '7'),
        ('78', 'Ne pali svetla u sumrak', 'Lola Novaković', '54', '', 'Lola Novaković represented Yugoslavia in 1962 with the song Ne pali svetla u sumrak', '7'),
        ('79', 'Ring', 'Ronnie Carroll', '52', '', 'Ronnie Carroll represented United Kingdom in 1962 with the song Ring', '7'),
        ('80', 'Zwei kleine Italiener', 'Conny Froboess', '19', '', 'Conny Froboess represented Germany in 1962 with the song Zwei kleine Italiener', '7'),
        ('81', 'Tipi', 'Marion Rung', '16', '', 'Marion Rung represented Finland in 1962 with the song Tipi', '7'),
        ('82', 'Sol och vår', 'Inger Berggren', '48', '', 'Inger Berggren represented Sweden in 1962 with the song Sol och vår', '7'),
        ('83', 'Addio, addio', 'Claudio Villa', '25', '', 'Claudio Villa represented Italy in 1962 with the song Addio, addio', '7'),
        ('84', 'Vuggevise', 'Ellen Winther', '14', '', 'Ellen Winther represented Denmark in 1962 with the song Vuggevise', '7'),
        ('85', 'Kom sol, kom regn', 'Inger Jacobsen', '37', '', 'Inger Jacobsen represented Norway in 1962 with the song Kom sol, kom regn', '7'),
        ('86', 'Le Retour', 'Jean Philippe', '49', '', 'Jean Philippe represented Switzerland in 1962 with the song Le Retour', '7'),
        ('87', 'Ton nom', 'Fud Leclerc', '8', '', 'Fud Leclerc represented Belgium in 1962 with the song Ton nom', '7'),
        ('88', 'Llámame', 'Victor Balaguer', '47', './src/assets/es-1962.jpg', 'Victor Balaguer represented Spain in 1962 with the song Llámame', '7'),
        ('89', 'Nur in der Wiener Luft', 'Eleonore Schwarz', '5', '', 'Eleonore Schwarz represented Austria in 1962 with the song Nur in der Wiener Luft', '7'),
        ('90', 'Katinka', 'De Spelbrekers', '35', '', 'De Spelbrekers represented Netherlands in 1962 with the song Katinka', '7');
    `);

    // 1963
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('91', 'Dansevise', 'Grethe & Jørgen Ingmann', '14', '', 'Grethe & Jørgen Ingmann represented Denmark in 1963 with the song Dansevise', '8'),
('92', 'T''en vas pas', 'Esther Ofarim', '49', '', 'Esther Ofarim represented Switzerland in 1963 with the song T''en vas pas', '8'),
('93', 'Uno per tutte', 'Emilio Pericoli', '25', '', 'Emilio Pericoli represented Italy in 1963 with the song Uno per tutte', '8'),
('94', 'Say Wonderful Things', 'Ronnie Carroll', '52', '', 'Ronnie Carroll represented United Kingdom in 1963 with the song Say Wonderful Things', '8'),
('95', 'Elle était si jolie', 'Alain Barrière', '17', '', 'Alain Barrière represented France in 1963 with the song Elle était si jolie', '8'),
('96', 'L''amour s''en va', 'Françoise Hardy', '32', '', 'Françoise Hardy represented Monaco in 1963 with the song L''amour s''en va', '8'),
('97', 'Vielleicht geschieht ein Wunder', 'Carmela Corren', '5', '', 'Carmela Corren represented Austria in 1963 with the song Vielleicht geschieht ein Wunder', '8'),
('98', 'À force de prier', 'Nana Mouskouri', '29', '', 'Nana Mouskouri represented Luxembourg in 1963 with the song À force de prier', '8'),
('99', 'Marcel', 'Heidi Brühl', '19', '', 'Heidi Brühl represented Germany in 1963 with the song Marcel', '8'),
('100', 'Waarom?', 'Jacques Raymond', '8', '', 'Jacques Raymond represented Belgium in 1963 with the song Waarom?', '8'),
('101', 'Brodovi', 'Vice Vukov', '54', '', 'Vice Vukov represented Yugoslavia in 1963 with the song Brodovi', '8'),
('102', 'Algo prodigioso', 'José Guardiola', '47', './src/assets/es-1963.jpg', 'José Guardiola represented Spain in 1963 with the song Algo prodigioso', '8'),
('103', 'Een speeldoos', 'Annie Palmen', '35', '', 'Annie Palmen represented Netherlands in 1963 with the song Een speeldoos', '8'),
('104', 'Solhverv', 'Anita Thallaug', '37', '', 'Anita Thallaug represented Norway in 1963 with the song Solhverv', '8'),
('105', 'Muistojeni laulu', 'Laila Halme', '16', '', 'Laila Halme represented Finland in 1963 with the song Muistojeni laulu', '8'),
('106', 'En gång i Stockholm', 'Monica Zetterlund', '48', '', 'Monica Zetterlund represented Sweden in 1963 with the song En gång i Stockholm', '8');
    `);

    // 1964
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('107', 'Non ho l''età', 'Gigliola Cinquetti', '25', '', 'Gigliola Cinquetti represented Italy in 1964 with the song Non ho l''età', '9'),
('108', 'I Love the Little Things', 'Matt Monro', '52', '', 'Matt Monro represented United Kingdom in 1964 with the song I Love the Little Things', '9'),
('109', 'Où sont', 'Romuald', '32', '', 'Romuald represented Monaco in 1964 with the song Où sont', '9'),
('110', 'Dès que le printemps revient', 'Hugues Aufray', '29', '', 'Hugues Aufray represented Luxembourg in 1964 with the song Dès que le printemps revient', '9'),
('111', 'Le Chant de Mallory', 'Rachel', '17', '', 'Rachel represented France in 1964 with the song Le Chant de Mallory', '9'),
('112', 'Warum nur, warum?', 'Udo Jürgens', '5', '', 'Udo Jürgens represented Austria in 1964 with the song Warum nur, warum?', '9'),
('113', 'Laiskotellen', 'Lasse Mårtenson', '16', '', 'Lasse Mårtenson represented Finland in 1964 with the song Laiskotellen', '9'),
('114', 'Spiral', 'Arne Bendiksen', '37', '', 'Arne Bendiksen represented Norway in 1964 with the song Spiral', '9'),
('115', 'Sangen om dig', 'Bjørn Tidmand', '14', '', 'Bjørn Tidmand represented Denmark in 1964 with the song Sangen om dig', '9'),
('116', 'Jij bent mijn leven', 'Anneke Grönloh', '35', '', 'Anneke Grönloh represented Netherlands in 1964 with the song Jij bent mijn leven', '9'),
('117', 'Près de ma rivière', 'Robert Cogoi', '8', '', 'Robert Cogoi represented Belgium in 1964 with the song Près de ma rivière', '9'),
('118', 'Caracola', 'Tim, Nelly and Tony', '47', './src/assets/es-1964.webp', 'Tim, Nelly and Tony represented Spain in 1964 with the song Caracola', '9'),
('119', 'Man gewöhnt sich so schnell an das Schöne', 'Nora Nova', '19', '', 'Nora Nova represented Germany in 1964 with the song Man gewöhnt sich so schnell an das Schöne', '9'),
('120', 'Oração', 'António Calvário', '39', '', 'António Calvário represented Portugal in 1964 with the song Oração', '9'),
('121', 'Život je sklopio krug', 'Sabahudin Kurt', '54', '', 'Sabahudin Kurt represented Yugoslavia in 1964 with the song Život je sklopio krug', '9'),
('122', 'I miei pensieri', 'Anita Traversi', '49', '', 'Anita Traversi represented Switzerland in 1964 with the song I miei pensieri', '9');
    `);

    // 1965
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('123', 'Poupée de cire, poupée de son', 'France Gall', '29', '', 'France Gall represented Luxembourg in 1965 with the song Poupée de cire, poupée de son', '10'),
('124', 'I Belong', 'Kathy Kirby', '52', '', 'Kathy Kirby represented United Kingdom in 1965 with the song I Belong', '10'),
('125', 'N''avoue jamais', 'Guy Mardel', '17', '', 'Guy Mardel represented France in 1965 with the song N''avoue jamais', '10'),
('126', 'Sag ihr, ich lass sie grüßen', 'Udo Jürgens', '5', '', 'Udo Jürgens represented Austria in 1965 with the song Sag ihr, ich lass sie grüßen', '10'),
('127', 'Se piangi, se ridi', 'Bobby Solo', '25', '', 'Bobby Solo represented Italy in 1965 with the song Se piangi, se ridi', '10'),
('128', 'I''m Walking the Streets in the Rain', 'Butch Moore', '23', '', 'Butch Moore represented Ireland in 1965 with the song I''m Walking the Streets in the Rain', '10'),
('129', 'For din skyld', 'Birgit Brüel', '14', '', 'Birgit Brüel represented Denmark in 1965 with the song For din skyld', '10'),
('130', 'Non, à jamais sans toi', 'Yovanna', '49', '', 'Yovanna represented Switzerland in 1965 with the song Non, à jamais sans toi', '10'),
('131', 'Va dire à l''amour', 'Marjorie Noël', '32', '', 'Marjorie Noël represented Monaco in 1965 with the song Va dire à l''amour', '10'),
('132', 'Absent Friend', 'Ingvar Wixell', '48', '', 'Ingvar Wixell represented Sweden in 1965 with the song Absent Friend', '10'),
('133', 'Het is genoeg', 'Conny Van den bos', '35', '', 'Conny Van den bos represented Netherlands in 1965 with the song Het is genoeg', '10'),
('134', 'Čežnja', 'Vice Vukov', '54', '', 'Vice Vukov represented Yugoslavia in 1965 with the song Čežnja', '10'),
('135', 'Karusell', 'Kirsti Sparboe', '37', '', 'Kirsti Sparboe represented Norway in 1965 with the song Karusell', '10'),
('136', 'Sol de inverno', 'Simone de Oliveira', '39', '', 'Simone de Oliveira represented Portugal in 1965 with the song Sol de inverno', '10'),
('137', 'Qué bueno, qué bueno', 'Conchita Bautista', '47', './src/assets/es-1965.jpeg', 'Conchita Bautista represented Spain in 1965 with the song Qué bueno, qué bueno', '10'),
('138', 'Paradies, wo bist du', 'Ulla Wiesner', '19', '', 'Ulla Wiesner represented Germany in 1965 with the song Paradies, wo bist du', '10'),
('139', 'Als het weer lente is', 'Lize Marke', '8', '', 'Lize Marke represented Belgium in 1965 with the song Als het weer lente is', '10'),
('140', 'Aurinko laskee länteen', 'Viktor Klimenko', '16', '', 'Viktor Klimenko represented Finland in 1965 with the song Aurinko laskee länteen', '10');
    `);

    // 1966
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('141', 'Merci Chérie', 'Udo Jürgens', '5', '', 'Udo Jürgens represented Austria in 1966 with the song Merci Chérie', '11'),
('142', 'Nygammal vals', 'Lill Lindfors & Svante Thuresson', '48', '', 'Lill Lindfors & Svante Thuresson represented Sweden in 1966 with the song Nygammal vals', '11'),
('143', 'Intet er nytt under solen', 'Åse Kleveland', '37', '', 'Åse Kleveland represented Norway in 1966 with the song Intet er nytt under solen', '11'),
('144', 'Un peu de poivre, un peu de sel', 'Tonia', '8', '', 'Tonia represented Belgium in 1966 with the song Un peu de poivre, un peu de sel', '11'),
('145', 'Come Back to Stay', 'Dickie Rock', '23', '', 'Dickie Rock represented Ireland in 1966 with the song Come Back to Stay', '11'),
('146', 'Ne vois', 'Madeleine Pascal', '49', '', 'Madeleine Pascal represented Switzerland in 1966 with the song Ne vois', '11'),
('147', 'Brez besed', 'Berta Ambroz', '54', '', 'Berta Ambroz represented Yugoslavia in 1966 with the song Brez besed', '11'),
('148', 'Yo soy aquél', 'Raphael', '47', './src/assets/es-1966.jpg', 'Raphael represented Spain in 1966 with the song Yo soy aquél', '11'),
('149', 'A Man Without Love', 'Kenneth McKellar', '52', '', 'Kenneth McKellar represented United Kingdom in 1966 with the song A Man Without Love', '11'),
('150', 'Die Zeiger der Uhr', 'Margot Eskens', '19', '', 'Margot Eskens represented Germany in 1966 with the song Die Zeiger der Uhr', '11'),
('151', 'Ce soir je t''attendais', 'Michèle Torr', '29', '', 'Michèle Torr represented Luxembourg in 1966 with the song Ce soir je t''attendais', '11'),
('152', 'Christine Nyström', 'Ann', '16', '', 'Ann represented Finland in 1966 with the song Christine Nyström', '11'),
('153', 'Ele e ela', 'Madalena Iglesias', '39', '', 'Madalena Iglesias represented Portugal in 1966 with the song Ele e ela', '11'),
('154', 'Stop, mens legen er go''', 'Ulla Pia', '14', '', 'Ulla Pia represented Denmark in 1966 with the song Stop, mens legen er go''', '11'),
('155', 'Fernando en Philippo', 'Milly Scott', '35', '', 'Milly Scott represented Netherlands in 1966 with the song Fernando en Philippo', '11'),
('156', 'Chez nous', 'Dominique Walter', '17', '', 'Dominique Walter represented France in 1966 with the song Chez nous', '11'),
('157', 'Bien plus fort', 'Tereza', '32', '', 'Tereza represented Monaco in 1966 with the song Bien plus fort', '11'),
('158', 'Dio, come ti amo', 'Domenico Modugno', '25', '', 'Domenico Modugno represented Italy in 1966 with the song Dio, come ti amo', '11');
        `);

    // 1967
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('159', 'Puppet on a String', 'Sandie Shaw', '52', '', 'Sandie Shaw represented United Kingdom in 1967 with the song Puppet on a String', '12'),
('160', 'If I Could Choose', 'Sean Dunphy', '23', '', 'Sean Dunphy represented Ireland in 1967 with the song If I Could Choose', '12'),
('161', 'Il doit faire beau là', 'Noëlle Cordier', '17', '', 'Noëlle Cordier represented France in 1967 with the song Il doit faire beau là', '12'),
('162', 'L''amour est bleu', 'Vicky', '29', '', 'Vicky represented Luxembourg in 1967 with the song L''amour est bleu', '12'),
('163', 'Boum', 'Minouche Barelli', '32', '', 'Minouche Barelli represented Monaco in 1967 with the song Boum', '12'),
('164', 'Hablemos del amor', 'Raphael', '47', './src/assets/es-1967.jpg', 'Raphael represented Spain in 1967 with the song Hablemos del amor', '12'),
('165', 'Ik heb zorgen', 'Louis Neefs', '8', '', 'Louis Neefs represented Belgium in 1967 with the song Ik heb zorgen', '12'),
('166', 'Som en dröm', 'Östen Warnerbring', '48', '', 'Östen Warnerbring represented Sweden in 1967 with the song Som en dröm', '12'),
('167', 'Anouschka', 'Inge Brück', '19', '', 'Inge Brück represented Germany in 1967 with the song Anouschka', '12'),
('168', 'Vse rože sveta', 'Lado Leskovar', '54', '', 'Lado Leskovar represented Yugoslavia in 1967 with the song Vse rože sveta', '12'),
('169', 'Non andare più lontano', 'Claudio Villa', '25', '', 'Claudio Villa represented Italy in 1967 with the song Non andare più lontano', '12'),
('170', 'O vento mudou', 'Eduardo Nascimento', '39', '', 'Eduardo Nascimento represented Portugal in 1967 with the song O vento mudou', '12'),
('171', 'Varjoon', 'Fredi', '16', '', 'Fredi represented Finland in 1967 with the song Varjoon', '12'),
('172', 'Ring', 'Thérèse Steinmetz', '35', '', 'Thérèse Steinmetz represented Netherlands in 1967 with the song Ring', '12'),
('173', 'Warum es hunderttausend Sterne gibt', 'Peter Horten', '5', '', 'Peter Horten represented Austria in 1967 with the song Warum es hunderttausend Sterne gibt', '12'),
('174', 'Dukkemann', 'Kirsti Sparboe', '37', '', 'Kirsti Sparboe represented Norway in 1967 with the song Dukkemann', '12'),
('175', 'Quel cœur vas', 'Géraldine', '49', '', 'Géraldine represented Switzerland in 1967 with the song Quel cœur vas', '12');
        `);

    // 1968
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('176', 'La, la, la', 'Massiel', '47', './src/assets/es-1968.jpg', 'Massiel represented Spain in 1968 with the song La, la, la', '13'),
('177', 'Congratulations', 'Cliff Richard', '52', '', 'Cliff Richard represented United Kingdom in 1968 with the song Congratulations', '13'),
('178', 'La Source', 'Isabelle Aubret', '17', '', 'Isabelle Aubret represented France in 1968 with the song La Source', '13'),
('179', 'Chance of a Lifetime', 'Pat McGeegan', '23', '', 'Pat McGeegan represented Ireland in 1968 with the song Chance of a Lifetime', '13'),
('180', 'Göran Hederström', 'Claes', '48', '', 'Claes represented Sweden in 1968 with the song Göran Hederström', '13'),
('181', 'Ein Hoch der Liebe', 'Wencke Myhre', '19', '', 'Wencke Myhre represented Germany in 1968 with the song Ein Hoch der Liebe', '13'),
('182', 'Quand tu reviendras', 'Claude Lombard', '8', '', 'Claude Lombard represented Belgium in 1968 with the song Quand tu reviendras', '13'),
('183', 'À chacun sa chanson', 'Line & Willy', '32', '', 'Line & Willy represented Monaco in 1968 with the song À chacun sa chanson', '13'),
('184', 'Jedan dan', 'Lući Kapurso & Hamo Hajdarhodžić', '54', '', 'Lući Kapurso & Hamo Hajdarhodžić represented Yugoslavia in 1968 with the song Jedan dan', '13'),
('185', 'Marianne', 'Sergio Endrigo', '25', '', 'Sergio Endrigo represented Italy in 1968 with the song Marianne', '13'),
('186', 'Verão', 'Carlos Mendes', '39', '', 'Carlos Mendes represented Portugal in 1968 with the song Verão', '13'),
('187', 'Nous vivrons d''amour', 'Chris Baldo & Sophie Garel', '29', '', 'Chris Baldo & Sophie Garel represented Luxembourg in 1968 with the song Nous vivrons d''amour', '13'),
('188', 'Tausend Fenster', 'Karel Gott', '5', '', 'Karel Gott represented Austria in 1968 with the song Tausend Fenster', '13'),
('189', 'Guardando il sole', 'Gianni Mascolo', '49', '', 'Gianni Mascolo represented Switzerland in 1968 with the song Guardando il sole', '13'),
('190', 'Stress', 'Odd Børre', '37', '', 'Odd Børre represented Norway in 1968 with the song Stress', '13'),
('191', 'Morgen', 'Ronnie Tober', '35', '', 'Ronnie Tober represented Netherlands in 1968 with the song Morgen', '13'),
('192', 'Kun kello käy', 'Kristina Hautala', '16', '', 'Kristina Hautala represented Finland in 1968 with the song Kun kello käy', '13');
        `)

    // 1969
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('193', 'Vivo cantando', 'Salomé', '47', './src/assets/es-1969.png', 'Salomé represented Spain in 1969 with the song Vivo cantando', '14'),
('194', 'Boom Bang', 'Lulu', '52', '', 'Lulu represented United Kingdom in 1969 with the song Boom Bang', '14'),
('195', 'De troubadour', 'Lenny Kuhr', '35', '', 'Lenny Kuhr represented Netherlands in 1969 with the song De troubadour', '14'),
('196', 'Un jour, un enfant', 'Frida Boccara', '17', '', 'Frida Boccara represented France in 1969 with the song Un jour, un enfant', '14'),
('197', 'Bonjour, Bonjour', 'Paola del Medico', '49', '', 'Paola del Medico represented Switzerland in 1969 with the song Bonjour, Bonjour', '14'),
('198', 'Jacques', 'Jean', '32', '', 'Jean represented Monaco in 1969 with the song Jacques', '14'),
('199', 'The Wages of Love', 'Muriel Day and the Lindsays', '23', '', 'Muriel Day and the Lindsays represented Ireland in 1969 with the song The Wages of Love', '14'),
('200', 'Jennifer Jennings', 'Louis Neefs', '8', '', 'Louis Neefs represented Belgium in 1969 with the song Jennifer Jennings', '14'),
('201', 'Judy, min vän', 'Tommy Körberg', '48', '', 'Tommy Körberg represented Sweden in 1969 with the song Judy, min vän', '14'),
('202', 'Primaballerina', 'Siw Malmkvist', '19', '', 'Siw Malmkvist represented Germany in 1969 with the song Primaballerina', '14'),
('203', 'Catherine', 'Romuald', '29', '', 'Romuald represented Luxembourg in 1969 with the song Catherine', '14'),
('204', 'Kuin silloin ennen', 'Jarkko & Laura', '16', '', 'Jarkko & Laura represented Finland in 1969 with the song Kuin silloin ennen', '14'),
('205', 'Pozdrav svijetu', 'Ivan & M''s', '54', '', 'Ivan & M''s represented Yugoslavia in 1969 with the song Pozdrav svijetu', '14'),
('206', 'Due grosse lacrime bianche', 'Iva Zanicchi', '25', '', 'Iva Zanicchi represented Italy in 1969 with the song Due grosse lacrime bianche', '14'),
('207', 'Desfolhada portuguesa', 'Simone de Oliveira', '39', '', 'Simone de Oliveira represented Portugal in 1969 with the song Desfolhada portuguesa', '14'),
('208', 'Oj, oj, oj, så glad jeg skal bli', 'Kirsti Sparboe', '37', '', 'Kirsti Sparboe represented Norway in 1969 with the song Oj, oj, oj, så glad jeg skal bli', '14');
        `)

    // 1970
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('209', 'All Kinds of Everything', 'Dana', '23', '', 'Dana represented Ireland in 1970 with the song All Kinds of Everything', '15'),
('210', 'Knock, Knock (Who''s There?)', 'Mary Hopkin', '52', '', 'Mary Hopkin represented United Kingdom in 1970 with the song Knock, Knock (Who''s There?)', '15'),
('211', 'Wunder gibt es immer wieder', 'Katja Ebstein', '19', '', 'Katja Ebstein represented Germany in 1970 with the song Wunder gibt es immer wieder', '15'),
('212', 'Retour', 'Henri Dès', '49', '', 'Henri Dès represented Switzerland in 1970 with the song Retour', '15'),
('213', 'Marie', 'Guy Bonnet', '17', '', 'Guy Bonnet represented France in 1970 with the song Marie', '15'),
('214', 'Gwendolyne', 'Julio Iglesias', '47', './src/assets/es-1970.webp', 'Julio Iglesias represented Spain in 1970 with the song Gwendolyne', '15'),
('215', 'Waterman', 'Patricia & Hearts of Soul', '35', '', 'Patricia & Hearts of Soul represented Netherlands in 1970 with the song Waterman', '15'),
('216', 'Occhi di ragazza', 'Gianni Morandi', '25', '', 'Gianni Morandi represented Italy in 1970 with the song Occhi di ragazza', '15'),
('217', 'Viens l''oublier', 'Jean Vallée', '8', '', 'Jean Vallée represented Belgium in 1970 with the song Viens l''oublier', '15'),
('218', 'Marlène', 'Dominique Dussault', '32', '', 'Dominique Dussault represented Monaco in 1970 with the song Marlène', '15'),
('219', 'Pridi, dala ti bom cvet', 'Eva Sršen', '54', '', 'Eva Sršen represented Yugoslavia in 1970 with the song Pridi, dala ti bom cvet', '15'),
('220', 'Alexandre Winter', 'David', '29', '', 'David represented Luxembourg in 1970 with the song Alexandre Winter', '15');
        `)

    // 1971
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('221', 'Un banc, un arbre, une rue', 'Séverine', '32', '', 'Séverine represented Monaco in 1971 with the song Un banc, un arbre, une rue', '16'),
('222', 'En un mundo nuevo', 'Karina', '47', './src/assets/es-1971.jpg', 'Karina represented Spain in 1971 with the song En un mundo nuevo', '16'),
('223', 'Diese Welt', 'Katja Ebstein', '19', '', 'Katja Ebstein represented Germany in 1971 with the song Diese Welt', '16'),
('224', 'Jack in the Box', 'Clodagh Rodgers', '52', '', 'Clodagh Rodgers represented United Kingdom in 1971 with the song Jack in the Box', '16'),
('225', 'L''amore è un attimo', 'Massimo Ranieri', '25', '', 'Massimo Ranieri represented Italy in 1971 with the song L''amore è un attimo', '16'),
('226', 'Vita vidder', 'Family Four', '48', '', 'Family Four represented Sweden in 1971 with the song Vita vidder', '16'),
('227', 'Tijd', 'Saskia & Serge', '35', '', 'Saskia & Serge represented Netherlands in 1971 with the song Tijd', '16'),
('228', 'Tie uuteen päivään', 'Markku Aro and Koivisto Sisters', '16', '', 'Markku Aro and Koivisto Sisters represented Finland in 1971 with the song Tie uuteen päivään', '16'),
('229', 'Menina do alto da serra', 'Tonicha', '39', '', 'Tonicha represented Portugal in 1971 with the song Menina do alto da serra', '16'),
('230', 'Un jardin sur la terre', 'Serge Lama', '17', '', 'Serge Lama represented France in 1971 with the song Un jardin sur la terre', '16'),
('231', 'One Day Love', 'Angela Farrell', '23', '', 'Angela Farrell represented Ireland in 1971 with the song One Day Love', '16'),
('232', 'Les Illusions de nos vingt ans', 'Peter, Sue and Marc', '49', '', 'Peter, Sue and Marc represented Switzerland in 1971 with the song Les Illusions de nos vingt ans', '16'),
('233', 'Pomme, pomme, pomme', 'Monique Melsen', '29', '', 'Monique Melsen represented Luxembourg in 1971 with the song Pomme, pomme, pomme', '16'),
('234', 'Goeie morgen, morgen', 'Lily Castel and Jacques Raymond', '8', '', 'Lily Castel and Jacques Raymond represented Belgium in 1971 with the song Goeie morgen, morgen', '16'),
('235', 'Tvoj dječak je tužan', 'Krunoslav Slabinac', '54', '', 'Krunoslav Slabinac represented Yugoslavia in 1971 with the song Tvoj dječak je tužan', '16'),
('236', 'Musik', 'Marianne Mendt', '5', '', 'Marianne Mendt represented Austria in 1971 with the song Musik', '16'),
('237', 'Lykken er...', 'Hanne Krogh', '37', '', 'Hanne Krogh represented Norway in 1971 with the song Lykken er...', '16'),
('238', 'Marija l', 'Joe Grech', '30', '', 'Joe Grech represented Malta in 1971 with the song Marija l', '16');`)

    // 1972
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('239', 'Après toi', 'Vicky Leandros', '29', '', 'Vicky Leandros represented Luxembourg in 1972 with the song Après toi', '17'),
('240', 'Beg, Steal or Borrow', 'The New Seekers', '52', '', 'The New Seekers represented United Kingdom in 1972 with the song Beg, Steal or Borrow', '17'),
('241', 'Nur die Liebe läßt uns leben', 'Mary Roos', '19', '', 'Mary Roos represented Germany in 1972 with the song Nur die Liebe läßt uns leben', '17'),
('242', 'Als het om de liefde gaat', 'Sandra & Andres', '35', '', 'Sandra & Andres represented Netherlands in 1972 with the song Als het om de liefde gaat', '17'),
('243', 'Falter im Wind', 'The Milestones', '5', '', 'The Milestones represented Austria in 1972 with the song Falter im Wind', '17'),
('244', 'I giorni dell''arcobaleno', 'Nicola di Bari', '25', '', 'Nicola di Bari represented Italy in 1972 with the song I giorni dell''arcobaleno', '17'),
('245', 'A festa da vida', 'Carlos Mendes', '39', '', 'Carlos Mendes represented Portugal in 1972 with the song A festa da vida', '17'),
('246', 'C''est la chanson de mon amour', 'Véronique Müller', '49', '', 'Véronique Müller represented Switzerland in 1972 with the song C''est la chanson de mon amour', '17'),
('247', 'Muzika i ti', 'Tereza', '54', '', 'Tereza represented Yugoslavia in 1972 with the song Muzika i ti', '17'),
('248', 'Amanece', 'Jaime Morey', '47', './src/assets/es-1972.jpeg', 'Jaime Morey represented Spain in 1972 with the song Amanece', '17'),
('249', 'Comé', 'Betty Mars', '17', '', 'Betty Mars represented France in 1972 with the song Comé', '17'),
('250', 'Muistathan', 'Päivi Paunu and Kim Floor', '16', '', 'Päivi Paunu and Kim Floor represented Finland in 1972 with the song Muistathan', '17'),
('251', 'Härliga sommardag', 'Family Four', '48', '', 'Family Four represented Sweden in 1972 with the song Härliga sommardag', '17'),
('252', 'Småting', 'Grethe Kausland & Benny Borg', '37', '', 'Grethe Kausland & Benny Borg represented Norway in 1972 with the song Småting', '17'),
('253', 'Ceol an Ghrá', 'Sandie Jones', '23', '', 'Sandie Jones represented Ireland in 1972 with the song Ceol an Ghrá', '17'),
('254', 'Marie Godart and Peter MacLane', 'Anne', '32', '', 'Anne represented Monaco in 1972 with the song Marie Godart and Peter MacLane', '17'),
('255', 'À la folie ou pas du tout', 'Serge and Christine Ghisoland', '8', '', 'Serge and Christine Ghisoland represented Belgium in 1972 with the song À la folie ou pas du tout', '17'),
('256', 'L', 'Helen & Joseph', '30', '', 'Helen & Joseph represented Malta in 1972 with the song L', '17');
        `)

    // 1973
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('257', 'Marie David', 'Anne', '29', '', 'Anne represented Luxembourg in 1973 with the song Marie David', '18'),
('258', 'Eres tú', 'Mocedades', '47', './src/assets/es-1973.jpg', 'Mocedades represented Spain in 1973 with the song Eres tú', '18'),
('259', 'Power to All Our Friends', 'Cliff Richard', '52', '', 'Cliff Richard represented United Kingdom in 1973 with the song Power to All Our Friends', '18'),
('260', 'Ey Sham', 'Ilanit', '24', '', 'Ilanit represented Israel in 1973 with the song Ey Sham', '18'),
('261', 'You''re Summer', 'The Nova and The Dolls', '48', '', 'The Nova and The Dolls represented Sweden in 1973 with the song You''re Summer', '18'),
('262', 'Tom Tom Tom', 'Marion Rung', '16', '', 'Marion Rung represented Finland in 1973 with the song Tom Tom Tom', '18'),
('263', 'It''s Just a Game', 'Bendik Singers', '37', '', 'Bendik Singers represented Norway in 1973 with the song It''s Just a Game', '18'),
('264', 'Junger Tag', 'Gitte', '19', '', 'Gitte represented Germany in 1973 with the song Junger Tag', '18'),
('265', 'Un train qui part', 'Marie', '32', '', 'Marie represented Monaco in 1973 with the song Un train qui part', '18'),
('266', 'Tourada', 'Fernando Tordo', '39', '', 'Fernando Tordo represented Portugal in 1973 with the song Tourada', '18'),
('267', 'Do I Dream', 'Maxi', '23', '', 'Maxi represented Ireland in 1973 with the song Do I Dream', '18'),
('268', 'Je vais me marier, Marie', 'Patrick Juvet', '49', '', 'Patrick Juvet represented Switzerland in 1973 with the song Je vais me marier, Marie', '18'),
('269', 'Chi sarà con te', 'Massimo Ranieri', '25', '', 'Massimo Ranieri represented Italy in 1973 with the song Chi sarà con te', '18'),
('270', 'De oude muzikant', 'Ben Cramer', '35', '', 'Ben Cramer represented Netherlands in 1973 with the song De oude muzikant', '18'),
('271', 'Gori vatra', 'Zdravko Colic', '54', '', 'Zdravko Colic represented Yugoslavia in 1973 with the song Gori vatra', '18'),
('272', 'Sans toi', 'Martine Clémenceau', '17', '', 'Martine Clémenceau represented France in 1973 with the song Sans toi', '18'),
('273', 'Baby, Baby', 'Nicole and Hugo', '8', '', 'Nicole and Hugo represented Belgium in 1973 with the song Baby, Baby', '18');
        `)

    // 1974
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('274', 'Waterloo', 'ABBA', '48', '', 'ABBA represented Sweden in 1974 with the song Waterloo', '19'),
('275', 'Sì', 'Gigliola Cinquetti', '25', '', 'Gigliola Cinquetti represented Italy in 1974 with the song Sì', '19'),
('276', 'I See a Star', 'Mouth & MacNeal', '35', '', 'Mouth & MacNeal represented Netherlands in 1974 with the song I See a Star', '19'),
('277', 'John', 'Olivia Newton', '52', '', 'Olivia Newton represented United Kingdom in 1974 with the song John', '19'),
('278', 'Bye Bye I Love You', 'Ireen Sheer', '29', '', 'Ireen Sheer represented Luxembourg in 1974 with the song Bye Bye I Love You', '19'),
('279', 'Celui qui reste et celui qui s''en va', 'Romuald', '32', '', 'Romuald represented Monaco in 1974 with the song Celui qui reste et celui qui s''en va', '19'),
('280', 'Natati La Khayay', 'Kaveret (Poogy)', '24', '', 'Kaveret (Poogy) represented Israel in 1974 with the song Natati La Khayay', '19'),
('281', 'Cross Your Heart', 'Tina', '23', '', 'Tina represented Ireland in 1974 with the song Cross Your Heart', '19'),
('282', 'Canta y sé feliz', 'Peret', '47', './src/assets/es-1974.jpg', 'Peret represented Spain in 1974 with the song Canta y sé feliz', '19'),
('283', 'Fleur de liberté', 'Jacques Hustin', '8', '', 'Jacques Hustin represented Belgium in 1974 with the song Fleur de liberté', '19'),
('284', 'Krassi, thalassa ke t'' agori mou', 'Marinella', '20', '', 'Marinella represented Greece in 1974 with the song Krassi, thalassa ke t'' agori mou', '19'),
('285', 'Generacija ''42', 'Korni', '54', '', 'Korni represented Yugoslavia in 1974 with the song Generacija ''42', '19'),
('286', 'Älä mene pois (Keep Me Warm)', 'Carita', '16', '', 'Carita represented Finland in 1974 with the song Älä mene pois (Keep Me Warm)', '19'),
('287', 'Karine Ström and the Bendik Singers', 'Anne', '37', '', 'Anne represented Norway in 1974 with the song Karine Ström and the Bendik Singers', '19'),
('288', 'Die Sommermelodie', 'Cindy & Bert', '19', '', 'Cindy & Bert represented Germany in 1974 with the song Die Sommermelodie', '19'),
('289', 'Mein Ruf nach dir', 'Piera Martell', '49', '', 'Piera Martell represented Switzerland in 1974 with the song Mein Ruf nach dir', '19'),
('290', 'E depois do adeus', 'Paulo de Carvalho', '39', '', 'Paulo de Carvalho represented Portugal in 1974 with the song E depois do adeus', '19');
        `)

    // 1975
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('291', 'In', 'Teach', '35', '', 'Teach represented Netherlands in 1975 with the song In', '20'),
('292', 'Let Me Be the One', 'The Shadows', '52', '', 'The Shadows represented United Kingdom in 1975 with the song Let Me Be the One', '20'),
('293', 'Era', 'Wess & Dori Ghezzi', '25', '', 'Wess & Dori Ghezzi represented Italy in 1975 with the song Era', '20'),
('294', 'Et bonjour à toi l''artiste', 'Nicole Rieu', '17', '', 'Nicole Rieu represented France in 1975 with the song Et bonjour à toi l''artiste', '20'),
('295', 'Toi', 'Géraldine', '29', '', 'Géraldine represented Luxembourg in 1975 with the song Toi', '20'),
('296', 'Mikado', 'Simone Drexel', '49', '', 'Simone Drexel represented Switzerland in 1975 with the song Mikado', '20'),
('297', 'Old Man Fiddle', 'Pihasoittajat', '16', '', 'Pihasoittajat represented Finland in 1975 with the song Old Man Fiddle', '20'),
('298', 'Jennie, Jennie', 'Lars Berghagen and the Dolls', '48', '', 'Lars Berghagen and the Dolls represented Sweden in 1975 with the song Jennie, Jennie', '20'),
('299', 'That''s What Friends Are For', 'The Swarbriggs', '23', '', 'The Swarbriggs represented Ireland in 1975 with the song That''s What Friends Are For', '20'),
('300', 'Tú volverás', 'Sergio & Estíbaliz', '47', './src/assets/es-1975.jpeg', 'Sergio & Estíbaliz represented Spain in 1975 with the song Tú volverás', '20'),
('301', 'At Va''Ani', 'Shlomo Artzi', '24', '', 'Shlomo Artzi represented Israel in 1975 with the song At Va''Ani', '20'),
('302', 'Singing This Song', 'Renato', '30', '', 'Renato represented Malta in 1975 with the song Singing This Song', '20'),
('303', 'Dan ljubezni', 'Pepel In Kri', '54', '', 'Pepel In Kri represented Yugoslavia in 1975 with the song Dan ljubezni', '20'),
('304', 'Une chanson c''est une lettre', 'Sophie', '32', '', 'Sophie represented Monaco in 1975 with the song Une chanson c''est une lettre', '20'),
('305', 'Gelukkig zijn', 'Ann Christy', '8', '', 'Ann Christy represented Belgium in 1975 with the song Gelukkig zijn', '20'),
('306', 'Madrugada', 'Duarte Mendes', '39', '', 'Duarte Mendes represented Portugal in 1975 with the song Madrugada', '20'),
('307', 'Ein Lied kann eine Brücke sein', 'Joy Fleming', '19', '', 'Joy Fleming represented Germany in 1975 with the song Ein Lied kann eine Brücke sein', '20'),
('308', 'Touch My Life with Summer', 'Ellen Nikolaysen', '37', '', 'Ellen Nikolaysen represented Norway in 1975 with the song Touch My Life with Summer', '20'),
('309', 'Seninle Bir Dakika', 'Semiha Yankı', '50', '', 'Semiha Yankı represented Turkey in 1975 with the song Seninle Bir Dakika', '20');
        `)

    // 1976
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('310', 'Save Your Kisses for Me', 'Brotherhood of Man', '52', '', 'Brotherhood of Man represented United Kingdom in 1976 with the song Save Your Kisses for Me', '21'),
('311', 'Un, deux, trois', 'Catherine Ferry', '17', '', 'Catherine Ferry represented France in 1976 with the song Un, deux, trois', '21'),
('312', 'Toi, la musique et moi', 'Mary Christy', '32', '', 'Mary Christy represented Monaco in 1976 with the song Toi, la musique et moi', '21'),
('313', 'Djambo, Djambo', 'Peter, Sue & Marc', '49', '', 'Peter, Sue & Marc represented Switzerland in 1976 with the song Djambo, Djambo', '21'),
('314', 'My Little World', 'Waterloo & Robinson', '5', '', 'Waterloo & Robinson represented Austria in 1976 with the song My Little World', '21'),
('315', 'Emor Shalom', 'Chocolate, Menta, Mastik', '24', '', 'Chocolate, Menta, Mastik represented Israel in 1976 with the song Emor Shalom', '21'),
('316', 'We''ll Live It All Again', 'Romina & Al Bano', '25', '', 'Romina & Al Bano represented Italy in 1976 with the song We''ll Live It All Again', '21'),
('317', 'Judy et Cie', 'Pierre Rapsat', '8', '', 'Pierre Rapsat represented Belgium in 1976 with the song Judy et Cie', '21'),
('318', 'The Party''s Over Now', 'Sandra Reemer', '35', '', 'Sandra Reemer represented Netherlands in 1976 with the song The Party''s Over Now', '21'),
('319', 'When', 'Red Hurley', '23', '', 'Red Hurley represented Ireland in 1976 with the song When', '21'),
('320', 'Pump', 'Fredi and The Friends', '16', '', 'Fredi and The Friends represented Finland in 1976 with the song Pump', '21'),
('321', 'Uma flor de verde pinho', 'Carlos do Carmo', '39', '', 'Carlos do Carmo represented Portugal in 1976 with the song Uma flor de verde pinho', '21'),
('322', 'Panaghia mou, panaghia mou', 'Mariza Koch', '20', '', 'Mariza Koch represented Greece in 1976 with the song Panaghia mou, panaghia mou', '21'),
('323', 'Chansons pour ceux qui s''aiment', 'Jürgen Marcus', '29', '', 'Jürgen Marcus represented Luxembourg in 1976 with the song Chansons pour ceux qui s''aiment', '21'),
('324', 'Sing, Sang, Song', 'Les Humphries Singers', '19', '', 'Les Humphries Singers represented Germany in 1976 with the song Sing, Sang, Song', '21'),
('325', 'Sobran las palabras', 'Braulio', '47', './src/assets/es-1976.jpeg', 'Braulio represented Spain in 1976 with the song Sobran las palabras', '21'),
('326', 'Ne mogu skriti svoj bol', 'Ambasadori', '54', '', 'Ambasadori represented Yugoslavia in 1976 with the song Ne mogu skriti svoj bol', '21'),
('327', 'Karine Ström', 'Anne', '37', '', 'Anne represented Norway in 1976 with the song Karine Ström', '21');
        `)

    // 1977
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('328', 'L''Oiseau et l''Enfant', 'Marie Myriam', '17', '', 'Marie Myriam represented France in 1977 with the song L''Oiseau et l''Enfant', '22'),
('329', 'Rock Bottom', 'Lynsey de Paul & Mike Moran', '52', '', 'Lynsey de Paul & Mike Moran represented United Kingdom in 1977 with the song Rock Bottom', '22'),
('330', 'It''s Nice to Be in Love Again', 'The Swarbriggs Plus Two', '23', '', 'The Swarbriggs Plus Two represented Ireland in 1977 with the song It''s Nice to Be in Love Again', '22'),
('331', 'Une petite française', 'Michèle Torr', '32', '', 'Michèle Torr represented Monaco in 1977 with the song Une petite française', '22'),
('332', 'Mathima solfez', 'Pascalis, Marianna, Robert & Bessy', '20', '', 'Pascalis, Marianna, Robert & Bessy represented Greece in 1977 with the song Mathima solfez', '22'),
('333', 'Swiss Lady', 'Pepe Lienhard Band', '49', '', 'Pepe Lienhard Band represented Switzerland in 1977 with the song Swiss Lady', '22'),
('334', 'A Million in One, Two, Three', 'Dream Express', '8', '', 'Dream Express represented Belgium in 1977 with the song A Million in One, Two, Three', '22'),
('335', 'Telegram', 'Silver Convention', '19', '', 'Silver Convention represented Germany in 1977 with the song Telegram', '22'),
('336', 'Enséñame a cantar', 'Micky', '47', './src/assets/es-1977.jpeg', 'Micky represented Spain in 1977 with the song Enséñame a cantar', '22'),
('337', 'Lapponia', 'Monica Aspelund', '16', '', 'Monica Aspelund represented Finland in 1977 with the song Lapponia', '22'),
('338', 'Ah', 'Ilanit', '24', '', 'Ilanit represented Israel in 1977 with the song Ah', '22'),
('339', 'De mallemolen', 'Heddy Lester', '35', '', 'Heddy Lester represented Netherlands in 1977 with the song De mallemolen', '22'),
('340', 'Liberà', 'Mia Martini', '25', '', 'Mia Martini represented Italy in 1977 with the song Liberà', '22'),
('341', 'Casanova', 'Anita Skorgan', '37', '', 'Anita Skorgan represented Norway in 1977 with the song Casanova', '22'),
('342', 'Portugal no coração', 'Os Amigos', '39', '', 'Os Amigos represented Portugal in 1977 with the song Portugal no coração', '22'),
('343', 'Frère Jacques', 'Anne Marie B.', '29', '', 'Anne Marie B. represented Luxembourg in 1977 with the song Frère Jacques', '22'),
('344', 'Boom Boom Boomerang', 'Schmetterlinge', '5', '', 'Schmetterlinge represented Austria in 1977 with the song Boom Boom Boomerang', '22'),
('345', 'Beatles', 'Forbes', '48', '', 'Forbes represented Sweden in 1977 with the song Beatles', '22');
        `)

    // 1978
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('346', 'A', 'Izhar Cohen and the Alphabeta', '24', '', 'Izhar Cohen and the Alphabeta represented Israel in 1978 with the song A', '23'),
('347', 'L''amour ça fait chanter la vie', 'Jean Vallée', '8', '', 'Jean Vallée represented Belgium in 1978 with the song L''amour ça fait chanter la vie', '23'),
('348', 'Il y aura toujours des violons', 'Joël Prévost', '17', '', 'Joël Prévost represented France in 1978 with the song Il y aura toujours des violons', '23'),
('349', 'Les jardins de Monaco', 'Caline and Olivier Toussaint', '32', '', 'Caline and Olivier Toussaint represented Monaco in 1978 with the song Les jardins de Monaco', '23'),
('350', 'Born to Sing', 'Colm T. Wilkinson', '23', '', 'Colm T. Wilkinson represented Ireland in 1978 with the song Born to Sing', '23'),
('351', 'Feuer', 'Ireen Sheer', '19', '', 'Ireen Sheer represented Germany in 1978 with the song Feuer', '23'),
('352', 'Parlez', 'Baccara', '29', '', 'Baccara represented Luxembourg in 1978 with the song Parlez', '23'),
('353', 'Charlie Chaplin', 'Tania Tsanaklidou', '20', '', 'Tania Tsanaklidou represented Greece in 1978 with the song Charlie Chaplin', '23'),
('354', 'Bailemos un vals', 'José Vélez', '47', './src/assets/es-1978.jpeg', 'José Vélez represented Spain in 1978 with the song Bailemos un vals', '23'),
('355', 'Vivre', 'Carole Vinci', '49', '', 'Carole Vinci represented Switzerland in 1978 with the song Vivre', '23'),
('356', 'Co', 'Co', '52', '', 'Co represented United Kingdom in 1978 with the song Co', '23'),
('357', 'Questo amore', 'Ricchi e Poveri', '25', '', 'Ricchi e Poveri represented Italy in 1978 with the song Questo amore', '23'),
('358', '''t Is OK', 'Harmony', '35', '', 'Harmony represented Netherlands in 1978 with the song ''t Is OK', '23'),
('359', 'Det blir alltid värre framåt natten', 'Björn Skifs', '48', '', 'Björn Skifs represented Sweden in 1978 with the song Det blir alltid värre framåt natten', '23'),
('360', 'Mrs. Caroline Robinson', 'Springtime', '5', '', 'Springtime represented Austria in 1978 with the song Mrs. Caroline Robinson', '23'),
('361', 'Boom Boom', 'Mabel', '14', '', 'Mabel represented Denmark in 1978 with the song Boom Boom', '23'),
('362', 'Dai', 'Gemini', '39', '', 'Gemini represented Portugal in 1978 with the song Dai', '23'),
('363', 'Anna rakkaudelle tilaisuus', 'Seija Simola', '16', '', 'Seija Simola represented Finland in 1978 with the song Anna rakkaudelle tilaisuus', '23'),
('364', 'Sevince', 'Nazar', '50', '', 'Nazar represented Turkey in 1978 with the song Sevince', '23'),
('365', 'Mil etter mil', 'Jahn Teigen', '37', '', 'Jahn Teigen represented Norway in 1978 with the song Mil etter mil', '23');
        `)

    // 1979
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('366', 'Hallelujah', 'Milk and Honey', '24', '', 'Milk and Honey represented Israel in 1979 with the song Hallelujah', '24'),
('367', 'Su canción', 'Betty Missiego', '47', './src/assets/es-1979.jpeg', 'Betty Missiego represented Spain in 1979 with the song Su canción', '24'),
('368', 'Marie David', 'Anne', '17', '', 'Anne represented France in 1979 with the song Marie David', '24'),
('369', 'Dschinghis Khan', 'Dschinghis Khan', '19', '', 'Dschinghis Khan represented Germany in 1979 with the song Dschinghis Khan', '24'),
('370', 'Happy Man', 'Cathal Dunne', '23', '', 'Cathal Dunne represented Ireland in 1979 with the song Happy Man', '24'),
('371', 'Disco tango', 'Tommy Seebach', '14', '', 'Tommy Seebach represented Denmark in 1979 with the song Disco tango', '24'),
('372', 'Mary Ann', 'Black Lace', '52', '', 'Black Lace represented United Kingdom in 1979 with the song Mary Ann', '24'),
('373', 'Socrati', 'Elpida', '20', '', 'Elpida represented Greece in 1979 with the song Socrati', '24'),
('374', 'Sobe, sobe, balão sobe', 'Manuela Bravo', '39', '', 'Manuela Bravo represented Portugal in 1979 with the song Sobe, sobe, balão sobe', '24'),
('375', 'Trödler & Co', 'Peter, Sue & Marc and Pfuri, Gorps & Kniri', '49', '', 'Peter, Sue & Marc and Pfuri, Gorps & Kniri represented Switzerland in 1979 with the song Trödler & Co', '24'),
('376', 'Oliver', 'Anita Skorgan', '37', '', 'Anita Skorgan represented Norway in 1979 with the song Oliver', '24'),
('377', 'Colorado', 'Xandra', '35', '', 'Xandra represented Netherlands in 1979 with the song Colorado', '24'),
('378', 'J''ai déjà vu ça dans tes yeux', 'Jeane Manson', '29', '', 'Jeane Manson represented Luxembourg in 1979 with the song J''ai déjà vu ça dans tes yeux', '24'),
('379', 'Helena', 'Katri', '16', '', 'Katri represented Finland in 1979 with the song Helena', '24'),
('380', 'Raggio di luna', 'Matia Bazar', '25', '', 'Matia Bazar represented Italy in 1979 with the song Raggio di luna', '24'),
('381', 'Notre vie c''est la musique', 'Laurent Vaguener', '32', '', 'Laurent Vaguener represented Monaco in 1979 with the song Notre vie c''est la musique', '24'),
('382', 'Satellit', 'Ted Gärdestad', '48', '', 'Ted Gärdestad represented Sweden in 1979 with the song Satellit', '24'),
('383', 'Hey Nana', 'Micha Marah', '8', '', 'Micha Marah represented Belgium in 1979 with the song Hey Nana', '24'),
('384', 'Heute in Jerusalem', 'Christina Simon', '5', '', 'Christina Simon represented Austria in 1979 with the song Heute in Jerusalem', '24');
        `)

    // 1980
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('385', 'What''s Another Year', 'Johnny Logan', '23', '', 'Johnny Logan represented Ireland in 1980 with the song What''s Another Year', '25'),
('386', 'Theater', 'Katja Ebstein', '19', '', 'Katja Ebstein represented Germany in 1980 with the song Theater', '25'),
('387', 'Love Enough for Two', 'Prima Donna', '52', '', 'Prima Donna represented United Kingdom in 1980 with the song Love Enough for Two', '25'),
('388', 'Cinéma', 'Paola', '49', '', 'Paola represented Switzerland in 1980 with the song Cinéma', '25'),
('389', 'Amsterdam', 'Maggie MacNeal', '35', '', 'Maggie MacNeal represented Netherlands in 1980 with the song Amsterdam', '25'),
('390', 'Non so che darei', 'Alan Sorrenti', '25', '', 'Alan Sorrenti represented Italy in 1980 with the song Non so che darei', '25'),
('391', 'Um grande, grande amor', 'José Cid', '39', '', 'José Cid represented Portugal in 1980 with the song Um grande, grande amor', '25'),
('392', 'Du bist Musik', 'Blue Danube', '5', '', 'Blue Danube represented Austria in 1980 with the song Du bist Musik', '25'),
('393', 'Papa Pingouin', 'Sophie & Magaly', '29', '', 'Sophie & Magaly represented Luxembourg in 1980 with the song Papa Pingouin', '25'),
('394', 'Just nu!', 'Tomas Ledin', '48', '', 'Tomas Ledin represented Sweden in 1980 with the song Just nu!', '25'),
('395', 'Hé, hé m''sieurs dames', 'Profil', '17', '', 'Profil represented France in 1980 with the song Hé, hé m''sieurs dames', '25'),
('396', 'Quédate esta noche', 'Trigo Limpio', '47', './src/assets/es-1980.jpg', 'Trigo Limpio represented Spain in 1980 with the song Quédate esta noche', '25'),
('397', 'Otostop', 'Anna Vissi and the Epikouri', '20', '', 'Anna Vissi and the Epikouri represented Greece in 1980 with the song Otostop', '25'),
('398', 'Tænker altid på dig', 'Bamses Venner', '14', '', 'Bamses Venner represented Denmark in 1980 with the song Tænker altid på dig', '25'),
('399', 'Petr''oil', 'Ajda Pekkan', '50', '', 'Ajda Pekkan represented Turkey in 1980 with the song Petr''oil', '25'),
('400', 'Sámiid ædnan', 'Sverre Kjellsberg & Mattis Hætta', '37', '', 'Sverre Kjellsberg & Mattis Hætta represented Norway in 1980 with the song Sámiid ædnan', '25'),
('401', 'Euro', 'Telex', '8', '', 'Telex represented Belgium in 1980 with the song Euro', '25'),
('402', 'Bitakat Hob', 'Samira Bensaïd', '34', '', 'Samira Bensaïd represented Morocco in 1980 with the song Bitakat Hob', '25'),
('403', 'Matti Loiri', 'Vesa', '16', '', 'Vesa represented Finland in 1980 with the song Matti Loiri', '25');
        `)

    // 1981
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('404', 'Making Your Mind Up', 'Bucks Fizz', '52', '', 'Bucks Fizz represented United Kingdom in 1981 with the song Making Your Mind Up', '26'),
('405', 'Johnny Blue', 'Lena Valaitis', '19', '', 'Lena Valaitis represented Germany in 1981 with the song Johnny Blue', '26'),
('406', 'Humanahum', 'Jean Gabilou', '17', '', 'Jean Gabilou represented France in 1981 with the song Humanahum', '26'),
('407', 'Io senza te', 'Peter, Sue & Marc', '49', '', 'Peter, Sue & Marc represented Switzerland in 1981 with the song Io senza te', '26'),
('408', 'Horoscopes', 'Sheeba', '23', '', 'Sheeba represented Ireland in 1981 with the song Horoscopes', '26'),
('409', 'Monika', 'Island', '12', '', 'Island represented Cyprus in 1981 with the song Monika', '26'),
('410', 'Halaylah', 'Habibi', '24', '', 'Habibi represented Israel in 1981 with the song Halaylah', '26'),
('411', 'Feggari kalokerino', 'Yiannis Dimitras', '20', '', 'Yiannis Dimitras represented Greece in 1981 with the song Feggari kalokerino', '26'),
('412', 'Het is een wonder', 'Linda Williams', '35', '', 'Linda Williams represented Netherlands in 1981 with the song Het is een wonder', '26'),
('413', 'Fångad i en dröm', 'Björn Skifs', '48', '', 'Björn Skifs represented Sweden in 1981 with the song Fångad i en dröm', '26'),
('414', 'Claude Pascal', 'Jean', '29', '', 'Jean represented Luxembourg in 1981 with the song Claude Pascal', '26'),
('415', 'Krøller eller ej', 'Debbie Cameron & Tommy Seebach', '14', '', 'Debbie Cameron & Tommy Seebach represented Denmark in 1981 with the song Krøller eller ej', '26'),
('416', 'Samson', 'Emly Starr', '8', '', 'Emly Starr represented Belgium in 1981 with the song Samson', '26'),
('417', 'Y sólo tú', 'Bacchelli', '47', './src/assets/es-1981.jpg', 'Bacchelli represented Spain in 1981 with the song Y sólo tú', '26'),
('418', 'Memic Vajta', 'Seid', '54', '', 'Seid represented Yugoslavia in 1981 with the song Memic Vajta', '26'),
('419', 'Reggae O.K.', 'Riki Sorsa', '16', '', 'Riki Sorsa represented Finland in 1981 with the song Reggae O.K.', '26'),
('420', 'Wenn du da bist', 'Marty Brem', '5', '', 'Marty Brem represented Austria in 1981 with the song Wenn du da bist', '26'),
('421', 'Dönme Dolap', 'Modern Folk Trio & Ayşegül', '50', '', 'Modern Folk Trio & Ayşegül represented Turkey in 1981 with the song Dönme Dolap', '26'),
('422', 'Play', 'Carlos Paião', '39', '', 'Carlos Paião represented Portugal in 1981 with the song Play', '26'),
('423', 'Aldri i livet', 'Finn Kalvik', '37', '', 'Finn Kalvik represented Norway in 1981 with the song Aldri i livet', '26');
        `)

    // 1982
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('424', 'Ein bißchen Frieden', 'Nicole', '19', '', 'Nicole represented Germany in 1982 with the song Ein bißchen Frieden', '27'),
('425', 'Hora', 'Avi Toledano', '24', '', 'Avi Toledano represented Israel in 1982 with the song Hora', '27'),
('426', 'Amour on t''aime', 'Arlette Zola', '49', '', 'Arlette Zola represented Switzerland in 1982 with the song Amour on t''aime', '27'),
('427', 'Si tu aimes ma musique', 'Stella', '8', '', 'Stella represented Belgium in 1982 with the song Si tu aimes ma musique', '27'),
('428', 'Mono i agapi', 'Anna Vissi', '12', '', 'Anna Vissi represented Cyprus in 1982 with the song Mono i agapi', '27'),
('429', 'Cours après le temps', 'Svetlana', '29', '', 'Svetlana represented Luxembourg in 1982 with the song Cours après le temps', '27'),
('430', 'One Step Further', 'Bardo', '52', '', 'Bardo represented United Kingdom in 1982 with the song One Step Further', '27'),
('431', 'Dag efter dag', 'Chips', '48', '', 'Chips represented Sweden in 1982 with the song Dag efter dag', '27'),
('432', 'Sonntag', 'Mess', '5', '', 'Mess represented Austria in 1982 with the song Sonntag', '27'),
('433', 'Él', 'Lucía', '47', './src/assets/es-1982.jpg', 'Lucía represented Spain in 1982 with the song Él', '27'),
('434', 'Here Today, Gone Tomorrow', 'The Duskeys', '23', '', 'The Duskeys represented Ireland in 1982 with the song Here Today, Gone Tomorrow', '27'),
('435', 'Adieu', 'Jahn Teigen & Anita Skorgan', '37', '', 'Jahn Teigen & Anita Skorgan represented Norway in 1982 with the song Adieu', '27'),
('436', 'Bem bom', 'Doce', '39', '', 'Doce represented Portugal in 1982 with the song Bem bom', '27'),
('437', 'Halo, halo', 'Aska', '54', '', 'Aska represented Yugoslavia in 1982 with the song Halo, halo', '27'),
('438', 'Hani?', 'Neco', '50', '', 'Neco represented Turkey in 1982 with the song Hani?', '27'),
('439', 'Jij en ik', 'Bill van Dijk', '35', '', 'Bill van Dijk represented Netherlands in 1982 with the song Jij en ik', '27'),
('440', 'Video video', 'Brixx', '14', '', 'Brixx represented Denmark in 1982 with the song Video video', '27'),
('441', 'Nuku pommiin', 'Kojo', '16', '', 'Kojo represented Finland in 1982 with the song Nuku pommiin', '27');
        `)

    // 1983
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('442', 'Si la vie est cadeau', 'Corinne Hermès', '29', '', 'Corinne Hermès represented Luxembourg in 1983 with the song Si la vie est cadeau', '28'),
('443', 'Hi', 'Ofra Haza', '24', '', 'Ofra Haza represented Israel in 1983 with the song Hi', '28'),
('444', 'Främling', 'Carola Häggkvist', '48', '', 'Carola Häggkvist represented Sweden in 1983 with the song Främling', '28'),
('445', 'Džuli', 'Danijel', '54', '', 'Danijel represented Yugoslavia in 1983 with the song Džuli', '28'),
('446', 'Rücksicht', 'Hoffmann und Hoffmann', '19', '', 'Hoffmann und Hoffmann represented Germany in 1983 with the song Rücksicht', '28'),
('447', 'I''m Never Giving Up', 'Sweet Dreams', '52', '', 'Sweet Dreams represented United Kingdom in 1983 with the song I''m Never Giving Up', '28'),
('448', 'Sing Me a Song', 'Bernadette', '35', '', 'Bernadette represented Netherlands in 1983 with the song Sing Me a Song', '28'),
('449', 'Vivre', 'Guy Bonnet', '17', '', 'Guy Bonnet represented France in 1983 with the song Vivre', '28'),
('450', 'Do Re Mi', 'Jahn Teigen', '37', '', 'Jahn Teigen represented Norway in 1983 with the song Do Re Mi', '28'),
('451', 'Hurricane', 'Westend', '5', '', 'Westend represented Austria in 1983 with the song Hurricane', '28'),
('452', 'Per Lucia', 'Riccardo Fogli', '25', '', 'Riccardo Fogli represented Italy in 1983 with the song Per Lucia', '28'),
('453', 'Fantasiaa', 'Ami Aspelund', '16', '', 'Ami Aspelund represented Finland in 1983 with the song Fantasiaa', '28'),
('454', 'Esta balada que te dou', 'Armando Gama', '39', '', 'Armando Gama represented Portugal in 1983 with the song Esta balada que te dou', '28'),
('455', 'Mou Les', 'Christie Stassinopoulou', '20', '', 'Christie Stassinopoulou represented Greece in 1983 with the song Mou Les', '28'),
('456', 'Io così non ci sto', 'Mariella Farré', '49', '', 'Mariella Farré represented Switzerland in 1983 with the song Io così non ci sto', '28'),
('457', 'I agapi akoma zi', 'Stavros and Constantina', '12', '', 'Stavros and Constantina represented Cyprus in 1983 with the song I agapi akoma zi', '28'),
('458', 'Kloden drejer', 'Gry Johansen', '14', '', 'Gry Johansen represented Denmark in 1983 with the song Kloden drejer', '28'),
('459', 'Rendez', 'Pas de Deux', '8', '', 'Pas de Deux represented Belgium in 1983 with the song Rendez', '28'),
('460', 'Opera', 'Çetin Alp and the Short Wave', '50', '', 'Çetin Alp and the Short Wave represented Turkey in 1983 with the song Opera', '28'),
('461', '¿Quién maneja mi barca?', 'Remedios Amaya', '47', './src/assets/es-1983.jpeg', 'Remedios Amaya represented Spain in 1983 with the song ¿Quién maneja mi barca?', '28');
        `)

    // 1984
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('462', 'Diggi', 'Herrey''s', '48', '', 'Herrey''s represented Sweden in 1984 with the song Diggi', '29'),
('463', 'Terminal 3', 'Linda Martin', '23', '', 'Linda Martin represented Ireland in 1984 with the song Terminal 3', '29'),
('464', 'Lady, Lady', 'Bravo', '47', './src/assets/es-1984.jpeg', 'Bravo represented Spain in 1984 with the song Lady, Lady', '29'),
('465', 'Det'' lige det', 'Hot Eyes', '14', '', 'Hot Eyes represented Denmark in 1984 with the song Det'' lige det', '29'),
('466', 'Avanti la vie', 'Jacques Zegers', '8', '', 'Jacques Zegers represented Belgium in 1984 with the song Avanti la vie', '29'),
('467', 'I treni di Tozeur', 'Alice & Battiato', '25', '', 'Alice & Battiato represented Italy in 1984 with the song I treni di Tozeur', '29'),
('468', 'Love Games', 'Belle and the Devotions', '52', '', 'Belle and the Devotions represented United Kingdom in 1984 with the song Love Games', '29'),
('469', 'Autant d''amoureux que d''étoiles', 'Annick Thoumazeau', '17', '', 'Annick Thoumazeau represented France in 1984 with the song Autant d''amoureux que d''étoiles', '29'),
('470', 'Hengaillaan', 'Kirka', '16', '', 'Kirka represented Finland in 1984 with the song Hengaillaan', '29'),
('471', '100% d''amour', 'Sophie Carle', '29', '', 'Sophie Carle represented Luxembourg in 1984 with the song 100% d''amour', '29'),
('472', 'Silêncio e tanta gente', 'Maria Guinot', '39', '', 'Maria Guinot represented Portugal in 1984 with the song Silêncio e tanta gente', '29'),
('473', 'Halay', 'Bes Yil Önce, On Yil Sonra', '50', '', 'Bes Yil Önce, On Yil Sonra represented Turkey in 1984 with the song Halay', '29'),
('474', 'Ik hou van jou', 'Maribelle', '35', '', 'Maribelle represented Netherlands in 1984 with the song Ik hou van jou', '29'),
('475', 'Aufrecht geh''n', 'Mary Roos', '19', '', 'Mary Roos represented Germany in 1984 with the song Aufrecht geh''n', '29'),
('476', 'Anna Maria Lena', 'Andy Paul', '12', '', 'Andy Paul represented Cyprus in 1984 with the song Anna Maria Lena', '29'),
('477', 'Welche Farbe hat der Sonnenschein?', 'Rainy Day', '49', '', 'Rainy Day represented Switzerland in 1984 with the song Welche Farbe hat der Sonnenschein?', '29'),
('478', 'Lenge leve livet', 'Dollie de Luxe', '37', '', 'Dollie de Luxe represented Norway in 1984 with the song Lenge leve livet', '29'),
('479', 'Ciao amore', 'Vlado & Isolda', '54', '', 'Vlado & Isolda represented Yugoslavia in 1984 with the song Ciao amore', '29'),
('480', 'Einfach weg', 'Anita', '5', '', 'Anita represented Austria in 1984 with the song Einfach weg', '29');
        `)

    // 1985
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('481', 'La det swinge', 'Bobbysocks', '37', '', 'Bobbysocks represented Norway in 1985 with the song La det swinge', '30'),
('482', 'Für alle', 'Wind', '19', '', 'Wind represented Germany in 1985 with the song Für alle', '30'),
('483', 'Bra vibrationer', 'Kikki Danielsson', '48', '', 'Kikki Danielsson represented Sweden in 1985 with the song Bra vibrationer', '30'),
('484', 'Love Is...', 'Vikki', '52', '', 'Vikki represented United Kingdom in 1985 with the song Love Is...', '30'),
('485', 'Olé, Olé', 'Izhar Cohen', '24', '', 'Izhar Cohen represented Israel in 1985 with the song Olé, Olé', '30'),
('486', 'Wait Until the Weekend Comes', 'Maria Christian', '23', '', 'Maria Christian represented Ireland in 1985 with the song Wait Until the Weekend Comes', '30'),
('487', 'Magic, Oh Magic', 'Al Bano and Romina Power', '25', '', 'Al Bano and Romina Power represented Italy in 1985 with the song Magic, Oh Magic', '30'),
('488', 'Kinder dieser Welt', 'Gary Lux', '5', '', 'Gary Lux represented Austria in 1985 with the song Kinder dieser Welt', '30'),
('489', 'Eläköön elämä', 'Sonja Lumme', '16', '', 'Sonja Lumme represented Finland in 1985 with the song Eläköön elämä', '30'),
('490', 'Femme dans ses rêves aussi', 'Roger Bens', '17', '', 'Roger Bens represented France in 1985 with the song Femme dans ses rêves aussi', '30'),
('491', 'Sku'' du spørg'' fra no''en', 'Hot Eyes', '14', '', 'Hot Eyes represented Denmark in 1985 with the song Sku'' du spørg'' fra no''en', '30'),
('492', 'Piano, piano', 'Mariella Farré & Pino Gasparini', '49', '', 'Mariella Farré & Pino Gasparini represented Switzerland in 1985 with the song Piano, piano', '30'),
('493', 'Children, Kinder, Enfants', 'Margo, Franck, Diane, Ireen, Malcolm & Chris', '29', '', 'Margo, Franck, Diane, Ireen, Malcolm & Chris represented Luxembourg in 1985 with the song Children, Kinder, Enfants', '30'),
('494', 'La fiesta terminó', 'Paloma San Basilio', '47', './src/assets/es-1985.jpg', 'Paloma San Basilio represented Spain in 1985 with the song La fiesta terminó', '30'),
('495', 'Didai didai dai', 'MFÖ', '50', '', 'MFÖ represented Turkey in 1985 with the song Didai didai dai', '30'),
('496', 'To katalava arga', 'Lia Vishy', '12', '', 'Lia Vishy represented Cyprus in 1985 with the song To katalava arga', '30'),
('497', 'Miazoume', 'Takis Biniaris', '20', '', 'Takis Biniaris represented Greece in 1985 with the song Miazoume', '30'),
('498', 'Penso em ti, eu sei', 'Adelaide', '39', '', 'Adelaide represented Portugal in 1985 with the song Penso em ti, eu sei', '30'),
('499', 'Laat me nu gaan', 'Linda Lepomme', '8', '', 'Linda Lepomme represented Belgium in 1985 with the song Laat me nu gaan', '30');
        `)

    // 1986
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('500', 'J''aime la vie', 'Sandra Kim', '8', '', 'Sandra Kim represented Belgium in 1986 with the song J''aime la vie', '31'),
('501', 'Pas pour moi', 'Daniela Simons', '49', '', 'Daniela Simons represented Switzerland in 1986 with the song Pas pour moi', '31'),
('502', 'L''amour de ma vie', 'Sherisse Laurence', '29', '', 'Sherisse Laurence represented Luxembourg in 1986 with the song L''amour de ma vie', '31'),
('503', 'You Can Count On Me', 'Luv Bug', '23', '', 'Luv Bug represented Ireland in 1986 with the song You Can Count On Me', '31'),
('504', 'E'' de'' det här du kallar kärlek?', 'Lasse Holm & Monica Törnell', '48', '', 'Lasse Holm & Monica Törnell represented Sweden in 1986 with the song E'' de'' det här du kallar kärlek?', '31'),
('505', 'Du er fuld af løgn', 'Lise Haavik & Trax', '14', '', 'Lise Haavik & Trax represented Denmark in 1986 with the song Du er fuld af løgn', '31'),
('506', 'Runner in the Night', 'Ryder', '52', '', 'Ryder represented United Kingdom in 1986 with the song Runner in the Night', '31'),
('507', 'Über die Brücke geh''n', 'Ingrid Peters', '19', '', 'Ingrid Peters represented Germany in 1986 with the song Über die Brücke geh''n', '31'),
('508', 'Halley', 'Klips & Onlar', '50', '', 'Klips & Onlar represented Turkey in 1986 with the song Halley', '31'),
('509', 'Valentino', 'Cadillac', '47', './src/assets/es-1986.jpeg', 'Cadillac represented Spain in 1986 with the song Valentino', '31'),
('510', 'Željo moja', 'Doris Dragović', '54', '', 'Doris Dragović represented Yugoslavia in 1986 with the song Željo moja', '31'),
('511', 'Romeo', 'Ketil Stokkan', '37', '', 'Ketil Stokkan represented Norway in 1986 with the song Romeo', '31'),
('512', 'Alles heeft ritme', 'Frizzle Sizzle', '35', '', 'Frizzle Sizzle represented Netherlands in 1986 with the song Alles heeft ritme', '31'),
('513', 'Não sejas mau para mim', 'Dora', '39', '', 'Dora represented Portugal in 1986 with the song Não sejas mau para mim', '31'),
('514', 'Päivä kahden ihmisen', 'Kari Kuivalainen', '16', '', 'Kari Kuivalainen represented Finland in 1986 with the song Päivä kahden ihmisen', '31'),
('515', 'Gleðibankinn', 'Icy', '22', '', 'Icy represented Iceland in 1986 with the song Gleðibankinn', '31'),
('516', 'Européennes', 'Cocktail Chic', '17', '', 'Cocktail Chic represented France in 1986 with the song Européennes', '31'),
('517', 'Die Zeit ist einsam', 'Timna Brauer', '5', '', 'Timna Brauer represented Austria in 1986 with the song Die Zeit ist einsam', '31'),
('518', 'Yavoh Yom', 'Moti Galadi & Sarai Tzuriel', '24', '', 'Moti Galadi & Sarai Tzuriel represented Israel in 1986 with the song Yavoh Yom', '31'),
('519', 'Tora zo', 'Elpida', '12', '', 'Elpida represented Cyprus in 1986 with the song Tora zo', '31');
        `)

    // 1987
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('520', 'Hold Me Now', 'Johnny Logan', '23', '', 'Johnny Logan represented Ireland in 1987 with the song Hold Me Now', '32'),
('521', 'Laß die Sonne in dein Herz', 'Wind', '19', '', 'Wind represented Germany in 1987 with the song Laß die Sonne in dein Herz', '32'),
('522', 'Gente di mare', 'Umberto Tozzi and Raf', '25', '', 'Umberto Tozzi and Raf represented Italy in 1987 with the song Gente di mare', '32'),
('523', 'Ja sam za ples', 'Novi Fosili', '54', '', 'Novi Fosili represented Yugoslavia in 1987 with the song Ja sam za ples', '32'),
('524', 'Rechtop in de wind', 'Marcha', '35', '', 'Marcha represented Netherlands in 1987 with the song Rechtop in de wind', '32'),
('525', 'Cathrine Herdorf', 'Anne', '14', '', 'Anne represented Denmark in 1987 with the song Cathrine Herdorf', '32'),
('526', 'Aspro mavro', 'Alexia', '12', '', 'Alexia represented Cyprus in 1987 with the song Aspro mavro', '32'),
('527', 'Shir Habatlanim', 'Datner & Kushnir', '24', '', 'Datner & Kushnir represented Israel in 1987 with the song Shir Habatlanim', '32'),
('528', 'Mitt liv', 'Kate Gulbrandsen', '37', '', 'Kate Gulbrandsen represented Norway in 1987 with the song Mitt liv', '32'),
('529', 'Stop!', 'Bang', '20', '', 'Bang represented Greece in 1987 with the song Stop!', '32'),
('530', 'Pierre', 'Liliane Saint', '8', '', 'Liliane Saint represented Belgium in 1987 with the song Pierre', '32'),
('531', 'Boogaloo', 'Lotta Engberg', '48', '', 'Lotta Engberg represented Sweden in 1987 with the song Boogaloo', '32'),
('532', 'Only the Light', 'Rikki', '52', '', 'Rikki represented United Kingdom in 1987 with the song Only the Light', '32'),
('533', 'Les mots d''amour n''ont pas de dimanche', 'Christine Minier', '17', '', 'Christine Minier represented France in 1987 with the song Les mots d''amour n''ont pas de dimanche', '32'),
('534', 'Sata salamaa', 'Vicky Rosti', '16', '', 'Vicky Rosti represented Finland in 1987 with the song Sata salamaa', '32'),
('535', 'Hægt og hljótt', 'Halla Margarét', '22', '', 'Halla Margarét represented Iceland in 1987 with the song Hægt og hljótt', '32'),
('536', 'Moitié moitié', 'Carole Rich', '49', '', 'Carole Rich represented Switzerland in 1987 with the song Moitié moitié', '32'),
('537', 'Neste barco à vela', 'Nevada', '39', '', 'Nevada represented Portugal in 1987 with the song Neste barco à vela', '32'),
('538', 'No estás solo', 'Patricia Kraus', '47', './src/assets/es-1987.jpeg', 'Patricia Kraus represented Spain in 1987 with the song No estás solo', '32'),
('539', 'Nur noch Gefühl', 'Gary Lux', '5', '', 'Gary Lux represented Austria in 1987 with the song Nur noch Gefühl', '32'),
('540', 'Amour amour', 'Plastic Bertrand', '29', '', 'Plastic Bertrand represented Luxembourg in 1987 with the song Amour amour', '32'),
('541', 'Şarkım Sevgi Üstüne', 'Seyyal Taner & Lokomotif', '50', '', 'Seyyal Taner & Lokomotif represented Turkey in 1987 with the song Şarkım Sevgi Üstüne', '32');
        `)
    
    // 1988
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('542', 'Ne partez pas sans moi', 'Céline Dion', '49', '', 'Céline Dion represented Switzerland in 1988 with the song Ne partez pas sans moi', '33'),
('543', 'Go', 'Scott Fitzgerald', '52', '', 'Scott Fitzgerald represented United Kingdom in 1988 with the song Go', '33'),
('544', 'Ka'' du se hva'' jeg sa''?', 'Kirsten & Søren', '14', '', 'Kirsten & Søren represented Denmark in 1988 with the song Ka'' du se hva'' jeg sa''?', '33'),
('545', 'Croire', 'Lara Fabian', '29', '', 'Lara Fabian represented Luxembourg in 1988 with the song Croire', '33'),
('546', 'For vår jord', 'Karoline Krüger', '37', '', 'Karoline Krüger represented Norway in 1988 with the song For vår jord', '33'),
('547', 'Mangup', 'Srebrna Krila', '54', '', 'Srebrna Krila represented Yugoslavia in 1988 with the song Mangup', '33'),
('548', 'Ben Adam', 'Yardena Arazi', '24', '', 'Yardena Arazi represented Israel in 1988 with the song Ben Adam', '33'),
('549', 'Take Him Home', 'Jump the Gun', '23', '', 'Jump the Gun represented Ireland in 1988 with the song Take Him Home', '33'),
('550', 'Shangri', 'Gerard Joling', '35', '', 'Gerard Joling represented Netherlands in 1988 with the song Shangri', '33'),
('551', 'Chanteur de charme', 'Gérard Lenorman', '17', '', 'Gérard Lenorman represented France in 1988 with the song Chanteur de charme', '33'),
('552', 'La chica que yo quiero (Made in Spain)', 'La Década', '47', './src/assets/es-1988.jpg', 'La Década represented Spain in 1988 with the song La chica que yo quiero (Made in Spain)', '33'),
('553', 'Stad i ljus', 'Tommy Körberg', '48', '', 'Tommy Körberg represented Sweden in 1988 with the song Stad i ljus', '33'),
('554', 'Ti scrivo', 'Luca Barbarossa', '25', '', 'Luca Barbarossa represented Italy in 1988 with the song Ti scrivo', '33'),
('555', 'Lied für einen Freund', 'Maxi & Chris Garden', '19', '', 'Maxi & Chris Garden represented Germany in 1988 with the song Lied für einen Freund', '33'),
('556', 'Sufi', 'MFÖ', '50', '', 'MFÖ represented Turkey in 1988 with the song Sufi', '33'),
('557', 'Sókrates', 'Beathoven', '22', '', 'Beathoven represented Iceland in 1988 with the song Sókrates', '33'),
('558', 'Kloun', 'Aphroditi Fryda', '20', '', 'Aphroditi Fryda represented Greece in 1988 with the song Kloun', '33'),
('559', 'Laissez briller le soleil', 'Reynaert', '8', '', 'Reynaert represented Belgium in 1988 with the song Laissez briller le soleil', '33'),
('560', 'Voltarei', 'Dora', '39', '', 'Dora represented Portugal in 1988 with the song Voltarei', '33'),
('561', 'Nauravat silmät muistetaan', 'Boulevard', '16', '', 'Boulevard represented Finland in 1988 with the song Nauravat silmät muistetaan', '33'),
('562', 'Lisa, Mona Lisa', 'Wilfried', '5', '', 'Wilfried represented Austria in 1988 with the song Lisa, Mona Lisa', '33');
        `)
    
    // 1989
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('563', 'Rock Me', 'Riva', '54', '', 'Riva represented Yugoslavia in 1989 with the song Rock Me', '34'),
('564', 'Why Do I Always Get it Wrong?', 'Live Report', '52', '', 'Live Report represented United Kingdom in 1989 with the song Why Do I Always Get it Wrong?', '34'),
('565', 'Vi maler byen rød', 'Birthe Kjær', '14', '', 'Birthe Kjær represented Denmark in 1989 with the song Vi maler byen rød', '34'),
('566', 'En dag', 'Tommy Nilsson', '48', '', 'Tommy Nilsson represented Sweden in 1989 with the song En dag', '34'),
('567', 'Nur ein Lied', 'Thomas Forstner', '5', '', 'Thomas Forstner represented Austria in 1989 with the song Nur ein Lied', '34'),
('568', 'Nacida para amar', 'Nina', '47', './src/assets/es-1989.png', 'Nina represented Spain in 1989 with the song Nacida para amar', '34'),
('569', 'La dolce vita', 'Anneli Saaristo', '16', '', 'Anneli Saaristo represented Finland in 1989 with the song La dolce vita', '34'),
('570', 'J''ai volé la vie', 'Nathalie Pâque', '17', '', 'Nathalie Pâque represented France in 1989 with the song J''ai volé la vie', '34'),
('571', 'Avrei voluto', 'Anna Oxa & Fausto Leali', '25', '', 'Anna Oxa & Fausto Leali represented Italy in 1989 with the song Avrei voluto', '34'),
('572', 'To thiko sou asteri', 'Marianna', '20', '', 'Marianna represented Greece in 1989 with the song To thiko sou asteri', '34'),
('573', 'Apopse as vrethoume', 'Fanny Polymeri and Yiannis Savvidakis', '12', '', 'Fanny Polymeri and Yiannis Savvidakis represented Cyprus in 1989 with the song Apopse as vrethoume', '34'),
('574', 'Derech Ha''melech', 'Gili & Galit', '24', '', 'Gili & Galit represented Israel in 1989 with the song Derech Ha''melech', '34'),
('575', 'Viver senza tei', 'Furbaz', '49', '', 'Furbaz represented Switzerland in 1989 with the song Viver senza tei', '34'),
('576', 'Flieger', 'Nino de Angelo', '19', '', 'Nino de Angelo represented Germany in 1989 with the song Flieger', '34'),
('577', 'Blijf zoals je bent', 'Justine Pelmelay', '35', '', 'Justine Pelmelay represented Netherlands in 1989 with the song Blijf zoals je bent', '34'),
('578', 'Conquistador', 'Da Vinci', '39', '', 'Da Vinci represented Portugal in 1989 with the song Conquistador', '34'),
('579', 'Venners nærhet', 'Britt Synnøve Johansen', '37', '', 'Britt Synnøve Johansen represented Norway in 1989 with the song Venners nærhet', '34'),
('580', 'The Real Me', 'Kiev Connolly and the Missing Passengers', '23', '', 'Kiev Connolly and the Missing Passengers represented Ireland in 1989 with the song The Real Me', '34'),
('581', 'Door de wind', 'Ingeborg', '8', '', 'Ingeborg represented Belgium in 1989 with the song Door de wind', '34'),
('582', 'Monsieur', 'Park Café', '29', '', 'Park Café represented Luxembourg in 1989 with the song Monsieur', '34'),
('583', 'Bana Bana', 'Pan', '50', '', 'Pan represented Turkey in 1989 with the song Bana Bana', '34'),
('584', 'Það sem enginn sér', 'Daníel Augúst Haraldsson', '22', '', 'Daníel Augúst Haraldsson represented Iceland in 1989 with the song Það sem enginn sér', '34');
        `)

    // 1990
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('585', 'Insieme: 1992', 'Toto Cutugno', '25', '', 'Toto Cutugno represented Italy in 1990 with the song Insieme: 1992', '35'),
('586', 'White and Black Blues', 'Joelle Ursull', '17', '', 'Joelle Ursull represented France in 1990 with the song White and Black Blues', '35'),
('587', 'Somewhere In Europe', 'Liam Reilly', '23', '', 'Liam Reilly represented Ireland in 1990 with the song Somewhere In Europe', '35'),
('588', 'Eitt Lag Enn', 'Stjórnin', '22', '', 'Stjórnin represented Iceland in 1990 with the song Eitt Lag Enn', '35'),
('589', 'Bandido', 'Azúcar Moreno', '47', './src/assets/es-1990.jpg', 'Azúcar Moreno represented Spain in 1990 with the song Bandido', '35'),
('590', 'Give A Little Love Back To The World', 'Emma', '52', '', 'Emma represented United Kingdom in 1990 with the song Give A Little Love Back To The World', '35'),
('591', 'Hajde Da Ludujemo', 'Tajci', '54', '', 'Tajci represented Yugoslavia in 1990 with the song Hajde Da Ludujemo', '35'),
('592', 'Hallo Hallo', 'Lonnie Devantier', '14', '', 'Lonnie Devantier represented Denmark in 1990 with the song Hallo Hallo', '35'),
('593', 'Frei Zu Leben', 'Chris Kempers & Daniel Kovac', '19', '', 'Chris Kempers & Daniel Kovac represented Germany in 1990 with the song Frei Zu Leben', '35'),
('594', 'Keine Mauern Mehr', 'Simone', '5', '', 'Simone represented Austria in 1990 with the song Keine Mauern Mehr', '35'),
('595', 'Musik Klingt In Die Welt Hinaus', 'Egon Egemann', '49', '', 'Egon Egemann represented Switzerland in 1990 with the song Musik Klingt In Die Welt Hinaus', '35'),
('596', 'Macédomienne', 'Philippe Lafontaine', '8', '', 'Philippe Lafontaine represented Belgium in 1990 with the song Macédomienne', '35'),
('597', 'Quand Je Te Rêve', 'Céline Carzo', '29', '', 'Céline Carzo represented Luxembourg in 1990 with the song Quand Je Te Rêve', '35'),
('598', 'Milas Poli', 'Haris Anastasiou', '12', '', 'Haris Anastasiou represented Cyprus in 1990 with the song Milas Poli', '35'),
('599', 'Ik Wil Alles Met Je Delen', 'Maywood', '35', '', 'Maywood represented Netherlands in 1990 with the song Ik Wil Alles Met Je Delen', '35'),
('600', 'Ådahl', 'Edin', '48', '', 'Edin represented Sweden in 1990 with the song Ådahl', '35'),
('601', 'Gözlerinin Hapsindeyim', 'Kayahan', '50', '', 'Kayahan represented Turkey in 1990 with the song Gözlerinin Hapsindeyim', '35'),
('602', 'Shara Barechovot', 'Rita', '24', '', 'Rita represented Israel in 1990 with the song Shara Barechovot', '35'),
('603', 'Horis Skopo', 'Christos Callow & Wave', '20', '', 'Christos Callow & Wave represented Greece in 1990 with the song Horis Skopo', '35'),
('604', 'Há Sempre Alguém', 'Nucha', '39', '', 'Nucha represented Portugal in 1990 with the song Há Sempre Alguém', '35'),
('605', 'Brandenburger Tor', 'Ketil Stokkan', '37', '', 'Ketil Stokkan represented Norway in 1990 with the song Brandenburger Tor', '35'),
('606', 'Fri?', 'Beat', '16', '', 'Beat represented Finland in 1990 with the song Fri?', '35');
        `)

    // 1991
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('607', 'Fångad Av En Stormvind', 'Carola', '48', '', 'Carola represented Sweden in 1991 with the song Fångad Av En Stormvind', '36'),
('608', 'C''est Le Dernier Qui A Parlé Qui A Raison', 'Amina', '17', '', 'Amina represented France in 1991 with the song C''est Le Dernier Qui A Parlé Qui A Raison', '36'),
('609', 'Kan', 'Duo Datz', '24', '', 'Duo Datz represented Israel in 1991 with the song Kan', '36'),
('610', 'Bailar Pegados', 'Sergio Dalma', '47', './src/assets/es-1991.jpeg', 'Sergio Dalma represented Spain in 1991 with the song Bailar Pegados', '36'),
('611', 'Canzone Per Te', 'Sandra Simó', '49', '', 'Sandra Simó represented Switzerland in 1991 with the song Canzone Per Te', '36'),
('612', 'Could It Be', 'Paul Giordimaina & Georgina', '30', '', 'Paul Giordimaina & Georgina represented Malta in 1991 with the song Could It Be', '36'),
('613', 'Comme E'' Ddoce ''o Mare', 'Peppino di Capri', '25', '', 'Peppino di Capri represented Italy in 1991 with the song Comme E'' Ddoce ''o Mare', '36'),
('614', 'Lusitana Paixão', 'Dulce', '39', '', 'Dulce represented Portugal in 1991 with the song Lusitana Paixão', '36'),
('615', 'S.O.S.', 'Elena Patroclou', '12', '', 'Elena Patroclou represented Cyprus in 1991 with the song S.O.S.', '36'),
('616', 'Could It Be That I''m In Love', 'Kim Jackson', '23', '', 'Kim Jackson represented Ireland in 1991 with the song Could It Be That I''m In Love', '36'),
('617', 'A Message To Your Heart', 'Samantha Janus', '52', '', 'Samantha Janus represented United Kingdom in 1991 with the song A Message To Your Heart', '36'),
('618', 'İki Dakika', 'İzel Çeliköz, Reyhan Karaca & Can Uğurluer', '50', '', 'İzel Çeliköz, Reyhan Karaca & Can Uğurluer represented Turkey in 1991 with the song İki Dakika', '36'),
('619', 'I Anixi', 'Sofia Vossou', '20', '', 'Sofia Vossou represented Greece in 1991 with the song I Anixi', '36'),
('620', 'Un Baiser Volé', 'Sarah Bray', '29', '', 'Sarah Bray represented Luxembourg in 1991 with the song Un Baiser Volé', '36'),
('621', 'Nina', 'Stefán & Eyfi', '22', '', 'Stefán & Eyfi represented Iceland in 1991 with the song Nina', '36'),
('622', 'Geef Het Op', 'Clouseau', '8', '', 'Clouseau represented Belgium in 1991 with the song Geef Het Op', '36'),
('623', 'Mrs. Thompson', 'Just 4 Fun', '37', '', 'Just 4 Fun represented Norway in 1991 with the song Mrs. Thompson', '36'),
('624', 'Dieser Traum Darf Niemals Sterben', 'Atlantis 2000', '19', '', 'Atlantis 2000 represented Germany in 1991 with the song Dieser Traum Darf Niemals Sterben', '36'),
('625', 'Lige der hvor hjertet slår', 'Anders Frandsen', '14', '', 'Anders Frandsen represented Denmark in 1991 with the song Lige der hvor hjertet slår', '36'),
('626', 'Hullu Yö', 'Kaija', '16', '', 'Kaija represented Finland in 1991 with the song Hullu Yö', '36'),
('627', 'Brazil', 'Baby Doll', '54', '', 'Baby Doll represented Yugoslavia in 1991 with the song Brazil', '36'),
('628', 'Venedig Im Regen', 'Thomas Forstner', '5', '', 'Thomas Forstner represented Austria in 1991 with the song Venedig Im Regen', '36');
        `)

    // 1992
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('629', 'Why Me', 'Linda Martin', '23', '', 'Linda Martin represented Ireland in 1992 with the song Why Me', '37'),
('630', 'One Step Out Of Time', 'Michael Ball', '52', '', 'Michael Ball represented United Kingdom in 1992 with the song One Step Out Of Time', '37'),
('631', 'Little Child', 'Mary Spiteri', '30', '', 'Mary Spiteri represented Malta in 1992 with the song Little Child', '37'),
('632', 'Rapsodia', 'Mia Martini', '25', '', 'Mia Martini represented Italy in 1992 with the song Rapsodia', '37'),
('633', 'Olou Tou Kosmou tin Elpida', 'Cleopatra', '20', '', 'Cleopatra represented Greece in 1992 with the song Olou Tou Kosmou tin Elpida', '37'),
('634', 'Ze Rak Sport', 'Dafna', '24', '', 'Dafna represented Israel in 1992 with the song Ze Rak Sport', '37'),
('635', 'Nei Eða Já', 'Heart 2 Heart', '22', '', 'Heart 2 Heart represented Iceland in 1992 with the song Nei Eða Já', '37'),
('636', 'Monté La Riviè', 'Kali', '17', '', 'Kali represented France in 1992 with the song Monté La Riviè', '37'),
('637', 'Wijs Me De Weg', 'Humphrey Campbell', '35', '', 'Humphrey Campbell represented Netherlands in 1992 with the song Wijs Me De Weg', '37'),
('638', 'Zusammen Geh''n', 'Tony Wegas', '5', '', 'Tony Wegas represented Austria in 1992 with the song Zusammen Geh''n', '37'),
('639', 'Teriazoume', 'Evridiki', '12', '', 'Evridiki represented Cyprus in 1992 with the song Teriazoume', '37'),
('640', 'Alt det som ingen ser', 'Kenny & Lotte', '14', '', 'Kenny & Lotte represented Denmark in 1992 with the song Alt det som ingen ser', '37'),
('641', 'Ljubim Te Pesmama', 'Extra Nena', '54', '', 'Extra Nena represented Yugoslavia in 1992 with the song Ljubim Te Pesmama', '37'),
('642', 'Todo Esto Es La Música', 'Serafin', '47', './src/assets/es-1992.jpg', 'Serafin represented Spain in 1992 with the song Todo Esto Es La Música', '37'),
('643', 'Mister Music Man', 'Daisy Auvray', '49', '', 'Daisy Auvray represented Switzerland in 1992 with the song Mister Music Man', '37'),
('644', 'Träume Sind Für Alle Da', 'Wind', '19', '', 'Wind represented Germany in 1992 with the song Träume Sind Für Alle Da', '37'),
('645', 'Amor D''água Fresca', 'Diná', '39', '', 'Diná represented Portugal in 1992 with the song Amor D''água Fresca', '37'),
('646', 'Visjoner', 'Merethe Trøan', '37', '', 'Merethe Trøan represented Norway in 1992 with the song Visjoner', '37'),
('647', 'Yaz Bitti', 'Aylin Vatankoş', '50', '', 'Aylin Vatankoş represented Turkey in 1992 with the song Yaz Bitti', '37'),
('648', 'Nous On Veut Des Violons', 'Morgane', '8', '', 'Morgane represented Belgium in 1992 with the song Nous On Veut Des Violons', '37'),
('649', 'Sou Fräi', 'Marion Welter and Kontinent', '29', '', 'Marion Welter and Kontinent represented Luxembourg in 1992 with the song Sou Fräi', '37'),
('650', 'I Morgon är En Annan Dag', 'Christer Björkman', '48', '', 'Christer Björkman represented Sweden in 1992 with the song I Morgon är En Annan Dag', '37'),
('651', 'Yamma Yamma', 'Pave', '16', '', 'Pave represented Finland in 1992 with the song Yamma Yamma', '37');
        `)

    // 1993
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('652', 'In Your Eyes', 'Niamh Kavanagh', '23', '', 'Niamh Kavanagh represented Ireland in 1993 with the song In Your Eyes', '38'),
('653', 'Better The Devil You Know', 'Sonia', '52', '', 'Sonia represented United Kingdom in 1993 with the song Better The Devil You Know', '38'),
('654', 'Moi, Tout Simplement', 'Annie Cotton', '49', '', 'Annie Cotton represented Switzerland in 1993 with the song Moi, Tout Simplement', '38'),
('655', 'Mama Corsica', 'Patrick Fiori', '17', '', 'Patrick Fiori represented France in 1993 with the song Mama Corsica', '38'),
('656', 'Alle Mine Tankar', 'Silje Vige', '37', '', 'Silje Vige represented Norway in 1993 with the song Alle Mine Tankar', '38'),
('657', 'Vrede', 'Ruth Jacott', '35', '', 'Ruth Jacott represented Netherlands in 1993 with the song Vrede', '38'),
('658', 'Eloise', 'Arvingarna', '48', '', 'Arvingarna represented Sweden in 1993 with the song Eloise', '38'),
('659', 'This Time', 'William Mangion', '30', '', 'William Mangion represented Malta in 1993 with the song This Time', '38'),
('660', 'Ellada, Hora Tou Fotos', 'Kaiti Garbi', '20', '', 'Kaiti Garbi represented Greece in 1993 with the song Ellada, Hora Tou Fotos', '38'),
('661', 'A Cidade Até Ser Dia', 'Anabela', '39', '', 'Anabela represented Portugal in 1993 with the song A Cidade Até Ser Dia', '38'),
('662', 'Hombres', 'Eva Santamaria', '47', './src/assets/es-1993.jpg', 'Eva Santamaria represented Spain in 1993 with the song Hombres', '38'),
('663', 'Sole D''europa', 'Enrico Ruggeri', '25', '', 'Enrico Ruggeri represented Italy in 1993 with the song Sole D''europa', '38'),
('664', 'þá Veistu Svarið', 'Inga', '22', '', 'Inga represented Iceland in 1993 with the song þá Veistu Svarið', '38'),
('665', 'Maria Magdalena', 'Tony Wegas', '5', '', 'Tony Wegas represented Austria in 1993 with the song Maria Magdalena', '38'),
('666', 'Don''t Ever Cry', 'Put', '11', '', 'Put represented Croatia in 1993 with the song Don''t Ever Cry', '38'),
('667', 'Sva Bol Svijeta', 'Fazla', '9', '', 'Fazla represented Bosnia and Herzegovina in 1993 with the song Sva Bol Svijeta', '38'),
('668', 'Helena', 'Katri', '16', '', 'Katri represented Finland in 1993 with the song Helena', '38'),
('669', 'Viel Zu Weit', 'Münchener Freiheit', '19', '', 'Münchener Freiheit represented Germany in 1993 with the song Viel Zu Weit', '38'),
('670', 'Mi Stamatas', 'Kyriakos Zymboulakis & Demos Van Beke', '12', '', 'Kyriakos Zymboulakis & Demos Van Beke represented Cyprus in 1993 with the song Mi Stamatas', '38'),
('671', 'Donne', 'Modern Times', '29', '', 'Modern Times represented Luxembourg in 1993 with the song Donne', '38'),
('672', 'Esmer Yarim', 'Burak Aydos, Baybora & Serter Öztürk', '50', '', 'Burak Aydos, Baybora & Serter Öztürk represented Turkey in 1993 with the song Esmer Yarim', '38'),
('673', 'Under stjernerne på himlen', 'Tommy Seebach Band', '14', '', 'Tommy Seebach Band represented Denmark in 1993 with the song Under stjernerne på himlen', '38'),
('674', 'Tih deževen dan', '1X Band', '46', '', '1X Band represented Slovenia in 1993 with the song Tih deževen dan', '38'),
('675', 'Shiru', 'Lakahat Shiru', '24', '', 'Lakahat Shiru represented Israel in 1993 with the song Shiru', '38'),
('676', 'Iemand Als Jij', 'Barbara Dex', '8', '', 'Barbara Dex represented Belgium in 1993 with the song Iemand Als Jij', '38');
        `)

    // 1994
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('677', 'Rock ''n'' Roll Kids', 'Paul Harrington & Charlie McGettigan', '23', '', 'Paul Harrington & Charlie McGettigan represented Ireland in 1994 with the song Rock ''n'' Roll Kids', '39'),
('678', 'To Nie Ja!', 'Edyta Górniak', '38', '', 'Edyta Górniak represented Poland in 1994 with the song To Nie Ja!', '39'),
('679', 'Wir Geben ''ne Party', 'MeKaDo', '19', '', 'MeKaDo represented Germany in 1994 with the song Wir Geben ''ne Party', '39'),
('680', 'Kinek Mondjam El Vétkeimet', 'Friderika Bayer', '21', '', 'Friderika Bayer represented Hungary in 1994 with the song Kinek Mondjam El Vétkeimet', '39'),
('681', 'More Than Love', 'Moira Stafrace & Christopher Scicluna', '30', '', 'Moira Stafrace & Christopher Scicluna represented Malta in 1994 with the song More Than Love', '39'),
('682', 'Duett', 'Elisabeth Andreasson & Jan Werner Danielsen', '37', '', 'Elisabeth Andreasson & Jan Werner Danielsen represented Norway in 1994 with the song Duett', '39'),
('683', 'Je Suis Un Vrai Garçon', 'Nina Morato', '17', '', 'Nina Morato represented France in 1994 with the song Je Suis Un Vrai Garçon', '39'),
('684', 'Chamar A Música', 'Sara Tavares', '39', '', 'Sara Tavares represented Portugal in 1994 with the song Chamar A Música', '39'),
('685', 'Vechni Stranik', 'Youddiph', '41', '', 'Youddiph represented Russia in 1994 with the song Vechni Stranik', '39'),
('686', 'We Will Be Free (Lonely Symphony)', 'Frances Ruffelle', '52', '', 'Frances Ruffelle represented United Kingdom in 1994 with the song We Will Be Free (Lonely Symphony)', '39'),
('687', 'Ime Anthropos Ke Ego', 'Evridiki', '12', '', 'Evridiki represented Cyprus in 1994 with the song Ime Anthropos Ke Ego', '39'),
('688', 'Nætur', 'Sigga', '22', '', 'Sigga represented Iceland in 1994 with the song Nætur', '39'),
('689', 'Stjärnorna', 'Marie Bergman & Roger Pontare', '48', '', 'Marie Bergman & Roger Pontare represented Sweden in 1994 with the song Stjärnorna', '39'),
('690', 'To Trehantiri', 'Costas Bigalis and the Sea Lovers', '20', '', 'Costas Bigalis and the Sea Lovers represented Greece in 1994 with the song To Trehantiri', '39'),
('691', 'Ostani Kraj Mene', 'Alma & Dejan', '9', '', 'Alma & Dejan represented Bosnia and Herzegovina in 1994 with the song Ostani Kraj Mene', '39'),
('692', 'Nek''ti Bude Ljubav Sva', 'Tony Cetinski', '11', '', 'Tony Cetinski represented Croatia in 1994 with the song Nek''ti Bude Ljubav Sva', '39'),
('693', 'Für Den Frieden Der Welt', 'Petra Frey', '5', '', 'Petra Frey represented Austria in 1994 with the song Für Den Frieden Der Welt', '39'),
('694', 'Ella No Es Ella', 'Alejandro Abad', '47', './src/assets/es-1994.jpg', 'Alejandro Abad represented Spain in 1994 with the song Ella No Es Ella', '39'),
('695', 'Sto Pregando', 'Duilio', '49', '', 'Duilio represented Switzerland in 1994 with the song Sto Pregando', '39'),
('696', 'Nekonečná pieseň', 'Martin Ďurinda & Tublatanka', '45', '', 'Martin Ďurinda & Tublatanka represented Slovakia in 1994 with the song Nekonečná pieseň', '39'),
('697', 'Dincolo De Nori', 'Dan Bittman', '40', '', 'Dan Bittman represented Romania in 1994 with the song Dincolo De Nori', '39'),
('698', 'Bye Bye Baby', 'CatCat', '16', '', 'CatCat represented Finland in 1994 with the song Bye Bye Baby', '39'),
('699', 'Waar Is De Zon', 'Willeke Alberti', '35', '', 'Willeke Alberti represented Netherlands in 1994 with the song Waar Is De Zon', '39'),
('700', 'Nagu Merelaine', 'Silvi Vrait', '15', '', 'Silvi Vrait represented Estonia in 1994 with the song Nagu Merelaine', '39'),
('701', 'Lopšinė mylimai', 'Ovidijus Vyšniauskas', '28', '', 'Ovidijus Vyšniauskas represented Lithuania in 1994 with the song Lopšinė mylimai', '39');
        `)

    // 1995
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('702', 'Nocturne', 'Secret Garden', '37', '', 'Secret Garden represented Norway in 1995 with the song Nocturne', '40'),
('703', 'Vuelve Conmigo', 'Anabel Conde', '47', './src/assets/es-1995.jpg', 'Anabel Conde represented Spain in 1995 with the song Vuelve Conmigo', '40'),
('704', 'Se på mig', 'Jan Johansen', '48', '', 'Jan Johansen represented Sweden in 1995 with the song Se på mig', '40'),
('705', 'Il Me Donne Rendez', 'Nathalie Santamaria', '17', '', 'Nathalie Santamaria represented France in 1995 with the song Il Me Donne Rendez', '40'),
('706', 'Fra Mols til Skagen', 'Aud Wilken', '14', '', 'Aud Wilken represented Denmark in 1995 with the song Fra Mols til Skagen', '40'),
('707', 'Nostalgija', 'Magazin & Lidija', '11', '', 'Magazin & Lidija represented Croatia in 1995 with the song Nostalgija', '40'),
('708', 'Prisluhni Mi', 'Darja Svajger', '46', '', 'Darja Svajger represented Slovenia in 1995 with the song Prisluhni Mi', '40'),
('709', 'Amen', 'Liora', '24', '', 'Liora represented Israel in 1995 with the song Amen', '40'),
('710', 'Sti Fotia', 'Alexandros Panayi', '12', '', 'Alexandros Panayi represented Cyprus in 1995 with the song Sti Fotia', '40'),
('711', 'Love City Groove', 'Love City Groove', '52', '', 'Love City Groove represented United Kingdom in 1995 with the song Love City Groove', '40'),
('712', 'Keep Me In Mind', 'Mike Spiteri', '30', '', 'Mike Spiteri represented Malta in 1995 with the song Keep Me In Mind', '40'),
('713', 'Pia Prosefhi', 'Elina Constantopoulou', '20', '', 'Elina Constantopoulou represented Greece in 1995 with the song Pia Prosefhi', '40'),
('714', 'Die Welt Dreht Sich Verkehrt', 'Stella Jones', '5', '', 'Stella Jones represented Austria in 1995 with the song Die Welt Dreht Sich Verkehrt', '40'),
('715', 'Dreamin''', 'Eddie Friel', '23', '', 'Eddie Friel represented Ireland in 1995 with the song Dreamin''', '40'),
('716', 'Núna', 'Bó Halldórsson', '22', '', 'Bó Halldórsson represented Iceland in 1995 with the song Núna', '40'),
('717', 'Sev!', 'Arzu Ece', '50', '', 'Arzu Ece represented Turkey in 1995 with the song Sev!', '40'),
('718', 'Kolybelnaya Dlya Vulkana', 'Philipp Kirkorov', '41', '', 'Philipp Kirkorov represented Russia in 1995 with the song Kolybelnaya Dlya Vulkana', '40'),
('719', 'Sama', 'Justyna', '38', '', 'Justyna represented Poland in 1995 with the song Sama', '40'),
('720', 'Dvadeset I Prvi Vijek', 'Davor Popović', '9', '', 'Davor Popović represented Bosnia and Herzegovina in 1995 with the song Dvadeset I Prvi Vijek', '40'),
('721', 'La Voix Est Libre', 'Frédéric Etherlinck', '8', '', 'Frédéric Etherlinck represented Belgium in 1995 with the song La Voix Est Libre', '40'),
('722', 'Baunilha e Chocolate', 'Tó Cruz', '39', '', 'Tó Cruz represented Portugal in 1995 with the song Baunilha e Chocolate', '40'),
('723', 'Új név egy régi ház falán', 'Csaba Szigeti', '21', '', 'Csaba Szigeti represented Hungary in 1995 with the song Új név egy régi ház falán', '40'),
('724', 'Verliebt In Dich', 'Stone and Stone', '19', '', 'Stone and Stone represented Germany in 1995 with the song Verliebt In Dich', '40');
        `)
    
    // 1996
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('725', 'The Voice', 'Eimear Quinn', '23', '', 'Eimear Quinn represented Ireland in 1996 with the song The Voice', '41'),
('726', 'I Evighet', 'Elisabeth Andreasson', '37', '', 'Elisabeth Andreasson represented Norway in 1996 with the song I Evighet', '41'),
('727', 'Den Vilda', 'One More Time', '48', '', 'One More Time represented Sweden in 1996 with the song Den Vilda', '41'),
('728', 'Sveta Ljubav', 'Maja Blagdan', '11', '', 'Maja Blagdan represented Croatia in 1996 with the song Sveta Ljubav', '41'),
('729', 'Liis Ilus', 'Ivo Linna & Maarja', '15', '', 'Ivo Linna & Maarja represented Estonia in 1996 with the song Liis Ilus', '41'),
('730', 'O Meu Coração Não Tem Cor', 'Lúcia Moniz', '39', '', 'Lúcia Moniz represented Portugal in 1996 with the song O Meu Coração Não Tem Cor', '41'),
('731', 'De Eerste Keer', 'Maxine & Franklin Brown', '35', '', 'Maxine & Franklin Brown represented Netherlands in 1996 with the song De Eerste Keer', '41'),
('732', 'Ooh...Aah...Just A Little Bit', 'Gina G', '52', '', 'Gina G represented United Kingdom in 1996 with the song Ooh...Aah...Just A Little Bit', '41'),
('733', 'Mono Gia Mas', 'Constantinos', '12', '', 'Constantinos represented Cyprus in 1996 with the song Mono Gia Mas', '41'),
('734', 'In A Woman''s Heart', 'Miriam Christine', '30', '', 'Miriam Christine represented Malta in 1996 with the song In A Woman''s Heart', '41'),
('735', 'Weil''s Dr Guat Got', 'George Nußbaumer', '5', '', 'George Nußbaumer represented Austria in 1996 with the song Weil''s Dr Guat Got', '41'),
('736', 'Beşinci Mevsim', 'Şebnem Paker', '50', '', 'Şebnem Paker represented Turkey in 1996 with the song Beşinci Mevsim', '41'),
('737', 'Sjúbídú', 'Anna Mjöll', '22', '', 'Anna Mjöll represented Iceland in 1996 with the song Sjúbídú', '41'),
('738', 'Emis Forame To Himona Anixiatika', 'Marianna Efstratiou', '20', '', 'Marianna Efstratiou represented Greece in 1996 with the song Emis Forame To Himona Anixiatika', '41'),
('739', 'Chce Znac Swój Grzech', 'Kasia Kowalska', '38', '', 'Kasia Kowalska represented Poland in 1996 with the song Chce Znac Swój Grzech', '41'),
('740', 'Mon Coeur L''aime', 'Cathy Leander', '49', '', 'Cathy Leander represented Switzerland in 1996 with the song Mon Coeur L''aime', '41'),
('741', 'Liefde Is Een Kaartspel', 'Lisa del Bo', '8', '', 'Lisa del Bo represented Belgium in 1996 with the song Liefde Is Een Kaartspel', '41'),
('742', 'Kým Nás Máš', 'Marcel Palonder', '45', '', 'Marcel Palonder represented Slovakia in 1996 with the song Kým Nás Máš', '41'),
('743', 'Diwanit Bugale', 'Dan Ar Braz et l''Héritage des Celtes', '17', '', 'Dan Ar Braz et l''Héritage des Celtes represented France in 1996 with the song Diwanit Bugale', '41'),
('744', '¡Ay, Qué Deseo!', 'Antonio Carbonell', '47', './src/assets/es-1996.jpeg', 'Antonio Carbonell represented Spain in 1996 with the song ¡Ay, Qué Deseo!', '41'),
('745', 'Dan najlepših sanj', 'Regina', '46', '', 'Regina represented Slovenia in 1996 with the song Dan najlepših sanj', '41'),
('746', 'Za Našu Ljubav', 'Amila Glamocak', '9', '', 'Amila Glamocak represented Bosnia and Herzegovina in 1996 with the song Za Našu Ljubav', '41'),
('747', 'Niin Kaunis On Taivas', 'Jasmine', '16', '', 'Jasmine represented Finland in 1996 with the song Niin Kaunis On Taivas', '41');
        `)
    
    // 1997
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('748', 'Love Shine A Light', 'Katrina and The Waves', '52', '', 'Katrina and The Waves represented United Kingdom in 1997 with the song Love Shine A Light', '42'),
('749', 'Mysterious Woman', 'Marc Roberts', '23', '', 'Marc Roberts represented Ireland in 1997 with the song Mysterious Woman', '42'),
('750', 'Dinle', 'Şebnem Paker & Etnic', '50', '', 'Şebnem Paker & Etnic represented Turkey in 1997 with the song Dinle', '42'),
('751', 'Fiumi Di Parole', 'Jalisse', '25', '', 'Jalisse represented Italy in 1997 with the song Fiumi Di Parole', '42'),
('752', 'Mana Mou', 'Chara and Andreas Konstantinou', '12', '', 'Chara and Andreas Konstantinou represented Cyprus in 1997 with the song Mana Mou', '42'),
('753', 'Sin Rencor', 'Marcos Llunas', '47', './src/assets/es-1997.jpg', 'Marcos Llunas represented Spain in 1997 with the song Sin Rencor', '42'),
('754', 'Sentiments Songes', 'Fanny', '17', '', 'Fanny represented France in 1997 with the song Sentiments Songes', '42'),
('755', 'Liis Ilus', 'Maarja', '15', '', 'Maarja represented Estonia in 1997 with the song Liis Ilus', '42'),
('756', 'Let Me Fly', 'Debbie Scerri', '30', '', 'Debbie Scerri represented Malta in 1997 with the song Let Me Fly', '42'),
('757', 'Zbudi Se', 'Tanja Ribič', '46', '', 'Tanja Ribič represented Slovenia in 1997 with the song Zbudi Se', '42'),
('758', 'Ale Jestem', 'Anna Maria Jopek', '38', '', 'Anna Maria Jopek represented Poland in 1997 with the song Ale Jestem', '42'),
('759', 'Horepse', 'Marianna Zorba', '20', '', 'Marianna Zorba represented Greece in 1997 with the song Horepse', '42'),
('760', 'Miert Kell, Hogy Elmenj?', 'VIP', '21', '', 'VIP represented Hungary in 1997 with the song Miert Kell, Hogy Elmenj?', '42'),
('761', 'Bara Hon älskar Mig', 'Blond', '48', '', 'Blond represented Sweden in 1997 with the song Bara Hon älskar Mig', '42'),
('762', 'Primadonna', 'Alla Pugachova', '41', '', 'Alla Pugachova represented Russia in 1997 with the song Primadonna', '42'),
('763', 'Stemmen i mit liv', 'Kølig Kaj', '14', '', 'Kølig Kaj represented Denmark in 1997 with the song Stemmen i mit liv', '42'),
('764', 'Probudi Me', 'ENI', '11', '', 'ENI represented Croatia in 1997 with the song Probudi Me', '42'),
('765', 'Zeit', 'Bianca Shomburg', '19', '', 'Bianca Shomburg represented Germany in 1997 with the song Zeit', '42'),
('766', 'Goodbye', 'Alma Cardzic', '9', '', 'Alma Cardzic represented Bosnia and Herzegovina in 1997 with the song Goodbye', '42'),
('767', 'Minn Hinsti Dans', 'Paul Oscar', '22', '', 'Paul Oscar represented Iceland in 1997 with the song Minn Hinsti Dans', '42'),
('768', 'One Step', 'Bettina Soriat', '5', '', 'Bettina Soriat represented Austria in 1997 with the song One Step', '42'),
('769', 'Dentro Di Me', 'Barbara Berta', '49', '', 'Barbara Berta represented Switzerland in 1997 with the song Dentro Di Me', '42'),
('770', 'Niemand Heeft Nog Tijd', 'Mrs. Einstein', '35', '', 'Mrs. Einstein represented Netherlands in 1997 with the song Niemand Heeft Nog Tijd', '42'),
('771', 'San Francisco', 'Tor Endresen', '37', '', 'Tor Endresen represented Norway in 1997 with the song San Francisco', '42'),
('772', 'Antes Do Adeus', 'Célia Lawson', '39', '', 'Célia Lawson represented Portugal in 1997 with the song Antes Do Adeus', '42');
        `)

    // 1998
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('773', 'Diva', 'Dana International', '24', '', 'Dana International represented Israel in 1998 with the song Diva', '43'),
('774', 'Where Are You?', 'Imaani', '52', '', 'Imaani represented United Kingdom in 1998 with the song Where Are You?', '43'),
('775', 'The One That I Love', 'Chiara', '30', '', 'Chiara represented Malta in 1998 with the song The One That I Love', '43'),
('776', 'Hemel En Aarde', 'Edsilia Rombley', '35', '', 'Edsilia Rombley represented Netherlands in 1998 with the song Hemel En Aarde', '43'),
('777', 'Neka Mi Ne Svane', 'Danijela', '11', '', 'Danijela represented Croatia in 1998 with the song Neka Mi Ne Svane', '43'),
('778', 'Dis Oui', 'Mélanie Cohl', '8', '', 'Mélanie Cohl represented Belgium in 1998 with the song Dis Oui', '43'),
('779', 'Guildo Hat Euch Lieb', 'Guildo Horn', '19', '', 'Guildo Horn represented Germany in 1998 with the song Guildo Hat Euch Lieb', '43'),
('780', 'Alltid Sommer', 'Lars A. Fredriksen', '37', '', 'Lars A. Fredriksen represented Norway in 1998 with the song Alltid Sommer', '43'),
('781', 'Is Always Over Now?', 'Dawn', '23', '', 'Dawn represented Ireland in 1998 with the song Is Always Over Now?', '43'),
('782', 'Kärleken är', 'Jill Johnson', '48', '', 'Jill Johnson represented Sweden in 1998 with the song Kärleken är', '43'),
('783', 'Genesis', 'Michael Hajiyanni', '12', '', 'Michael Hajiyanni represented Cyprus in 1998 with the song Genesis', '43'),
('784', 'Se Eu Te Pudesse Abraçar', 'Alma Lusa', '39', '', 'Alma Lusa represented Portugal in 1998 with the song Se Eu Te Pudesse Abraçar', '43'),
('785', 'Mere Lapsed', 'Koit Toome', '15', '', 'Koit Toome represented Estonia in 1998 with the song Mere Lapsed', '43'),
('786', 'Unutamazsin', 'Tüzmen', '50', '', 'Tüzmen represented Turkey in 1998 with the song Unutamazsin', '43'),
('787', 'Aava', 'Edea', '16', '', 'Edea represented Finland in 1998 with the song Aava', '43'),
('788', '¿Qué Voy A Hacer Sin Ti?', 'Mikel Herzog', '47', './src/assets/es-1998.jpg', 'Mikel Herzog represented Spain in 1998 with the song ¿Qué Voy A Hacer Sin Ti?', '43'),
('789', 'To Takie Proste', 'Sixteen', '38', '', 'Sixteen represented Poland in 1998 with the song To Takie Proste', '43'),
('790', 'Naj Bogovi Slišijo', 'Vili Resnik', '46', '', 'Vili Resnik represented Slovenia in 1998 with the song Naj Bogovi Slišijo', '43'),
('791', 'Ne Zori, Zoro', 'Vlado Janevski', '36', '', 'Vlado Janevski represented North Macedonia in 1998 with the song Ne Zori, Zoro', '43'),
('792', 'Mia Krifi Evaisthissia', 'Dionysia & Thalassa', '20', '', 'Dionysia & Thalassa represented Greece in 1998 with the song Mia Krifi Evaisthissia', '43'),
('793', 'Modlitba', 'Katarína Hasprová', '45', '', 'Katarína Hasprová represented Slovakia in 1998 with the song Modlitba', '43'),
('794', 'Eu Cred', 'Malina Olinescu', '40', '', 'Malina Olinescu represented Romania in 1998 with the song Eu Cred', '43'),
('795', 'A Holnap Már Ném Lesz Szomorú', 'Charlie', '21', '', 'Charlie represented Hungary in 1998 with the song A Holnap Már Ném Lesz Szomorú', '43'),
('796', 'Line', 'Marie', '17', '', 'Marie represented France in 1998 with the song Line', '43'),
('797', 'Lass Ihn', 'Gunvor', '49', '', 'Gunvor represented Switzerland in 1998 with the song Lass Ihn', '43');
        `)

    // 1999
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('798', 'Take Me To Your Heaven', 'Charlotte Nilsson', '48', '', 'Charlotte Nilsson represented Sweden in 1999 with the song Take Me To Your Heaven', '44'),
('799', 'All Out Of Luck', 'Selma Björnsdóttir', '22', '', 'Selma Björnsdóttir represented Iceland in 1999 with the song All Out Of Luck', '44'),
('800', 'Reise Nach Jerusalem', 'Sürpriz', '19', '', 'Sürpriz represented Germany in 1999 with the song Reise Nach Jerusalem', '44'),
('801', 'Marija Magdalena', 'Doris Dragović', '11', '', 'Doris Dragović represented Croatia in 1999 with the song Marija Magdalena', '44'),
('802', 'Yom Huledeth', 'Eden', '24', '', 'Eden represented Israel in 1999 with the song Yom Huledeth', '44'),
('803', 'Diamond Of Night', 'Evelin Samuel & Camille', '15', '', 'Evelin Samuel & Camille represented Estonia in 1999 with the song Diamond Of Night', '44'),
('804', 'Putnici', 'Dino & Beatrice', '9', '', 'Dino & Beatrice represented Bosnia and Herzegovina in 1999 with the song Putnici', '44'),
('805', 'This Time (I Mean It)', 'Trine Jepsen & Michael Teschl', '14', '', 'Trine Jepsen & Michael Teschl represented Denmark in 1999 with the song This Time (I Mean It)', '44'),
('806', 'One Good Reason', 'Marlayne', '35', '', 'Marlayne represented Netherlands in 1999 with the song One Good Reason', '44'),
('807', 'Reflection', 'Bobbie Singer', '5', '', 'Bobbie Singer represented Austria in 1999 with the song Reflection', '44'),
('808', 'For A Thousand Years', 'Darja Švajger', '46', '', 'Darja Švajger represented Slovenia in 1999 with the song For A Thousand Years', '44'),
('809', 'Like The Wind', 'Venessa Chinitor', '8', '', 'Venessa Chinitor represented Belgium in 1999 with the song Like The Wind', '44'),
('810', 'Say It Again', 'Precious', '52', '', 'Precious represented United Kingdom in 1999 with the song Say It Again', '44'),
('811', 'Living My Life Without You', 'Stig André Van Eijk', '37', '', 'Stig André Van Eijk represented Norway in 1999 with the song Living My Life Without You', '44'),
('812', 'Believe ''n Peace', 'Times 3', '30', '', 'Times 3 represented Malta in 1999 with the song Believe ''n Peace', '44'),
('813', 'Dön Artık', 'Tuba Önal & Mystik', '50', '', 'Tuba Önal & Mystik represented Turkey in 1999 with the song Dön Artık', '44'),
('814', 'When You Need Me', 'The Mullan''s', '23', '', 'The Mullan''s represented Ireland in 1999 with the song When You Need Me', '44'),
('815', 'Przytul Mnie Mocno', 'Mietek Szczesniak', '38', '', 'Mietek Szczesniak represented Poland in 1999 with the song Przytul Mnie Mocno', '44'),
('816', 'Je Veux Donner Ma Voix', 'Nayah', '17', '', 'Nayah represented France in 1999 with the song Je Veux Donner Ma Voix', '44'),
('817', 'Strazdas', 'Aiste Smilgeviciute', '28', '', 'Aiste Smilgeviciute represented Lithuania in 1999 with the song Strazdas', '44'),
('818', 'Como Tudo Começou', 'Rui Bandeira', '39', '', 'Rui Bandeira represented Portugal in 1999 with the song Como Tudo Começou', '44'),
('819', 'Tha''nai Erotas', 'Marlain Angelidou', '12', '', 'Marlain Angelidou represented Cyprus in 1999 with the song Tha''nai Erotas', '44'),
('820', 'No Quiero Escuchar', 'Lydia', '47', './src/assets/es-1999.jpg', 'Lydia represented Spain in 1999 with the song No Quiero Escuchar', '44');
        `)

    // 2000
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('821', 'Fly On The Wings Of Love', 'Olsen Brothers', '14', '', 'Olsen Brothers represented Denmark in 2000 with the song Fly On The Wings Of Love', '45'),
('822', 'Solo', 'Alsou', '41', '', 'Alsou represented Russia in 2000 with the song Solo', '45'),
('823', 'My Star', 'BrainStorm', '27', '', 'BrainStorm represented Latvia in 2000 with the song My Star', '45'),
('824', 'Once In A Lifetime', 'Ines', '15', '', 'Ines represented Estonia in 2000 with the song Once In A Lifetime', '45'),
('825', 'Wadde Hadde Dudde Da', 'Stefan Raab', '19', '', 'Stefan Raab represented Germany in 2000 with the song Wadde Hadde Dudde Da', '45'),
('826', 'Millennium Of Love', 'Eamonn Toal', '23', '', 'Eamonn Toal represented Ireland in 2000 with the song Millennium Of Love', '45'),
('827', 'When Spirits Are Calling My Name', 'Roger Pontare', '48', '', 'Roger Pontare represented Sweden in 2000 with the song When Spirits Are Calling My Name', '45'),
('828', 'Desire', 'Claudette Pace', '30', '', 'Claudette Pace represented Malta in 2000 with the song Desire', '45'),
('829', 'Kada Zaspu Andeli', 'Goran Karan', '11', '', 'Goran Karan represented Croatia in 2000 with the song Kada Zaspu Andeli', '45'),
('830', 'Yorgunum Anla', 'Pınar Ayhan & S.O.S. band', '50', '', 'Pınar Ayhan & S.O.S. band represented Turkey in 2000 with the song Yorgunum Anla', '45'),
('831', 'My Heart Goes Boom', 'Charmed', '37', '', 'Charmed represented Norway in 2000 with the song My Heart Goes Boom', '45'),
('832', 'Tell Me!', 'August & Telma', '22', '', 'August & Telma represented Iceland in 2000 with the song Tell Me!', '45'),
('833', 'No Goodbyes', 'Linda Wagenmakers', '35', '', 'Linda Wagenmakers represented Netherlands in 2000 with the song No Goodbyes', '45'),
('834', 'All To You', 'The rounder girls', '5', '', 'The rounder girls represented Austria in 2000 with the song All To You', '45'),
('835', '100% Te Ljubam', 'XXL', '36', '', 'XXL represented North Macedonia in 2000 with the song 100% Te Ljubam', '45'),
('836', 'Don''t Play That Song Again', 'Nicki French', '52', '', 'Nicki French represented United Kingdom in 2000 with the song Don''t Play That Song Again', '45'),
('837', 'The Moon', 'Taxi', '40', '', 'Taxi represented Romania in 2000 with the song The Moon', '45'),
('838', 'Colgado De Un Sueño', 'Serafín Zubiri', '47', './src/assets/es-2000.jpg', 'Serafín Zubiri represented Spain in 2000 with the song Colgado De Un Sueño', '45'),
('839', 'A Little Bit', 'Nina Åström', '16', '', 'Nina Åström represented Finland in 2000 with the song A Little Bit', '45'),
('840', 'La Vita Cos''è?', 'Jane Bogaert', '49', '', 'Jane Bogaert represented Switzerland in 2000 with the song La Vita Cos''è?', '45'),
('841', 'Nomiza', 'Voice', '12', '', 'Voice represented Cyprus in 2000 with the song Nomiza', '45'),
('842', 'Sa''me''akh', 'Ping Pong', '24', '', 'Ping Pong represented Israel in 2000 with the song Sa''me''akh', '45'),
('843', 'On Aura Le Ciel', 'Sofia Mestari', '17', '', 'Sofia Mestari represented France in 2000 with the song On Aura Le Ciel', '45'),
('844', 'Envie De Vivre', 'Nathalie Sorce', '8', '', 'Nathalie Sorce represented Belgium in 2000 with the song Envie De Vivre', '45');
        `)

    // 2001
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('845', 'Everybody', 'Tanel Padar, Dave Benton & 2XL', '15', '', 'Tanel Padar, Dave Benton & 2XL represented Estonia in 2001 with the song Everybody', '46'),
('846', 'Never Ever Let You Go', 'Rollo & King', '14', '', 'Rollo & King represented Denmark in 2001 with the song Never Ever Let You Go', '46'),
('847', 'Die For You', 'Antique', '20', '', 'Antique represented Greece in 2001 with the song Die For You', '46'),
('848', 'Pier', 'Natasha Saint', '17', '', 'Natasha Saint represented France in 2001 with the song Pier', '46'),
('849', 'Listen To Your Heartbeat', 'Friends', '48', '', 'Friends represented Sweden in 2001 with the song Listen To Your Heartbeat', '46'),
('850', 'Dile Que La Quiero', 'David Civera', '47', './src/assets/es-2001.jpeg', 'David Civera represented Spain in 2001 with the song Dile Que La Quiero', '46'),
('851', 'Energy', 'Nuša Derenda', '46', '', 'Nuša Derenda represented Slovenia in 2001 with the song Energy', '46'),
('852', 'Wer Liebe Lebt', 'Michelle', '19', '', 'Michelle represented Germany in 2001 with the song Wer Liebe Lebt', '46'),
('853', 'Another Summer Night', 'Fabrizio Faniello', '30', '', 'Fabrizio Faniello represented Malta in 2001 with the song Another Summer Night', '46'),
('854', 'Strings Of My Heart', 'Vanna', '11', '', 'Vanna represented Croatia in 2001 with the song Strings Of My Heart', '46'),
('855', 'Sevgiliye Son', 'Sedat Yüce', '50', '', 'Sedat Yüce represented Turkey in 2001 with the song Sevgiliye Son', '46'),
('856', 'Lady Alpine Blue', 'Mumiy troll', '41', '', 'Mumiy troll represented Russia in 2001 with the song Lady Alpine Blue', '46'),
('857', 'You Got Style', 'Skamp', '28', '', 'Skamp represented Lithuania in 2001 with the song You Got Style', '46'),
('858', 'Hano', 'Nino', '9', '', 'Nino represented Bosnia and Herzegovina in 2001 with the song Hano', '46'),
('859', 'No Dream Impossible', 'Lindsay D.', '52', '', 'Lindsay D. represented United Kingdom in 2001 with the song No Dream Impossible', '46'),
('860', 'Ein Davar', 'Tal Sondak', '24', '', 'Tal Sondak represented Israel in 2001 with the song Ein Davar', '46'),
('861', 'Só Sei Ser Feliz Assim', 'MTM', '39', '', 'MTM represented Portugal in 2001 with the song Só Sei Ser Feliz Assim', '46'),
('862', 'Out On My Own', 'Michelle', '35', '', 'Michelle represented Netherlands in 2001 with the song Out On My Own', '46'),
('863', 'Too Much', 'Arnis Mednis', '27', '', 'Arnis Mednis represented Latvia in 2001 with the song Too Much', '46'),
('864', '2 Long', 'Piasek', '38', '', 'Piasek represented Poland in 2001 with the song 2 Long', '46'),
('865', 'Without Your Love', 'Gary O''Shaughnessy', '23', '', 'Gary O''Shaughnessy represented Ireland in 2001 with the song Without Your Love', '46'),
('866', 'Angel', 'TwoTricky', '22', '', 'TwoTricky represented Iceland in 2001 with the song Angel', '46'),
('867', 'On My Own', 'Haldor Lægreid', '37', '', 'Haldor Lægreid represented Norway in 2001 with the song On My Own', '46');
        `)

    // 2002
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('868', 'I Wanna', 'Marie N', '27', '', 'Marie N represented Latvia in 2002 with the song I Wanna', '47'),
('869', '7th Wonder', 'Ira Losco', '30', '', 'Ira Losco represented Malta in 2002 with the song 7th Wonder', '47'),
('870', 'Come Back', 'Jessica Garlick', '52', '', 'Jessica Garlick represented United Kingdom in 2002 with the song Come Back', '47'),
('871', 'Runaway', 'Sahléne', '15', '', 'Sahléne represented Estonia in 2002 with the song Runaway', '47'),
('872', 'Il Faut Du Temps', 'Sandrine François', '17', '', 'Sandrine François represented France in 2002 with the song Il Faut Du Temps', '47'),
('873', 'Gimme', 'One', '12', '', 'One represented Cyprus in 2002 with the song Gimme', '47'),
('874', 'Europe''s Living A Celebration', 'Rosa', '47', './src/assets/es-2002.jpg', 'Rosa represented Spain in 2002 with the song Europe''s Living A Celebration', '47'),
('875', 'dite', 'Afro', '48', '', 'Afro represented Sweden in 2002 with the song dite', '47'),
('876', 'Tell Me Why', 'Monica Anghel & Marcel Pavel', '40', '', 'Monica Anghel & Marcel Pavel represented Romania in 2002 with the song Tell Me Why', '47'),
('877', 'Northern Girl', 'Prime minister', '41', '', 'Prime minister represented Russia in 2002 with the song Northern Girl', '47'),
('878', 'Everything I Want', 'Vesna Pisarovic', '11', '', 'Vesna Pisarovic represented Croatia in 2002 with the song Everything I Want', '47'),
('879', 'Light A Candle', 'Sarit Hadad', '24', '', 'Sarit Hadad represented Israel in 2002 with the song Light A Candle', '47'),
('880', 'Na Jastuku Za Dvoje', 'Maja', '9', '', 'Maja represented Bosnia and Herzegovina in 2002 with the song Na Jastuku Za Dvoje', '47'),
('881', 'Sister', 'Sergio & the Ladies', '8', '', 'Sergio & the Ladies represented Belgium in 2002 with the song Sister', '47'),
('882', 'Samo Ljubezen', 'Sestre', '46', '', 'Sestre represented Slovenia in 2002 with the song Samo Ljubezen', '47'),
('883', 'Leylaklar Soldu Kalbinde', 'Buket Bengisu & Saphire', '50', '', 'Buket Bengisu & Saphire represented Turkey in 2002 with the song Leylaklar Soldu Kalbinde', '47'),
('884', 'S.A.G.A.P.O.', 'Michalis Rakintzis', '20', '', 'Michalis Rakintzis represented Greece in 2002 with the song S.A.G.A.P.O.', '47'),
('885', 'Say A Word', 'Manuel Ortega', '5', '', 'Manuel Ortega represented Austria in 2002 with the song Say A Word', '47'),
('886', 'Od Nas Zavisi', 'Karolina', '36', '', 'Karolina represented North Macedonia in 2002 with the song Od Nas Zavisi', '47'),
('887', 'Addicted to You', 'Laura', '16', '', 'Laura represented Finland in 2002 with the song Addicted to You', '47'),
('888', 'I Can''t Live Without Music', 'Corinna May', '19', '', 'Corinna May represented Germany in 2002 with the song I Can''t Live Without Music', '47'),
('889', 'Dans Le Jardin De Mon Âme', 'Francine Jordi', '49', '', 'Francine Jordi represented Switzerland in 2002 with the song Dans Le Jardin De Mon Âme', '47'),
('890', 'Happy You', 'Aivaras', '28', '', 'Aivaras represented Lithuania in 2002 with the song Happy You', '47'),
('891', 'Tell Me Who You Are', 'Malene', '14', '', 'Malene represented Denmark in 2002 with the song Tell Me Who You Are', '47');
        `)

    // 2003
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('892', 'Everyway That I Can', 'Sertab Erener', '50', '', 'Sertab Erener represented Turkey in 2003 with the song Everyway That I Can', '48'),
('893', 'Sanomi', 'Urban Trad', '8', '', 'Urban Trad represented Belgium in 2003 with the song Sanomi', '48'),
('894', 'Ne Ver'', Ne Boisia', 't.A.T.u.', '41', '', 't.A.T.u. represented Russia in 2003 with the song Ne Ver'', Ne Boisia', '48'),
('895', 'I''m Not Afraid To Move On', 'Jostein Hasselgård', '37', '', 'Jostein Hasselgård represented Norway in 2003 with the song I''m Not Afraid To Move On', '48'),
('896', 'Give Me Your Love', 'Fame', '48', '', 'Fame represented Sweden in 2003 with the song Give Me Your Love', '48'),
('897', 'Weil Der Mensch Zählt', 'Alf Poier', '5', '', 'Alf Poier represented Austria in 2003 with the song Weil Der Mensch Zählt', '48'),
('898', 'Keine Grenzen', 'Ich Troje', '38', '', 'Ich Troje represented Poland in 2003 with the song Keine Grenzen', '48'),
('899', 'Open Your Heart', 'Birgitta', '22', '', 'Birgitta represented Iceland in 2003 with the song Open Your Heart', '48'),
('900', 'Dime', 'Beth', '47', './src/assets/es-2003.jpeg', 'Beth represented Spain in 2003 with the song Dime', '48'),
('901', 'Don''t Break My Heart', 'Nicola', '40', '', 'Nicola represented Romania in 2003 with the song Don''t Break My Heart', '48'),
('902', 'We''ve Got The World', 'Mickey Harte', '23', '', 'Mickey Harte represented Ireland in 2003 with the song We''ve Got The World', '48'),
('903', 'Let''s Get Happy', 'Lou', '19', '', 'Lou represented Germany in 2003 with the song Let''s Get Happy', '48'),
('904', 'One More Night', 'Esther Hart', '35', '', 'Esther Hart represented Netherlands in 2003 with the song One More Night', '48'),
('905', 'Hasta La Vista', 'Olexandr', '51', '', 'Olexandr represented Ukraine in 2003 with the song Hasta La Vista', '48'),
('906', 'Više nisam tvoja', 'Claudia Beni', '11', '', 'Claudia Beni represented Croatia in 2003 with the song Više nisam tvoja', '48'),
('907', 'Ne Brini', 'Mija Martina', '9', '', 'Mija Martina represented Bosnia and Herzegovina in 2003 with the song Ne Brini', '48'),
('908', 'Never Let You Go', 'Mando', '20', '', 'Mando represented Greece in 2003 with the song Never Let You Go', '48'),
('909', 'Monts Et Merveilles', 'Louisa Baileche', '17', '', 'Louisa Baileche represented France in 2003 with the song Monts Et Merveilles', '48'),
('910', 'Words For Love', 'Lior Narkis', '24', '', 'Lior Narkis represented Israel in 2003 with the song Words For Love', '48'),
('911', 'Feeling Alive', 'Stelios Constantas', '12', '', 'Stelios Constantas represented Cyprus in 2003 with the song Feeling Alive', '48'),
('912', 'Eighties Coming Back', 'Ruffus', '15', '', 'Ruffus represented Estonia in 2003 with the song Eighties Coming Back', '48'),
('913', 'Deixa', 'Rita Guerra', '39', '', 'Rita Guerra represented Portugal in 2003 with the song Deixa', '48'),
('914', 'Nanana', 'Karmen', '46', '', 'Karmen represented Slovenia in 2003 with the song Nanana', '48'),
('915', 'Hello From Mars', 'F.L.Y.', '27', '', 'F.L.Y. represented Latvia in 2003 with the song Hello From Mars', '48'),
('916', 'To Dream Again', 'Lynn Chircop', '30', '', 'Lynn Chircop represented Malta in 2003 with the song To Dream Again', '48'),
('917', 'Cry Baby', 'Jemini', '52', '', 'Jemini represented United Kingdom in 2003 with the song Cry Baby', '48');
        `)

    // 2004
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('918', 'Wild Dances', 'Ruslana', '51', '', 'Ruslana represented Ukraine in 2004 with the song Wild Dances', '49'),
('919', 'Lane Moje', 'Željko Joksimović', '44', '', 'Željko Joksimović represented Serbia and Montenegro in 2004 with the song Lane Moje', '49'),
('920', 'Shake It', 'Sakis Rouvas', '20', '', 'Sakis Rouvas represented Greece in 2004 with the song Shake It', '49'),
('921', 'For Real', 'Athena', '50', '', 'Athena represented Turkey in 2004 with the song For Real', '49'),
('922', 'Stronger Every Minute', 'Lisa Andreas', '12', '', 'Lisa Andreas represented Cyprus in 2004 with the song Stronger Every Minute', '49'),
('923', 'It Hurts', 'Lena Philipsson', '48', '', 'Lena Philipsson represented Sweden in 2004 with the song It Hurts', '49'),
('924', 'The Image Of You', 'Anjeza Shahini', '1', '', 'Anjeza Shahini represented Albania in 2004 with the song The Image Of You', '49'),
('925', 'Can''t Wait Until Tonight', 'Max', '19', '', 'Max represented Germany in 2004 with the song Can''t Wait Until Tonight', '49'),
('926', 'In The Disco', 'Deen', '9', '', 'Deen represented Bosnia and Herzegovina in 2004 with the song In The Disco', '49'),
('927', 'Para Llenarme De Ti', 'Ramón', '47', './src/assets/es-2004.jpeg', 'Ramón represented Spain in 2004 with the song Para Llenarme De Ti', '49'),
('928', 'Believe Me', 'Julia Savicheva', '41', '', 'Julia Savicheva represented Russia in 2004 with the song Believe Me', '49'),
('929', 'On again... off again', 'Julie & Ludwig', '30', '', 'Julie & Ludwig represented Malta in 2004 with the song On again... off again', '49'),
('930', 'You Are The Only One', 'Ivan Mikulic', '11', '', 'Ivan Mikulic represented Croatia in 2004 with the song You Are The Only One', '49'),
('931', 'Life', 'Tose Proeski', '36', '', 'Tose Proeski represented North Macedonia in 2004 with the song Life', '49'),
('932', 'A Chaque Pas', 'Jonatan Cerrada', '17', '', 'Jonatan Cerrada represented France in 2004 with the song A Chaque Pas', '49'),
('933', 'Hold On To Our Love', 'James Fox', '52', '', 'James Fox represented United Kingdom in 2004 with the song Hold On To Our Love', '49'),
('934', 'Love Song', 'Blue Cafe', '38', '', 'Blue Cafe represented Poland in 2004 with the song Love Song', '49'),
('935', 'I Admit', 'Sanda Ladosi', '40', '', 'Sanda Ladosi represented Romania in 2004 with the song I Admit', '49'),
('936', 'Heaven', 'Jónsi', '22', '', 'Jónsi represented Iceland in 2004 with the song Heaven', '49'),
('937', 'union', 'Re', '35', '', 'Re represented Netherlands in 2004 with the song union', '49'),
('938', 'Du Bist', 'Tie Break', '5', '', 'Tie Break represented Austria in 2004 with the song Du Bist', '49'),
('939', '1 Life', 'Xandee', '8', '', 'Xandee represented Belgium in 2004 with the song 1 Life', '49'),
('940', 'If My World Stopped Turning', 'Chris Doran', '23', '', 'Chris Doran represented Ireland in 2004 with the song If My World Stopped Turning', '49'),
('941', 'High', 'Knut Anders Sørum', '37', '', 'Knut Anders Sørum represented Norway in 2004 with the song High', '49'),
('942', 'Tii', 'Neiokõsõ', '15', '', 'Neiokõsõ represented Estonia in 2004 with the song Tii', '49'),
('943', 'Le''ha''amin', 'David D''or', '24', '', 'David D''or represented Israel in 2004 with the song Le''ha''amin', '49'),
('944', 'Shame On You', 'Tomas Thordarson', '14', '', 'Tomas Thordarson represented Denmark in 2004 with the song Shame On You', '49'),
('945', 'Takes 2 To Tango', 'Jari Sillanpää', '16', '', 'Jari Sillanpää represented Finland in 2004 with the song Takes 2 To Tango', '49'),
('946', 'Foi Magia', 'Sofia', '39', '', 'Sofia represented Portugal in 2004 with the song Foi Magia', '49'),
('947', 'What''s Happened To Your Love', 'Linas ir Simona', '28', '', 'Linas ir Simona represented Lithuania in 2004 with the song What''s Happened To Your Love', '49'),
('948', 'Dziesma Par Laimi', 'Fomins & Kleins', '27', '', 'Fomins & Kleins represented Latvia in 2004 with the song Dziesma Par Laimi', '49'),
('949', 'Jugarem A Estimar', 'Marta Roure', '2', '', 'Marta Roure represented Andorra in 2004 with the song Jugarem A Estimar', '49'),
('950', 'My Galileo', 'Aleksandra & Konstantin', '7', '', 'Aleksandra & Konstantin represented Belarus in 2004 with the song My Galileo', '49'),
('951', 'Notre Planète', 'Maryon', '32', '', 'Maryon represented Monaco in 2004 with the song Notre Planète', '49'),
('952', 'Stay Forever', 'Platin', '46', '', 'Platin represented Slovenia in 2004 with the song Stay Forever', '49'),
('953', 'Celebrate', 'Piero Esteriore & the MusicStars', '49', '', 'Piero Esteriore & the MusicStars represented Switzerland in 2004 with the song Celebrate', '49');
        `)

    // 2005
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('954', 'My Number One', 'Helena Paparizou', '20', '', 'Helena Paparizou represented Greece in 2005 with the song My Number One', '50'),
('955', 'Angel', 'Chiara', '30', '', 'Chiara represented Malta in 2005 with the song Angel', '50'),
('956', 'Let Me Try', 'Luminita Anghel & Sistem', '40', '', 'Luminita Anghel & Sistem represented Romania in 2005 with the song Let Me Try', '50'),
('957', 'Hasheket Shenish''ar', 'Shiri Maymon', '24', '', 'Shiri Maymon represented Israel in 2005 with the song Hasheket Shenish''ar', '50'),
('958', 'The War Is Not Over', 'Walters & Kazha', '27', '', 'Walters & Kazha represented Latvia in 2005 with the song The War Is Not Over', '50'),
('959', 'Boonika Bate Doba', 'Zdob și Zdub', '31', '', 'Zdob și Zdub represented Moldova in 2005 with the song Boonika Bate Doba', '50'),
('960', 'Zauvijek Moja', 'No Name', '44', '', 'No Name represented Serbia and Montenegro in 2005 with the song Zauvijek Moja', '50'),
('961', 'Cool Vibes', 'Vanilla Ninja', '49', '', 'Vanilla Ninja represented Switzerland in 2005 with the song Cool Vibes', '50'),
('962', 'In My Dreams', 'Wig Wam', '37', '', 'Wig Wam represented Norway in 2005 with the song In My Dreams', '50'),
('963', 'Talking To You', 'Jakob Sveistrup', '14', '', 'Jakob Sveistrup represented Denmark in 2005 with the song Talking To You', '50'),
('964', 'Vukovi Umiru Sami', 'Boris Novkovic feat. Lado members', '11', '', 'Boris Novkovic feat. Lado members represented Croatia in 2005 with the song Vukovi Umiru Sami', '50'),
('965', 'Forogj Világ', 'NOX', '21', '', 'NOX represented Hungary in 2005 with the song Forogj Világ', '50'),
('966', 'Rimi Rimi Ley', 'Gülseren', '50', '', 'Gülseren represented Turkey in 2005 with the song Rimi Rimi Ley', '50'),
('967', 'Call Me', 'Feminnem', '9', '', 'Feminnem represented Bosnia and Herzegovina in 2005 with the song Call Me', '50'),
('968', 'Nobody Hurt No One', 'Natalia Podolskaya', '41', '', 'Natalia Podolskaya represented Russia in 2005 with the song Nobody Hurt No One', '50'),
('969', 'Tomorrow I Go', 'Ledina Celo', '1', '', 'Ledina Celo represented Albania in 2005 with the song Tomorrow I Go', '50'),
('970', 'Make My Day', 'Martin Vucic', '36', '', 'Martin Vucic represented North Macedonia in 2005 with the song Make My Day', '50'),
('971', 'Ela Ela', 'Constantinos Christoforou', '12', '', 'Constantinos Christoforou represented Cyprus in 2005 with the song Ela Ela', '50'),
('972', 'Las Vegas', 'Martin Stenmarck', '48', '', 'Martin Stenmarck represented Sweden in 2005 with the song Las Vegas', '50'),
('973', 'Razom Nas Bahato', 'Greenjolly', '51', '', 'Greenjolly represented Ukraine in 2005 with the song Razom Nas Bahato', '50'),
('974', 'Brujería', 'Son de sol', '47', './src/assets/es-2005.webp', 'Son de sol represented Spain in 2005 with the song Brujería', '50'),
('975', 'Touch My Fire', 'Javine', '52', '', 'Javine represented United Kingdom in 2005 with the song Touch My Fire', '50'),
('976', 'Chacun Pense à Soi', 'Ortal', '17', '', 'Ortal represented France in 2005 with the song Chacun Pense à Soi', '50'),
('977', 'Run & Hide', 'Gracia', '19', '', 'Gracia represented Germany in 2005 with the song Run & Hide', '50'),
('978', 'Czarna Dziewczyna', 'Ivan & Delfin', '38', '', 'Ivan & Delfin represented Poland in 2005 with the song Czarna Dziewczyna', '50'),
('979', 'Stop', 'Omar Naber', '46', '', 'Omar Naber represented Slovenia in 2005 with the song Stop', '50'),
('980', 'Love Me Tonight', 'Angelica Agurbash', '7', '', 'Angelica Agurbash represented Belarus in 2005 with the song Love Me Tonight', '50'),
('981', 'My Impossible Dream', 'Glennis Grace', '35', '', 'Glennis Grace represented Netherlands in 2005 with the song My Impossible Dream', '50'),
('982', 'Love?', 'Donna & Joseph McCaul', '23', '', 'Donna & Joseph McCaul represented Ireland in 2005 with the song Love?', '50'),
('983', 'If I Had Your Love', 'Selma', '22', '', 'Selma represented Iceland in 2005 with the song If I Had Your Love', '50'),
('984', 'Amar', '2B', '39', '', '2B represented Portugal in 2005 with the song Amar', '50'),
('985', 'Why', 'Geir Rönning', '16', '', 'Geir Rönning represented Finland in 2005 with the song Why', '50'),
('986', 'Lorraine', 'Kaffe', '10', '', 'Kaffe represented Bulgaria in 2005 with the song Lorraine', '50'),
('987', 'Let''s Get Loud', 'Suntribe', '15', '', 'Suntribe represented Estonia in 2005 with the song Let''s Get Loud', '50'),
('988', 'Y Así', 'Global.Kryner', '5', '', 'Global.Kryner represented Austria in 2005 with the song Y Así', '50'),
('989', 'Le Grand Soir', 'Nuno Resende', '8', '', 'Nuno Resende represented Belgium in 2005 with the song Le Grand Soir', '50'),
('990', 'La Mirada Interior', 'Marian van de Wal', '2', '', 'Marian van de Wal represented Andorra in 2005 with the song La Mirada Interior', '50'),
('991', 'Tout De Moi', 'Lise Darly', '32', '', 'Lise Darly represented Monaco in 2005 with the song Tout De Moi', '50'),
('992', 'Little By Little', 'Laura and the Lovers', '28', '', 'Laura and the Lovers represented Lithuania in 2005 with the song Little By Little', '50');
        `)

    // 2006
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('993', 'Hard Rock Hallelujah', 'Lordi', '16', '', 'Lordi represented Finland in 2006 with the song Hard Rock Hallelujah', '51'),
('994', 'Never Let You Go', 'Dima Bilan', '41', '', 'Dima Bilan represented Russia in 2006 with the song Never Let You Go', '51'),
('995', 'Lejla', 'Hari Mata Hari', '9', '', 'Hari Mata Hari represented Bosnia and Herzegovina in 2006 with the song Lejla', '51'),
('996', 'Tornero', 'Mihai Traistariu', '40', '', 'Mihai Traistariu represented Romania in 2006 with the song Tornero', '51'),
('997', 'Invincible', 'Carola', '48', '', 'Carola represented Sweden in 2006 with the song Invincible', '51'),
('998', 'We Are The Winners', 'LT United', '28', '', 'LT United represented Lithuania in 2006 with the song We Are The Winners', '51'),
('999', 'Show Me Your Love', 'Tina Karol', '51', '', 'Tina Karol represented Ukraine in 2006 with the song Show Me Your Love', '51'),
('1000', 'Without Your Love', 'André', '3', '', 'André represented Armenia in 2006 with the song Without Your Love', '51'),
('1001', 'Everything', 'Anna Vissi', '20', '', 'Anna Vissi represented Greece in 2006 with the song Everything', '51'),
('1002', 'Every Song Is A Cry For Love', 'Brian Kennedy', '23', '', 'Brian Kennedy represented Ireland in 2006 with the song Every Song Is A Cry For Love', '51'),
('1003', 'Superstar', 'Sibel Tüzün', '50', '', 'Sibel Tüzün represented Turkey in 2006 with the song Superstar', '51'),
('1004', 'Ninanajna', 'Elena Risteska', '36', '', 'Elena Risteska represented North Macedonia in 2006 with the song Ninanajna', '51'),
('1005', 'Moja štikla', 'Severina', '11', '', 'Severina represented Croatia in 2006 with the song Moja štikla', '51'),
('1006', 'Alvedansen', 'Christine Guldbrandsen', '37', '', 'Christine Guldbrandsen represented Norway in 2006 with the song Alvedansen', '51'),
('1007', 'No, No, Never', 'Texas Lightning', '19', '', 'Texas Lightning represented Germany in 2006 with the song No, No, Never', '51'),
('1008', 'If We All Give A Little', 'Six4One', '49', '', 'Six4One represented Switzerland in 2006 with the song If We All Give A Little', '51'),
('1009', 'I Hear Your Heart', 'Cosmos', '27', '', 'Cosmos represented Latvia in 2006 with the song I Hear Your Heart', '51'),
('1010', 'Twist Of Love', 'Sidsel Ben Semmane', '14', '', 'Sidsel Ben Semmane represented Denmark in 2006 with the song Twist Of Love', '51'),
('1011', 'Teenage Life', 'Daz Sampson', '52', '', 'Daz Sampson represented United Kingdom in 2006 with the song Teenage Life', '51'),
('1012', 'Loca', 'Arsenium & Natalia Gordienko', '31', '', 'Arsenium & Natalia Gordienko represented Moldova in 2006 with the song Loca', '51'),
('1013', 'Bloody Mary', 'Las Ketchup', '47', './src/assets/es-2006.webp', 'Las Ketchup represented Spain in 2006 with the song Bloody Mary', '51'),
('1014', 'Il était Temps', 'Virginie Pouchin', '17', '', 'Virginie Pouchin represented France in 2006 with the song Il était Temps', '51'),
('1015', 'Ze Hazman', 'Eddie Butler', '24', '', 'Eddie Butler represented Israel in 2006 with the song Ze Hazman', '51'),
('1016', 'I Do', 'Fabrizio Faniello', '30', '', 'Fabrizio Faniello represented Malta in 2006 with the song I Do', '51'),
('1017', 'Follow My Heart', 'Ich Troje', '38', '', 'Ich Troje represented Poland in 2006 with the song Follow My Heart', '51'),
('1018', 'Je t''adore', 'Kate Ryan', '8', '', 'Kate Ryan represented Belgium in 2006 with the song Je t''adore', '51'),
('1019', 'Congratulations', 'Silvia Night', '22', '', 'Silvia Night represented Iceland in 2006 with the song Congratulations', '51'),
('1020', 'Zjarr E Ftohtë', 'Luiz Ejlli', '1', '', 'Luiz Ejlli represented Albania in 2006 with the song Zjarr E Ftohtë', '51'),
('1021', 'Why Angels Cry', 'Annet Artani', '12', '', 'Annet Artani represented Cyprus in 2006 with the song Why Angels Cry', '51'),
('1022', 'Mr. Nobody', 'Anžej Dežan', '46', '', 'Anžej Dežan represented Slovenia in 2006 with the song Mr. Nobody', '51'),
('1023', 'Let Me Cry', 'Mariana Popova', '10', '', 'Mariana Popova represented Bulgaria in 2006 with the song Let Me Cry', '51'),
('1024', 'Through My Window', 'Sandra', '15', '', 'Sandra represented Estonia in 2006 with the song Through My Window', '51'),
('1025', 'Coisas De Nada', 'Nonstop', '39', '', 'Nonstop represented Portugal in 2006 with the song Coisas De Nada', '51'),
('1026', 'Amambanda', 'Treble', '35', '', 'Treble represented Netherlands in 2006 with the song Amambanda', '51'),
('1027', 'La Coco', 'Séverine Ferrer', '32', '', 'Séverine Ferrer represented Monaco in 2006 with the song La Coco', '51'),
('1028', 'Mum', 'Polina Smolova', '7', '', 'Polina Smolova represented Belarus in 2006 with the song Mum', '51'),
('1029', 'Sense Tu', 'Jennifer', '2', '', 'Jennifer represented Andorra in 2006 with the song Sense Tu', '51');
        `)

    // 2007
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1030', 'Molitva', 'Marija Šerifović', '43', '', 'Marija Šerifović represented Serbia in 2007 with the song Molitva', '52'),
('1031', 'Dancing Lasha Tumbai', 'Verka Serduchka', '51', '', 'Verka Serduchka represented Ukraine in 2007 with the song Dancing Lasha Tumbai', '52'),
('1032', 'Song # 1', 'Serebro', '41', '', 'Serebro represented Russia in 2007 with the song Song # 1', '52'),
('1033', 'Shake It Up Şekerim', 'Kenan Dogulu', '50', '', 'Kenan Dogulu represented Turkey in 2007 with the song Shake It Up Şekerim', '52'),
('1034', 'Water', 'Elitsa Todorova & Stoyan Yankulov', '10', '', 'Elitsa Todorova & Stoyan Yankulov represented Bulgaria in 2007 with the song Water', '52'),
('1035', 'Work Your Magic', 'Dmitry Koldun', '7', '', 'Dmitry Koldun represented Belarus in 2007 with the song Work Your Magic', '52'),
('1036', 'Yassou Maria', 'Sarbel', '20', '', 'Sarbel represented Greece in 2007 with the song Yassou Maria', '52'),
('1037', 'Anytime You Need', 'Hayko', '3', '', 'Hayko represented Armenia in 2007 with the song Anytime You Need', '52'),
('1038', 'Unsubstantial Blues', 'Magdi Rúzsa', '21', '', 'Magdi Rúzsa represented Hungary in 2007 with the song Unsubstantial Blues', '52'),
('1039', 'Fight', 'Natalia Barbu', '31', '', 'Natalia Barbu represented Moldova in 2007 with the song Fight', '52'),
('1040', 'Rijeka Bez Imena', 'Marija Sestic', '9', '', 'Marija Sestic represented Bosnia and Herzegovina in 2007 with the song Rijeka Bez Imena', '52'),
('1041', 'Visionary Dream', 'Sopho', '18', '', 'Sopho represented Georgia in 2007 with the song Visionary Dream', '52'),
('1042', 'Liubi, Liubi, I Love You', 'Todomondo', '40', '', 'Todomondo represented Romania in 2007 with the song Liubi, Liubi, I Love You', '52'),
('1043', 'Mojot Svet', 'Karolina', '36', '', 'Karolina represented North Macedonia in 2007 with the song Mojot Svet', '52'),
('1044', 'Cvet Z Juga', 'Alenka Gotar', '46', '', 'Alenka Gotar represented Slovenia in 2007 with the song Cvet Z Juga', '52'),
('1045', 'Questa Notte', 'Bonaparti.lv', '27', '', 'Bonaparti.lv represented Latvia in 2007 with the song Questa Notte', '52'),
('1046', 'Leave Me Alone', 'Hanna Pakarinen', '16', '', 'Hanna Pakarinen represented Finland in 2007 with the song Leave Me Alone', '52'),
('1047', 'The Worrying Kind', 'The Ark', '48', '', 'The Ark represented Sweden in 2007 with the song The Worrying Kind', '52'),
('1048', 'Frauen Regieren Die Welt', 'Roger Cicero', '19', '', 'Roger Cicero represented Germany in 2007 with the song Frauen Regieren Die Welt', '52'),
('1049', 'I Love You Mi Vida', 'D''Nash', '47', './src/assets/es-2007.jpg', 'D''Nash represented Spain in 2007 with the song I Love You Mi Vida', '52'),
('1050', 'Love Or Leave', '4Fun', '28', '', '4Fun represented Lithuania in 2007 with the song Love Or Leave', '52'),
('1051', 'L''amour à La Française', 'Les Fatals Picards', '17', '', 'Les Fatals Picards represented France in 2007 with the song L''amour à La Française', '52'),
('1052', 'Flying The Flag (for You)', 'Scooch', '52', '', 'Scooch represented United Kingdom in 2007 with the song Flying The Flag (for You)', '52'),
('1053', 'They Can''t Stop The Spring', 'Dervish', '23', '', 'Dervish represented Ireland in 2007 with the song They Can''t Stop The Spring', '52'),
('1054', 'Dança Comigo (Vem Ser Feliz)', 'Sabrina', '39', '', 'Sabrina represented Portugal in 2007 with the song Dança Comigo (Vem Ser Feliz)', '52'),
('1055', 'Salvem El Món', 'Anonymous', '2', '', 'Anonymous represented Andorra in 2007 with the song Salvem El Món', '52'),
('1056', 'Valentine Lost', 'Eiríkur Hauksson', '22', '', 'Eiríkur Hauksson represented Iceland in 2007 with the song Valentine Lost', '52'),
('1057', 'Time To Party', 'The Jet Set', '38', '', 'The Jet Set represented Poland in 2007 with the song Time To Party', '52'),
('1058', 'Comme Ci, Comme ça', 'Evridiki', '12', '', 'Evridiki represented Cyprus in 2007 with the song Comme Ci, Comme ça', '52'),
('1059', 'Vjerujem U Ljubav', 'Dragonfly feat. Dado Topic', '11', '', 'Dragonfly feat. Dado Topic represented Croatia in 2007 with the song Vjerujem U Ljubav', '52'),
('1060', 'Hear My Plea', 'Aida & Frederik Ndoci', '1', '', 'Aida & Frederik Ndoci represented Albania in 2007 with the song Hear My Plea', '52'),
('1061', 'Ven A Bailar Conmigo', 'Guri Schanke', '37', '', 'Guri Schanke represented Norway in 2007 with the song Ven A Bailar Conmigo', '52'),
('1062', 'Drama Queen', 'DQ', '14', '', 'DQ represented Denmark in 2007 with the song Drama Queen', '52'),
('1063', 'Vampires Are Alive', 'DJ BoBo', '49', '', 'DJ BoBo represented Switzerland in 2007 with the song Vampires Are Alive', '52'),
('1064', 'On Top Of The World', 'Edsilia Rombley', '35', '', 'Edsilia Rombley represented Netherlands in 2007 with the song On Top Of The World', '52'),
('1065', 'Ajde Kroci', 'Stevan Faddy', '33', '', 'Stevan Faddy represented Montenegro in 2007 with the song Ajde Kroci', '52'),
('1066', 'Partners In Crime', 'Gerli Padar', '15', '', 'Gerli Padar represented Estonia in 2007 with the song Partners In Crime', '52'),
('1067', 'Push The Button', 'Teapacks', '24', '', 'Teapacks represented Israel in 2007 with the song Push The Button', '52'),
('1068', 'Vertigo', 'Olivia Lewis', '30', '', 'Olivia Lewis represented Malta in 2007 with the song Vertigo', '52'),
('1069', 'Love Power', 'The KMG''s', '8', '', 'The KMG''s represented Belgium in 2007 with the song Love Power', '52'),
('1070', 'Get A Life', 'Eric Papilaya', '5', '', 'Eric Papilaya represented Austria in 2007 with the song Get A Life', '52'),
('1071', 'Malá Dáma', 'Kabát', '13', '', 'Kabát represented Czechia in 2007 with the song Malá Dáma', '52');
        `)

    // 2008
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1072', 'Believe', 'Dima Bilan', '41', '', 'Dima Bilan represented Russia in 2008 with the song Believe', '53'),
('1073', 'Shady Lady', 'Ani Lorak', '51', '', 'Ani Lorak represented Ukraine in 2008 with the song Shady Lady', '53'),
('1074', 'Secret Combination', 'Kalomira', '20', '', 'Kalomira represented Greece in 2008 with the song Secret Combination', '53'),
('1075', 'Qele, Qele', 'Sirusho', '3', '', 'Sirusho represented Armenia in 2008 with the song Qele, Qele', '53'),
('1076', 'Hold On Be Strong', 'Maria', '37', '', 'Maria represented Norway in 2008 with the song Hold On Be Strong', '53'),
('1077', 'Oro', 'Jelena Tomašević feat. Bora Dugic', '43', '', 'Jelena Tomašević feat. Bora Dugic represented Serbia in 2008 with the song Oro', '53'),
('1078', 'Deli', 'Mor ve Ötesi', '50', '', 'Mor ve Ötesi represented Turkey in 2008 with the song Deli', '53'),
('1079', 'Day After Day', 'Elnur & Samir', '6', '', 'Elnur & Samir represented Azerbaijan in 2008 with the song Day After Day', '53'),
('1080', 'The Fire In Your Eyes', 'Boaz', '24', '', 'Boaz represented Israel in 2008 with the song The Fire In Your Eyes', '53'),
('1081', 'Pokušaj', 'Laka', '9', '', 'Laka represented Bosnia and Herzegovina in 2008 with the song Pokušaj', '53'),
('1082', 'Peace Will Come', 'Diana Gurtskaya', '18', '', 'Diana Gurtskaya represented Georgia in 2008 with the song Peace Will Come', '53'),
('1083', 'Wolves Of The Sea', 'Pirates Of The Sea', '27', '', 'Pirates Of The Sea represented Latvia in 2008 with the song Wolves Of The Sea', '53'),
('1084', 'Senhora Do Mar (Negras Águas)', 'Vânia Fernandes', '39', '', 'Vânia Fernandes represented Portugal in 2008 with the song Senhora Do Mar (Negras Águas)', '53'),
('1085', 'This Is My Life', 'Euroband', '22', '', 'Euroband represented Iceland in 2008 with the song This Is My Life', '53'),
('1086', 'All Night Long', 'Simon Mathew', '14', '', 'Simon Mathew represented Denmark in 2008 with the song All Night Long', '53'),
('1087', 'Baila El Chiki Chiki', 'Rodolfo Chikilicuatre', '47', './src/assets/es-2008.jpg', 'Rodolfo Chikilicuatre represented Spain in 2008 with the song Baila El Chiki Chiki', '53'),
('1088', 'Zemrën E Lamë Peng', 'Olta Boka', '1', '', 'Olta Boka represented Albania in 2008 with the song Zemrën E Lamë Peng', '53'),
('1089', 'Hero', 'Charlotte Perrelli', '48', '', 'Charlotte Perrelli represented Sweden in 2008 with the song Hero', '53'),
('1090', 'Divine', 'Sébastien Tellier', '17', '', 'Sébastien Tellier represented France in 2008 with the song Divine', '53'),
('1091', 'Pe', 'Nico & Vlad', '40', '', 'Nico & Vlad represented Romania in 2008 with the song Pe', '53'),
('1092', 'Romanca', 'Kraljevi Ulice & 75 Cents', '11', '', 'Kraljevi Ulice & 75 Cents represented Croatia in 2008 with the song Romanca', '53'),
('1093', 'Missä Miehet Ratsastaa', 'Teräsbetoni', '16', '', 'Teräsbetoni represented Finland in 2008 with the song Missä Miehet Ratsastaa', '53'),
('1094', 'Disappear', 'No Angels', '19', '', 'No Angels represented Germany in 2008 with the song Disappear', '53'),
('1095', 'For Life', 'Isis Gee', '38', '', 'Isis Gee represented Poland in 2008 with the song For Life', '53'),
('1096', 'Even If', 'Andy Abraham', '52', '', 'Andy Abraham represented United Kingdom in 2008 with the song Even If', '53'),
('1097', 'Let Me Love You', 'Tamara, Vrčak & Adrijan', '36', '', 'Tamara, Vrčak & Adrijan represented North Macedonia in 2008 with the song Let Me Love You', '53'),
('1098', 'DJ, Take Me Away', 'Deep Zone & Balthazar', '10', '', 'Deep Zone & Balthazar represented Bulgaria in 2008 with the song DJ, Take Me Away', '53'),
('1099', 'Era Stupendo', 'Paolo Meneguzzi', '49', '', 'Paolo Meneguzzi represented Switzerland in 2008 with the song Era Stupendo', '53'),
('1100', 'Vodka', 'Morena', '30', '', 'Morena represented Malta in 2008 with the song Vodka', '53'),
('1101', 'Vrag Naj Vzame', 'Rebeka Dremelj', '46', '', 'Rebeka Dremelj represented Slovenia in 2008 with the song Vrag Naj Vzame', '53'),
('1102', 'A Century Of Love', 'Geta Burlacu', '31', '', 'Geta Burlacu represented Moldova in 2008 with the song A Century Of Love', '53'),
('1103', 'Femme Fatale', 'Evdokia Kadi', '12', '', 'Evdokia Kadi represented Cyprus in 2008 with the song Femme Fatale', '53'),
('1104', 'Nomads In The Night', 'Jeronimas Milius', '28', '', 'Jeronimas Milius represented Lithuania in 2008 with the song Nomads In The Night', '53'),
('1105', 'Your Heart Belongs To Me', 'Hind', '35', '', 'Hind represented Netherlands in 2008 with the song Your Heart Belongs To Me', '53'),
('1106', 'Hasta La Vista', 'Ruslan Alehno', '7', '', 'Ruslan Alehno represented Belarus in 2008 with the song Hasta La Vista', '53'),
('1107', 'Zauvijek Volim Te', 'Stefan Filipović', '33', '', 'Stefan Filipović represented Montenegro in 2008 with the song Zauvijek Volim Te', '53'),
('1108', 'Irelande Douze Pointe', 'Dustin the Turkey', '23', '', 'Dustin the Turkey represented Ireland in 2008 with the song Irelande Douze Pointe', '53'),
('1109', 'Casanova', 'Gisela', '2', '', 'Gisela represented Andorra in 2008 with the song Casanova', '53'),
('1110', 'O Julissi', 'Ishtar', '8', '', 'Ishtar represented Belgium in 2008 with the song O Julissi', '53'),
('1111', 'Have Some Fun', 'Tereza Kerndlová', '13', '', 'Tereza Kerndlová represented Czechia in 2008 with the song Have Some Fun', '53'),
('1112', 'Leto Svet', 'Kreisiraadio', '15', '', 'Kreisiraadio represented Estonia in 2008 with the song Leto Svet', '53'),
('1113', 'Candlelight', 'Csézy', '21', '', 'Csézy represented Hungary in 2008 with the song Candlelight', '53'),
('1114', 'Complice', 'Miodio', '42', '', 'Miodio represented San Marino in 2008 with the song Complice', '53');
        `)

    // 2009
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1115', 'Fairytale', 'Alexander Rybak', '37', '', 'Alexander Rybak represented Norway in 2009 with the song Fairytale', '54'),
('1116', 'Is It True?', 'Yohanna', '22', '', 'Yohanna represented Iceland in 2009 with the song Is It True?', '54'),
('1117', 'Always', 'AySel & Arash', '6', '', 'AySel & Arash represented Azerbaijan in 2009 with the song Always', '54'),
('1118', 'Düm Tek Tek', 'Hadise', '50', '', 'Hadise represented Turkey in 2009 with the song Düm Tek Tek', '54'),
('1119', 'It''s My Time', 'Jade Ewen', '52', '', 'Jade Ewen represented United Kingdom in 2009 with the song It''s My Time', '54'),
('1120', 'Rändajad', 'Urban Symphony', '15', '', 'Urban Symphony represented Estonia in 2009 with the song Rändajad', '54'),
('1121', 'This Is Our Night', 'Sakis Rouvas', '20', '', 'Sakis Rouvas represented Greece in 2009 with the song This Is Our Night', '54'),
('1122', 'Et S''il Fallait Le Faire', 'Patricia Kaas', '17', '', 'Patricia Kaas represented France in 2009 with the song Et S''il Fallait Le Faire', '54'),
('1123', 'Bistra Voda', 'Regina', '9', '', 'Regina represented Bosnia and Herzegovina in 2009 with the song Bistra Voda', '54'),
('1124', 'Jan Jan', 'Inga & Anush', '3', '', 'Inga & Anush represented Armenia in 2009 with the song Jan Jan', '54'),
('1125', 'Mamo', 'Anastasia Prikhodko', '41', '', 'Anastasia Prikhodko represented Russia in 2009 with the song Mamo', '54'),
('1126', 'Be my Valentine! (Anti', 'Svetlana Loboda', '51', '', 'Svetlana Loboda represented Ukraine in 2009 with the song Be my Valentine! (Anti', '54'),
('1127', 'Believe Again', 'Brinck', '14', '', 'Brinck represented Denmark in 2009 with the song Believe Again', '54'),
('1128', 'Hora Din Moldova', 'Nelly Ciobanu', '31', '', 'Nelly Ciobanu represented Moldova in 2009 with the song Hora Din Moldova', '54'),
('1129', 'de', 'Flor', '39', '', 'Flor represented Portugal in 2009 with the song de', '54'),
('1130', 'There Must Be Another Way', 'Noa & Mira Awad', '24', '', 'Noa & Mira Awad represented Israel in 2009 with the song There Must Be Another Way', '54'),
('1131', 'Carry Me In Your Dreams', 'Kejsi Tola', '1', '', 'Kejsi Tola represented Albania in 2009 with the song Carry Me In Your Dreams', '54'),
('1132', 'Lijepa Tena', 'Igor Cukrov feat. Andrea', '11', '', 'Igor Cukrov feat. Andrea represented Croatia in 2009 with the song Lijepa Tena', '54'),
('1133', 'The Balkan Girls', 'Elena', '40', '', 'Elena represented Romania in 2009 with the song The Balkan Girls', '54'),
('1134', 'Miss Kiss Kiss Bang', 'Alex Swings Oscar Sings!', '19', '', 'Alex Swings Oscar Sings! represented Germany in 2009 with the song Miss Kiss Kiss Bang', '54'),
('1135', 'La Voix', 'Malena Ernman', '48', '', 'Malena Ernman represented Sweden in 2009 with the song La Voix', '54'),
('1136', 'What If We', 'Chiara', '30', '', 'Chiara represented Malta in 2009 with the song What If We', '54'),
('1137', 'Love', 'Sasha Son', '28', '', 'Sasha Son represented Lithuania in 2009 with the song Love', '54'),
('1138', 'La Noche Es Para Mí', 'Soraya', '47', './src/assets/es-2009.jpg', 'Soraya represented Spain in 2009 with the song La Noche Es Para Mí', '54'),
('1139', 'Lose Control', 'Waldo''s People', '16', '', 'Waldo''s People represented Finland in 2009 with the song Lose Control', '54'),
('1140', 'Cipela', 'Marko Kon & Milaan', '43', '', 'Marko Kon & Milaan represented Serbia in 2009 with the song Cipela', '54'),
('1141', 'Et Cetera', 'Sinéad Mulvey & Black Daisy', '23', '', 'Sinéad Mulvey & Black Daisy represented Ireland in 2009 with the song Et Cetera', '54'),
('1142', 'Neshto Shto Ke Ostane', 'Next Time', '36', '', 'Next Time represented North Macedonia in 2009 with the song Neshto Shto Ke Ostane', '54'),
('1143', 'Just Get Out of My Life', 'Andrea Demirović', '33', '', 'Andrea Demirović represented Montenegro in 2009 with the song Just Get Out of My Life', '54'),
('1144', 'I Don''t Wanna Leave', 'Lidia Kopania', '38', '', 'Lidia Kopania represented Poland in 2009 with the song I Don''t Wanna Leave', '54'),
('1145', 'Firefly', 'Christina Metaxa', '12', '', 'Christina Metaxa represented Cyprus in 2009 with the song Firefly', '54'),
('1146', 'Eyes That Never Lie', 'Petr Elfimov', '7', '', 'Petr Elfimov represented Belarus in 2009 with the song Eyes That Never Lie', '54'),
('1147', 'The Highest Heights', 'Lovebugs', '49', '', 'Lovebugs represented Switzerland in 2009 with the song The Highest Heights', '54'),
('1148', 'Dance With Me', 'Zoli Ádok', '21', '', 'Zoli Ádok represented Hungary in 2009 with the song Dance With Me', '54'),
('1149', 'Love Symphony', 'Quartissimo feat. Martina', '46', '', 'Quartissimo feat. Martina represented Slovenia in 2009 with the song Love Symphony', '54'),
('1150', 'Shine', 'The Toppers', '35', '', 'The Toppers represented Netherlands in 2009 with the song Shine', '54'),
('1151', 'La Teva Decisió (Get A Life)', 'Susanne Georgi', '2', '', 'Susanne Georgi represented Andorra in 2009 with the song La Teva Decisió (Get A Life)', '54'),
('1152', 'Leť Tmou', 'Kamil Mikulčík & Nela Pocisková', '45', '', 'Kamil Mikulčík & Nela Pocisková represented Slovakia in 2009 with the song Leť Tmou', '54'),
('1153', 'Illusion', 'Krassimir Avramov', '10', '', 'Krassimir Avramov represented Bulgaria in 2009 with the song Illusion', '54'),
('1154', 'Probka', 'Intars Busulis', '27', '', 'Intars Busulis represented Latvia in 2009 with the song Probka', '54'),
('1155', 'Copycat', 'Copycat', '8', '', 'Copycat represented Belgium in 2009 with the song Copycat', '54'),
('1156', 'Aven Romale', 'Gipsy.cz', '13', '', 'Gipsy.cz represented Czechia in 2009 with the song Aven Romale', '54');
        `)

    // 2010
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1157', 'Satellite', 'Lena', '19', '', 'Lena represented Germany in 2010 with the song Satellite', '55'),
('1158', 'We Could Be The Same', 'maNga', '50', '', 'maNga represented Turkey in 2010 with the song We Could Be The Same', '55'),
('1159', 'Playing With Fire', 'Paula Seling & Ovi', '40', '', 'Paula Seling & Ovi represented Romania in 2010 with the song Playing With Fire', '55'),
('1160', 'In a Moment like This', 'Chanée & N''evergreen', '14', '', 'Chanée & N''evergreen represented Denmark in 2010 with the song In a Moment like This', '55'),
('1161', 'Drip Drop', 'Safura', '6', '', 'Safura represented Azerbaijan in 2010 with the song Drip Drop', '55'),
('1162', 'Me And My Guitar', 'Tom Dice', '8', '', 'Tom Dice represented Belgium in 2010 with the song Me And My Guitar', '55'),
('1163', 'Apricot Stone', 'Eva Rivas', '3', '', 'Eva Rivas represented Armenia in 2010 with the song Apricot Stone', '55'),
('1164', 'OPA', 'Giorgos Alkaios & Friends', '20', '', 'Giorgos Alkaios & Friends represented Greece in 2010 with the song OPA', '55'),
('1165', 'Shine', 'Sofia Nizharadze', '18', '', 'Sofia Nizharadze represented Georgia in 2010 with the song Shine', '55'),
('1166', 'Sweet People', 'Alyosha', '51', '', 'Alyosha represented Ukraine in 2010 with the song Sweet People', '55'),
('1167', 'Lost And Forgotten', 'Peter Nalitch & Friends', '41', '', 'Peter Nalitch & Friends represented Russia in 2010 with the song Lost And Forgotten', '55'),
('1168', 'Allez Ola Olé', 'Jessy Matador', '17', '', 'Jessy Matador represented France in 2010 with the song Allez Ola Olé', '55'),
('1169', 'Ovo Je Balkan', 'Milan Stanković', '43', '', 'Milan Stanković represented Serbia in 2010 with the song Ovo Je Balkan', '55'),
('1170', 'Milim', 'Harel Skaat', '24', '', 'Harel Skaat represented Israel in 2010 with the song Milim', '55'),
('1171', 'Algo Pequeñito', 'Daniel Diges', '47', './src/assets/es-2010.webp', 'Daniel Diges represented Spain in 2010 with the song Algo Pequeñito', '55'),
('1172', 'It''s All About You', 'Juliana Pasha', '1', '', 'Juliana Pasha represented Albania in 2010 with the song It''s All About You', '55'),
('1173', 'Thunder and Lightning', 'Vukašin Brajić', '9', '', 'Vukašin Brajić represented Bosnia and Herzegovina in 2010 with the song Thunder and Lightning', '55'),
('1174', 'Há Dias Assim', 'Filipa Azevedo', '39', '', 'Filipa Azevedo represented Portugal in 2010 with the song Há Dias Assim', '55'),
('1175', 'Je Ne Sais Quoi', 'Hera Björk', '22', '', 'Hera Björk represented Iceland in 2010 with the song Je Ne Sais Quoi', '55'),
('1176', 'Tangen', 'Didrik Solli', '37', '', 'Didrik Solli represented Norway in 2010 with the song Tangen', '55'),
('1177', 'Life Looks Better In Spring', 'Jon Lilygreen & The Islanders', '12', '', 'Jon Lilygreen & The Islanders represented Cyprus in 2010 with the song Life Looks Better In Spring', '55'),
('1178', 'Run Away', 'Sunstroke Project & Olia Tira', '31', '', 'Sunstroke Project & Olia Tira represented Moldova in 2010 with the song Run Away', '55'),
('1179', 'It''s For You', 'Niamh Kavanagh', '23', '', 'Niamh Kavanagh represented Ireland in 2010 with the song It''s For You', '55'),
('1180', 'Butterflies', '3+2', '7', '', '3+2 represented Belarus in 2010 with the song Butterflies', '55'),
('1181', 'That Sounds Good To Me', 'Josh', '52', '', 'Josh represented United Kingdom in 2010 with the song That Sounds Good To Me', '55'),
('1182', 'This Is My Life', 'Anna Bergendahl', '48', '', 'Anna Bergendahl represented Sweden in 2010 with the song This Is My Life', '55'),
('1183', 'Työlki Ellää', 'Kuunkuiskaajat', '16', '', 'Kuunkuiskaajat represented Finland in 2010 with the song Työlki Ellää', '55'),
('1184', 'Eastern European Funk', 'InCulto', '28', '', 'InCulto represented Lithuania in 2010 with the song Eastern European Funk', '55'),
('1185', 'My Dream', 'Thea Garrett', '30', '', 'Thea Garrett represented Malta in 2010 with the song My Dream', '55'),
('1186', 'Legenda', 'Marcin Mroziński', '38', '', 'Marcin Mroziński represented Poland in 2010 with the song Legenda', '55'),
('1187', 'Siren', 'Malcolm Lincoln', '15', '', 'Malcolm Lincoln represented Estonia in 2010 with the song Siren', '55'),
('1188', 'Jas Ja Imam Silata', 'Gjoko Taneski', '36', '', 'Gjoko Taneski represented North Macedonia in 2010 with the song Jas Ja Imam Silata', '55'),
('1189', 'Lako Je Sve', 'Feminnem', '11', '', 'Feminnem represented Croatia in 2010 with the song Lako Je Sve', '55'),
('1190', 'Ik Ben Verliefd (Sha', 'Sieneke', '35', '', 'Sieneke represented Netherlands in 2010 with the song Ik Ben Verliefd (Sha', '55'),
('1191', 'Horehronie', 'Kristina Pelakova', '45', '', 'Kristina Pelakova represented Slovakia in 2010 with the song Horehronie', '55'),
('1192', 'Angel Si Ti', 'Miro', '10', '', 'Miro represented Bulgaria in 2010 with the song Angel Si Ti', '55'),
('1193', 'What For?', 'Aisha', '27', '', 'Aisha represented Latvia in 2010 with the song What For?', '55'),
('1194', 'Narodnozabavni Rock', 'Ansambel Žlindra & Kalamari', '46', '', 'Ansambel Žlindra & Kalamari represented Slovenia in 2010 with the song Narodnozabavni Rock', '55'),
('1195', 'Il Pleut de L''Or', 'Michael von der Heide', '49', '', 'Michael von der Heide represented Switzerland in 2010 with the song Il Pleut de L''Or', '55');
        `)

    // 2011
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1196', 'Running Scared', 'Ell/Nikki', '6', '', 'Ell/Nikki represented Azerbaijan in 2011 with the song Running Scared', '56'),
('1197', 'Madness Of Love', 'Raphael Gualazzi', '25', '', 'Raphael Gualazzi represented Italy in 2011 with the song Madness Of Love', '56'),
('1198', 'Popular', 'Eric Saade', '48', '', 'Eric Saade represented Sweden in 2011 with the song Popular', '56'),
('1199', 'Angel', 'Mika Newton', '51', '', 'Mika Newton represented Ukraine in 2011 with the song Angel', '56'),
('1200', 'New Tomorrow', 'A Friend In London', '14', '', 'A Friend In London represented Denmark in 2011 with the song New Tomorrow', '56'),
('1201', 'Love In Rewind', 'Dino Merlin', '9', '', 'Dino Merlin represented Bosnia and Herzegovina in 2011 with the song Love In Rewind', '56'),
('1202', 'Watch My Dance', 'Loucas Yiorkas feat. Stereo Mike', '20', '', 'Loucas Yiorkas feat. Stereo Mike represented Greece in 2011 with the song Watch My Dance', '56'),
('1203', 'Lipstick', 'Jedward', '23', '', 'Jedward represented Ireland in 2011 with the song Lipstick', '56'),
('1204', 'One More Day', 'Eldrine', '18', '', 'Eldrine represented Georgia in 2011 with the song One More Day', '56'),
('1205', 'Taken By A Stranger', 'Lena', '19', '', 'Lena represented Germany in 2011 with the song Taken By A Stranger', '56'),
('1206', 'I Can', 'Blue', '52', '', 'Blue represented United Kingdom in 2011 with the song I Can', '56'),
('1207', 'So Lucky', 'Zdob și Zdub', '31', '', 'Zdob și Zdub represented Moldova in 2011 with the song So Lucky', '56'),
('1208', 'No One', 'Maja Keuc', '46', '', 'Maja Keuc represented Slovenia in 2011 with the song No One', '56'),
('1209', 'Čaroban', 'Nina', '43', '', 'Nina represented Serbia in 2011 with the song Čaroban', '56'),
('1210', 'Sognu', 'Amaury Vassili', '17', '', 'Amaury Vassili represented France in 2011 with the song Sognu', '56'),
('1211', 'Get You', 'Alexej Vorobjov', '41', '', 'Alexej Vorobjov represented Russia in 2011 with the song Get You', '56'),
('1212', 'Change', 'Hotel FM', '40', '', 'Hotel FM represented Romania in 2011 with the song Change', '56'),
('1213', 'The Secret Is Love', 'Nadine Beiler', '5', '', 'Nadine Beiler represented Austria in 2011 with the song The Secret Is Love', '56'),
('1214', 'C''est Ma Vie', 'Evelina Sašenko', '28', '', 'Evelina Sašenko represented Lithuania in 2011 with the song C''est Ma Vie', '56'),
('1215', 'Coming Home', 'Sjonni''s Friends', '22', '', 'Sjonni''s Friends represented Iceland in 2011 with the song Coming Home', '56'),
('1216', 'Da Da Dam', 'Paradise Oskar', '16', '', 'Paradise Oskar represented Finland in 2011 with the song Da Da Dam', '56'),
('1217', 'What About My Dreams?', 'Kati Wolf', '21', '', 'Kati Wolf represented Hungary in 2011 with the song What About My Dreams?', '56'),
('1218', 'Que Me Quiten Lo Bailao', 'Lucía Pérez', '47', './src/assets/es-2011.webp', 'Lucía Pérez represented Spain in 2011 with the song Que Me Quiten Lo Bailao', '56'),
('1219', 'Rockefeller Street', 'Getter Jaani', '15', '', 'Getter Jaani represented Estonia in 2011 with the song Rockefeller Street', '56'),
('1220', 'In Love For A While', 'Anna Rossinelli', '49', '', 'Anna Rossinelli represented Switzerland in 2011 with the song In Love For A While', '56'),
('1221', 'One Life', 'Glen Vella', '30', '', 'Glen Vella represented Malta in 2011 with the song One Life', '56'),
('1222', 'Boom Boom', 'Emmy', '3', '', 'Emmy represented Armenia in 2011 with the song Boom Boom', '56'),
('1223', 'With Love Baby', 'Witloof Bay', '8', '', 'Witloof Bay represented Belgium in 2011 with the song With Love Baby', '56'),
('1224', 'Live It Up', 'Yüksek Sadakat', '50', '', 'Yüksek Sadakat represented Turkey in 2011 with the song Live It Up', '56'),
('1225', 'Feel The Passion', 'Aurela Gaçe', '1', '', 'Aurela Gaçe represented Albania in 2011 with the song Feel The Passion', '56'),
('1226', 'Na Inat', 'Poli Genova', '10', '', 'Poli Genova represented Bulgaria in 2011 with the song Na Inat', '56'),
('1227', 'I''m Still Alive', 'TWiiNS', '45', '', 'TWiiNS represented Slovakia in 2011 with the song I''m Still Alive', '56'),
('1228', 'I Love Belarus', 'Anastasiya Vinnikova', '7', '', 'Anastasiya Vinnikova represented Belarus in 2011 with the song I Love Belarus', '56'),
('1229', 'Celebrate', 'Daria', '11', '', 'Daria represented Croatia in 2011 with the song Celebrate', '56'),
('1230', 'Ding Dong', 'Dana International', '24', '', 'Dana International represented Israel in 2011 with the song Ding Dong', '56'),
('1231', 'Rusinka', 'Vlatko Ilievski', '36', '', 'Vlatko Ilievski represented North Macedonia in 2011 with the song Rusinka', '56'),
('1232', 'Stand By', 'Senit', '42', '', 'Senit represented San Marino in 2011 with the song Stand By', '56'),
('1233', 'Haba Haba', 'Stella Mwangi', '37', '', 'Stella Mwangi represented Norway in 2011 with the song Haba Haba', '56'),
('1234', 'Angel In Disguise', 'Musiqq', '27', '', 'Musiqq represented Latvia in 2011 with the song Angel In Disguise', '56'),
('1235', 'A Luta É Alegria', 'Homens da Luta', '39', '', 'Homens da Luta represented Portugal in 2011 with the song A Luta É Alegria', '56'),
('1236', 'Jestem', 'Magdalena Tul', '38', '', 'Magdalena Tul represented Poland in 2011 with the song Jestem', '56'),
('1237', 'San Aggelos S''agapisa', 'Christos Mylordos', '12', '', 'Christos Mylordos represented Cyprus in 2011 with the song San Aggelos S''agapisa', '56'),
('1238', 'Never Alone', '3JS', '35', '', '3JS represented Netherlands in 2011 with the song Never Alone', '56');
        `)

    // 2012
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1239', 'Euphoria', 'Loreen', '48', '', 'Loreen represented Sweden in 2012 with the song Euphoria', '57'),
('1240', 'Party For Everybody', 'Buranovskiye Babushki', '41', '', 'Buranovskiye Babushki represented Russia in 2012 with the song Party For Everybody', '57'),
('1241', 'Nije Ljubav Stvar', 'Željko Joksimović', '43', '', 'Željko Joksimović represented Serbia in 2012 with the song Nije Ljubav Stvar', '57'),
('1242', 'When The Music Dies', 'Sabina Babayeva', '6', '', 'Sabina Babayeva represented Azerbaijan in 2012 with the song When The Music Dies', '57'),
('1243', 'Suus', 'Rona Nishliu', '1', '', 'Rona Nishliu represented Albania in 2012 with the song Suus', '57'),
('1244', 'Kuula', 'Ott Lepland', '15', '', 'Ott Lepland represented Estonia in 2012 with the song Kuula', '57'),
('1245', 'Love Me Back', 'Can Bonomo', '50', '', 'Can Bonomo represented Turkey in 2012 with the song Love Me Back', '57'),
('1246', 'Standing Still', 'Roman Lob', '19', '', 'Roman Lob represented Germany in 2012 with the song Standing Still', '57'),
('1247', 'L''Amore È Femmina (Out Of Love)', 'Nina Zilli', '25', '', 'Nina Zilli represented Italy in 2012 with the song L''Amore È Femmina (Out Of Love)', '57'),
('1248', 'Quédate Conmigo', 'Pastora Soler', '47', './src/assets/es-2012.jpg', 'Pastora Soler represented Spain in 2012 with the song Quédate Conmigo', '57'),
('1249', 'Lăutar', 'Pasha Parfeny', '31', '', 'Pasha Parfeny represented Moldova in 2012 with the song Lăutar', '57'),
('1250', 'Zaleilah', 'Mandinga', '40', '', 'Mandinga represented Romania in 2012 with the song Zaleilah', '57'),
('1251', 'Crno I Belo', 'Kaliopi', '36', '', 'Kaliopi represented North Macedonia in 2012 with the song Crno I Belo', '57'),
('1252', 'Love Is Blind', 'Donny Montell', '28', '', 'Donny Montell represented Lithuania in 2012 with the song Love Is Blind', '57'),
('1253', 'Be My Guest', 'Gaitana', '51', '', 'Gaitana represented Ukraine in 2012 with the song Be My Guest', '57'),
('1254', 'La La Love', 'Ivi Adamou', '12', '', 'Ivi Adamou represented Cyprus in 2012 with the song La La Love', '57'),
('1255', 'Aphrodisiac', 'Eleftheria Eleftheriou', '20', '', 'Eleftheria Eleftheriou represented Greece in 2012 with the song Aphrodisiac', '57'),
('1256', 'Korake Ti Znam', 'Maya Sar', '9', '', 'Maya Sar represented Bosnia and Herzegovina in 2012 with the song Korake Ti Znam', '57'),
('1257', 'Waterline', 'Jedward', '23', '', 'Jedward represented Ireland in 2012 with the song Waterline', '57'),
('1258', 'Never Forget', 'Greta Salóme & Jónsi', '22', '', 'Greta Salóme & Jónsi represented Iceland in 2012 with the song Never Forget', '57'),
('1259', 'This Is The Night', 'Kurt Calleja', '30', '', 'Kurt Calleja represented Malta in 2012 with the song This Is The Night', '57'),
('1260', 'Echo (You And I)', 'Anggun', '17', '', 'Anggun represented France in 2012 with the song Echo (You And I)', '57'),
('1261', 'Should''ve Known Better', 'Soluna Samay', '14', '', 'Soluna Samay represented Denmark in 2012 with the song Should''ve Known Better', '57'),
('1262', 'Sound Of Our Hearts', 'Compact Disco', '21', '', 'Compact Disco represented Hungary in 2012 with the song Sound Of Our Hearts', '57'),
('1263', 'Love Will Set You Free', 'Engelbert Humperdinck', '52', '', 'Engelbert Humperdinck represented United Kingdom in 2012 with the song Love Will Set You Free', '57'),
('1264', 'Stay', 'Tooji', '37', '', 'Tooji represented Norway in 2012 with the song Stay', '57'),
('1265', 'Love Unlimited', 'Sofi Marinova', '10', '', 'Sofi Marinova represented Bulgaria in 2012 with the song Love Unlimited', '57'),
('1266', 'Unbreakable', 'Sinplus', '49', '', 'Sinplus represented Switzerland in 2012 with the song Unbreakable', '57'),
('1267', 'Nebo', 'Nina Badrić', '11', '', 'Nina Badrić represented Croatia in 2012 with the song Nebo', '57'),
('1268', 'När Jag Blundar', 'Pernilla', '16', '', 'Pernilla represented Finland in 2012 with the song När Jag Blundar', '57'),
('1269', 'Vida Minha', 'Filipa Sousa', '39', '', 'Filipa Sousa represented Portugal in 2012 with the song Vida Minha', '57'),
('1270', 'I''m a Joker', 'Anri Jokhadze', '18', '', 'Anri Jokhadze represented Georgia in 2012 with the song I''m a Joker', '57'),
('1271', 'You And Me', 'Joan Franka', '35', '', 'Joan Franka represented Netherlands in 2012 with the song You And Me', '57'),
('1272', 'We Are The Heroes', 'Litesound', '7', '', 'Litesound represented Belarus in 2012 with the song We Are The Heroes', '57'),
('1273', 'Time', 'Izabo', '24', '', 'Izabo represented Israel in 2012 with the song Time', '57'),
('1274', 'The Social Network Song (Oh Oh – Uh', 'Valentina Monetta', '42', '', 'Valentina Monetta represented San Marino in 2012 with the song The Social Network Song (Oh Oh – Uh', '57'),
('1275', 'Verjamem', 'Eva Boto', '46', '', 'Eva Boto represented Slovenia in 2012 with the song Verjamem', '57'),
('1276', 'Don''t Close Your Eyes', 'Max Jason Mai', '45', '', 'Max Jason Mai represented Slovakia in 2012 with the song Don''t Close Your Eyes', '57'),
('1277', 'Euro Neuro', 'Rambo Amadeus', '33', '', 'Rambo Amadeus represented Montenegro in 2012 with the song Euro Neuro', '57'),
('1278', 'Beautiful Song', 'Anmary', '27', '', 'Anmary represented Latvia in 2012 with the song Beautiful Song', '57'),
('1279', 'Would You?', 'Iris', '8', '', 'Iris represented Belgium in 2012 with the song Would You?', '57'),
('1280', 'Woki Mit Deim Popo', 'Trackshittaz', '5', '', 'Trackshittaz represented Austria in 2012 with the song Woki Mit Deim Popo', '57');
        `)

    // 2013
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1281', 'Only Teardrops', 'Emmelie de Forest', '14', '', 'Emmelie de Forest represented Denmark in 2013 with the song Only Teardrops', '58'),
('1282', 'Hold Me', 'Farid Mammadov', '6', '', 'Farid Mammadov represented Azerbaijan in 2013 with the song Hold Me', '58'),
('1283', 'Gravity', 'Zlata Ognevich', '51', '', 'Zlata Ognevich represented Ukraine in 2013 with the song Gravity', '58'),
('1284', 'I Feed You My Love', 'Margaret Berger', '37', '', 'Margaret Berger represented Norway in 2013 with the song I Feed You My Love', '58'),
('1285', 'What If', 'Dina Garipova', '41', '', 'Dina Garipova represented Russia in 2013 with the song What If', '58'),
('1286', 'Alcohol Is Free', 'Koza Mostra feat. Agathon Iakovidis', '20', '', 'Koza Mostra feat. Agathon Iakovidis represented Greece in 2013 with the song Alcohol Is Free', '58'),
('1287', 'L''Essenziale', 'Marco Mengoni', '25', '', 'Marco Mengoni represented Italy in 2013 with the song L''Essenziale', '58'),
('1288', 'Tomorrow', 'Gianluca', '30', '', 'Gianluca represented Malta in 2013 with the song Tomorrow', '58'),
('1289', 'Birds', 'Anouk', '35', '', 'Anouk represented Netherlands in 2013 with the song Birds', '58'),
('1290', 'Kedvesem', 'ByeAlex', '21', '', 'ByeAlex represented Hungary in 2013 with the song Kedvesem', '58'),
('1291', 'O Mie', 'Aliona Moon', '31', '', 'Aliona Moon represented Moldova in 2013 with the song O Mie', '58'),
('1292', 'Love Kills', 'Roberto Bellarosa', '8', '', 'Roberto Bellarosa represented Belgium in 2013 with the song Love Kills', '58'),
('1293', 'It''s My Life', 'Cezar', '40', '', 'Cezar represented Romania in 2013 with the song It''s My Life', '58'),
('1294', 'You', 'Robin Stjernberg', '48', '', 'Robin Stjernberg represented Sweden in 2013 with the song You', '58'),
('1295', 'Waterfall', 'Nodi Tatishvili & Sophie Gelovani', '18', '', 'Nodi Tatishvili & Sophie Gelovani represented Georgia in 2013 with the song Waterfall', '58'),
('1296', 'Solayoh', 'Alyona Lanskaya', '7', '', 'Alyona Lanskaya represented Belarus in 2013 with the song Solayoh', '58'),
('1297', 'Ég Á Líf', 'Eythor Ingi', '22', '', 'Eythor Ingi represented Iceland in 2013 with the song Ég Á Líf', '58'),
('1298', 'Lonely Planet', 'Dorians', '3', '', 'Dorians represented Armenia in 2013 with the song Lonely Planet', '58'),
('1299', 'Believe In Me', 'Bonnie Tyler', '52', '', 'Bonnie Tyler represented United Kingdom in 2013 with the song Believe In Me', '58'),
('1300', 'Et Uus Saaks Alguse', 'Birgit', '15', '', 'Birgit represented Estonia in 2013 with the song Et Uus Saaks Alguse', '58'),
('1301', 'Glorious', 'Cascada', '19', '', 'Cascada represented Germany in 2013 with the song Glorious', '58'),
('1302', 'Something', 'Andrius Pojavis', '28', '', 'Andrius Pojavis represented Lithuania in 2013 with the song Something', '58'),
('1303', 'L''enfer Et Moi', 'Amandine Bourgeois', '17', '', 'Amandine Bourgeois represented France in 2013 with the song L''enfer Et Moi', '58'),
('1304', 'Marry Me', 'Krista Siegfrids', '16', '', 'Krista Siegfrids represented Finland in 2013 with the song Marry Me', '58'),
('1305', 'Contigo Hasta El Final', 'ESDM', '47', './src/assets/es-2013.webp', 'ESDM represented Spain in 2013 with the song Contigo Hasta El Final', '58'),
('1306', 'Only Love Survives', 'Ryan Dolan', '23', '', 'Ryan Dolan represented Ireland in 2013 with the song Only Love Survives', '58'),
('1307', 'Ljubav Je Svuda', 'Moje 3', '43', '', 'Moje 3 represented Serbia in 2013 with the song Ljubav Je Svuda', '58'),
('1308', 'Crisalide (Vola)', 'Valentina Monetta', '42', '', 'Valentina Monetta represented San Marino in 2013 with the song Crisalide (Vola)', '58'),
('1309', 'Samo Shampioni', 'Elitsa Todorova & Stoyan Yankulov', '10', '', 'Elitsa Todorova & Stoyan Yankulov represented Bulgaria in 2013 with the song Samo Shampioni', '58'),
('1310', 'Igranka', 'Who See', '33', '', 'Who See represented Montenegro in 2013 with the song Igranka', '58'),
('1311', 'You And Me', 'Takasa', '49', '', 'Takasa represented Switzerland in 2013 with the song You And Me', '58'),
('1312', 'Mižerja', 'Klapa s mora', '11', '', 'Klapa s mora represented Croatia in 2013 with the song Mižerja', '58'),
('1313', 'Rak Bishvilo', 'Moran Mazor', '24', '', 'Moran Mazor represented Israel in 2013 with the song Rak Bishvilo', '58'),
('1314', 'Identitet', 'Adrian Lulgjuraj & Bledar Sejko', '1', '', 'Adrian Lulgjuraj & Bledar Sejko represented Albania in 2013 with the song Identitet', '58'),
('1315', 'Shine', 'Natália Kelly', '5', '', 'Natália Kelly represented Austria in 2013 with the song Shine', '58'),
('1316', 'Pred Da Se Razdeni', 'Esma & Lozano', '36', '', 'Esma & Lozano represented North Macedonia in 2013 with the song Pred Da Se Razdeni', '58'),
('1317', 'Here We Go', 'PeR', '27', '', 'PeR represented Latvia in 2013 with the song Here We Go', '58'),
('1318', 'An Me Thimasai', 'Despina Olympiou', '12', '', 'Despina Olympiou represented Cyprus in 2013 with the song An Me Thimasai', '58'),
('1319', 'Straight Into Love', 'Hannah', '46', '', 'Hannah represented Slovenia in 2013 with the song Straight Into Love', '58');
        `)

    // 2014
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1320', 'Rise Like a Phoenix', 'Conchita Wurst', '5', '', 'Conchita Wurst represented Austria in 2014 with the song Rise Like a Phoenix', '59'),
('1321', 'Calm After The Storm', 'The Common Linnets', '35', '', 'The Common Linnets represented Netherlands in 2014 with the song Calm After The Storm', '59'),
('1322', 'Undo', 'Sanna Nielsen', '48', '', 'Sanna Nielsen represented Sweden in 2014 with the song Undo', '59'),
('1323', 'Not Alone', 'Aram MP3', '3', '', 'Aram MP3 represented Armenia in 2014 with the song Not Alone', '59'),
('1324', 'Saunders', 'András Kállay', '21', '', 'András Kállay represented Hungary in 2014 with the song Saunders', '59'),
('1325', 'Tick', 'Mariya Yaremchuk', '51', '', 'Mariya Yaremchuk represented Ukraine in 2014 with the song Tick', '59'),
('1326', 'Shine', 'Tolmachevy Sisters', '41', '', 'Tolmachevy Sisters represented Russia in 2014 with the song Shine', '59'),
('1327', 'Silent Storm', 'Carl Espen', '37', '', 'Carl Espen represented Norway in 2014 with the song Silent Storm', '59'),
('1328', 'Cliche Love Song', 'Basim', '14', '', 'Basim represented Denmark in 2014 with the song Cliche Love Song', '59'),
('1329', 'Dancing in the rain', 'Ruth Lorenzo', '47', './src/assets/es-2014.jpg', 'Ruth Lorenzo represented Spain in 2014 with the song Dancing in the rain', '59'),
('1330', 'Something Better', 'Softengine', '16', '', 'Softengine represented Finland in 2014 with the song Something Better', '59'),
('1331', 'Miracle', 'Paula Seling & OVI', '40', '', 'Paula Seling & OVI represented Romania in 2014 with the song Miracle', '59'),
('1332', 'Hunter Of Stars', 'Sebalter', '49', '', 'Sebalter represented Switzerland in 2014 with the song Hunter Of Stars', '59'),
('1333', 'My Słowianie', 'Donatan & Cleo', '38', '', 'Donatan & Cleo represented Poland in 2014 with the song My Słowianie', '59'),
('1334', 'No Prejudice', 'Pollapönk', '22', '', 'Pollapönk represented Iceland in 2014 with the song No Prejudice', '59'),
('1335', 'Cheesecake', 'Teo', '7', '', 'Teo represented Belarus in 2014 with the song Cheesecake', '59'),
('1336', 'Children of the Universe', 'Molly', '52', '', 'Molly represented United Kingdom in 2014 with the song Children of the Universe', '59'),
('1337', 'Is It Right', 'Elaiza', '19', '', 'Elaiza represented Germany in 2014 with the song Is It Right', '59'),
('1338', 'Moj Svijet', 'Sergej Ćetković', '33', '', 'Sergej Ćetković represented Montenegro in 2014 with the song Moj Svijet', '59'),
('1339', 'Rise Up', 'Freaky Fortune feat. RiskyKidd', '20', '', 'Freaky Fortune feat. RiskyKidd represented Greece in 2014 with the song Rise Up', '59'),
('1340', 'La Mia Città', 'Emma', '25', '', 'Emma represented Italy in 2014 with the song La Mia Città', '59'),
('1341', 'Start A Fire', 'Dilara Kazimova', '6', '', 'Dilara Kazimova represented Azerbaijan in 2014 with the song Start A Fire', '59'),
('1342', 'Coming Home', 'Firelight', '30', '', 'Firelight represented Malta in 2014 with the song Coming Home', '59'),
('1343', 'Maybe (Forse)', 'Valentina Monetta', '42', '', 'Valentina Monetta represented San Marino in 2014 with the song Maybe (Forse)', '59'),
('1344', 'Round and Round', 'Tinkara Kovač', '46', '', 'Tinkara Kovač represented Slovenia in 2014 with the song Round and Round', '59'),
('1345', 'Moustache', 'TWIN TWIN', '17', '', 'TWIN TWIN represented France in 2014 with the song Moustache', '59'),
('1346', 'Quero Ser Tua', 'Suzy', '39', '', 'Suzy represented Portugal in 2014 with the song Quero Ser Tua', '59'),
('1347', 'Attention', 'Vilija Matačiūnaitė', '28', '', 'Vilija Matačiūnaitė represented Lithuania in 2014 with the song Attention', '59'),
('1348', 'Linn feat. Kasey Smith', 'Can', '23', '', 'Can represented Ireland in 2014 with the song Linn feat. Kasey Smith', '59'),
('1349', 'Amazing', 'Tanja', '15', '', 'Tanja represented Estonia in 2014 with the song Amazing', '59'),
('1350', 'To the Sky', 'Tijana', '36', '', 'Tijana represented North Macedonia in 2014 with the song To the Sky', '59'),
('1351', 'Cake To Bake', 'Aarzemnieki', '27', '', 'Aarzemnieki represented Latvia in 2014 with the song Cake To Bake', '59'),
('1352', 'Mother', 'Axel Hirsoux', '8', '', 'Axel Hirsoux represented Belgium in 2014 with the song Mother', '59'),
('1353', 'One Night''s Anger', 'Hersi', '1', '', 'Hersi represented Albania in 2014 with the song One Night''s Anger', '59'),
('1354', 'Same Heart', 'Mei Finegold', '24', '', 'Mei Finegold represented Israel in 2014 with the song Same Heart', '59'),
('1355', 'Three Minutes To Earth', 'The Shin and Mariko', '18', '', 'The Shin and Mariko represented Georgia in 2014 with the song Three Minutes To Earth', '59'),
('1356', 'Wild Soul', 'Cristina Scarlat', '31', '', 'Cristina Scarlat represented Moldova in 2014 with the song Wild Soul', '59');
        `)

    // 2015
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1357', 'Heroes', 'Måns Zelmerlöw', '48', '', 'Måns Zelmerlöw represented Sweden in 2015 with the song Heroes', '60'),
('1358', 'A Million Voices', 'Polina Gagarina', '41', '', 'Polina Gagarina represented Russia in 2015 with the song A Million Voices', '60'),
('1359', 'Grande Amore', 'Il Volo', '25', '', 'Il Volo represented Italy in 2015 with the song Grande Amore', '60'),
('1360', 'Rhythm Inside', 'Loïc Nottet', '8', '', 'Loïc Nottet represented Belgium in 2015 with the song Rhythm Inside', '60'),
('1361', 'Tonight Again', 'Guy Sebastian', '4', '', 'Guy Sebastian represented Australia in 2015 with the song Tonight Again', '60'),
('1362', 'Love Injected', 'Aminata Savadogo', '27', '', 'Aminata Savadogo represented Latvia in 2015 with the song Love Injected', '60'),
('1363', 'Goodbye to Yesterday', 'Elina Born & Stig Rästa', '15', '', 'Elina Born & Stig Rästa represented Estonia in 2015 with the song Goodbye to Yesterday', '60'),
('1364', 'A Monster Like Me', 'Mørland & Debrah Scarlett', '37', '', 'Mørland & Debrah Scarlett represented Norway in 2015 with the song A Monster Like Me', '60'),
('1365', 'Golden Boy', 'Nadav Guedj', '24', '', 'Nadav Guedj represented Israel in 2015 with the song Golden Boy', '60'),
('1366', 'Beauty Never Lies', 'Bojana Stamenov', '43', '', 'Bojana Stamenov represented Serbia in 2015 with the song Beauty Never Lies', '60'),
('1367', 'Warrior', 'Nina Sublatti', '18', '', 'Nina Sublatti represented Georgia in 2015 with the song Warrior', '60'),
('1368', 'Hour Of The Wolf', 'Elnur Hüseynov', '6', '', 'Elnur Hüseynov represented Azerbaijan in 2015 with the song Hour Of The Wolf', '60'),
('1369', 'Adio', 'Knez', '33', '', 'Knez represented Montenegro in 2015 with the song Adio', '60'),
('1370', 'Here for You', 'Maraaya', '46', '', 'Maraaya represented Slovenia in 2015 with the song Here for You', '60'),
('1371', 'De La Capăt / All Over Again', 'Voltaj', '40', '', 'Voltaj represented Romania in 2015 with the song De La Capăt / All Over Again', '60'),
('1372', 'Face The Shadow', 'Genealogy', '3', '', 'Genealogy represented Armenia in 2015 with the song Face The Shadow', '60'),
('1373', 'I''m Alive', 'Elhaida Dani', '1', '', 'Elhaida Dani represented Albania in 2015 with the song I''m Alive', '60'),
('1374', 'This Time', 'Monika & Vaidas', '28', '', 'Monika & Vaidas represented Lithuania in 2015 with the song This Time', '60'),
('1375', 'One Last Breath', 'Maria Elena Kyriakou', '20', '', 'Maria Elena Kyriakou represented Greece in 2015 with the song One Last Breath', '60'),
('1376', 'Wars For Nothing', 'Boggie', '21', '', 'Boggie represented Hungary in 2015 with the song Wars For Nothing', '60'),
('1377', 'Amanecer', 'Edurne', '47', './src/assets/es-2015.jpg', 'Edurne represented Spain in 2015 with the song Amanecer', '60'),
('1378', 'One Thing I Should Have Done', 'John Karayiannis', '12', '', 'John Karayiannis represented Cyprus in 2015 with the song One Thing I Should Have Done', '60'),
('1379', 'In The Name Of Love', 'Monika Kuszyńska', '38', '', 'Monika Kuszyńska represented Poland in 2015 with the song In The Name Of Love', '60'),
('1380', 'Still in Love with You', 'Electro Velvet', '52', '', 'Electro Velvet represented United Kingdom in 2015 with the song Still in Love with You', '60'),
('1381', 'N’oubliez pas', 'Lisa Angell', '17', '', 'Lisa Angell represented France in 2015 with the song N’oubliez pas', '60'),
('1382', 'I Am Yours', 'The Makemakes', '5', '', 'The Makemakes represented Austria in 2015 with the song I Am Yours', '60'),
('1383', 'Black Smoke', 'Ann Sophie', '19', '', 'Ann Sophie represented Germany in 2015 with the song Black Smoke', '60'),
('1384', 'I Want Your Love', 'Eduard Romanyuta', '31', '', 'Eduard Romanyuta represented Moldova in 2015 with the song I Want Your Love', '60'),
('1385', 'Warrior', 'Amber', '30', '', 'Amber represented Malta in 2015 with the song Warrior', '60'),
('1386', 'Time', 'Uzari & Maimuna', '7', '', 'Uzari & Maimuna represented Belarus in 2015 with the song Time', '60'),
('1387', 'Playing With Numbers', 'Molly Sterling', '23', '', 'Molly Sterling represented Ireland in 2015 with the song Playing With Numbers', '60'),
('1388', 'The Way You Are', 'Anti Social Media', '14', '', 'Anti Social Media represented Denmark in 2015 with the song The Way You Are', '60'),
('1389', 'Walk Along', 'Trijntje Oosterhuis', '35', '', 'Trijntje Oosterhuis represented Netherlands in 2015 with the song Walk Along', '60'),
('1390', 'Hope Never Dies', 'Marta Jandová & Václav Noid Bárta', '13', '', 'Marta Jandová & Václav Noid Bárta represented Czechia in 2015 with the song Hope Never Dies', '60'),
('1391', 'Autumn Leaves', 'Daniel Kajmakoski', '36', '', 'Daniel Kajmakoski represented North Macedonia in 2015 with the song Autumn Leaves', '60'),
('1392', 'Há um mar que nos Separa', 'Leonor Andrade', '39', '', 'Leonor Andrade represented Portugal in 2015 with the song Há um mar que nos Separa', '60'),
('1393', 'Unbroken', 'María Ólafsdóttir', '22', '', 'María Ólafsdóttir represented Iceland in 2015 with the song Unbroken', '60'),
('1394', 'Aina Mun Pitää', 'Pertti Kurikan Nimipäivät', '16', '', 'Pertti Kurikan Nimipäivät represented Finland in 2015 with the song Aina Mun Pitää', '60'),
('1395', 'Chain Of Lights', 'Michele Perniola & Anita Simoncini', '42', '', 'Michele Perniola & Anita Simoncini represented San Marino in 2015 with the song Chain Of Lights', '60'),
('1396', 'Time To Shine', 'Mélanie René', '49', '', 'Mélanie René represented Switzerland in 2015 with the song Time To Shine', '60');
        `)

    // 2016
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1397', '1944', 'Jamala', '51', '', 'Jamala represented Ukraine in 2016 with the song 1944', '61'),
('1398', 'Sound of Silence', 'Dami Im', '4', '', 'Dami Im represented Australia in 2016 with the song Sound of Silence', '61'),
('1399', 'You Are the Only One', 'Sergey Lazarev', '41', '', 'Sergey Lazarev represented Russia in 2016 with the song You Are the Only One', '61'),
('1400', 'If Love Was a Crime', 'Poli Genova', '10', '', 'Poli Genova represented Bulgaria in 2016 with the song If Love Was a Crime', '61'),
('1401', 'If I Were Sorry', 'Frans', '48', '', 'Frans represented Sweden in 2016 with the song If I Were Sorry', '61'),
('1402', 'J''ai Cherché', 'Amir', '17', '', 'Amir represented France in 2016 with the song J''ai Cherché', '61'),
('1403', 'LoveWave', 'Iveta Mukuchyan', '3', '', 'Iveta Mukuchyan represented Armenia in 2016 with the song LoveWave', '61'),
('1404', 'Color of Your Life', 'Michał Szpak', '38', '', 'Michał Szpak represented Poland in 2016 with the song Color of Your Life', '61'),
('1405', 'I''ve Been Waiting for This Night', 'Donny Montell', '28', '', 'Donny Montell represented Lithuania in 2016 with the song I''ve Been Waiting for This Night', '61'),
('1406', 'What''s the Pressure', 'Laura Tesoro', '8', '', 'Laura Tesoro represented Belgium in 2016 with the song What''s the Pressure', '61'),
('1407', 'Slow Down', 'Douwe Bob', '35', '', 'Douwe Bob represented Netherlands in 2016 with the song Slow Down', '61'),
('1408', 'Walk on Water', 'Ira Losco', '30', '', 'Ira Losco represented Malta in 2016 with the song Walk on Water', '61'),
('1409', 'Loin d''ici', 'Zoë', '5', '', 'Zoë represented Austria in 2016 with the song Loin d''ici', '61'),
('1410', 'Made of Stars', 'Hovi Star', '24', '', 'Hovi Star represented Israel in 2016 with the song Made of Stars', '61'),
('1411', 'Heartbeat', 'Justs', '27', '', 'Justs represented Latvia in 2016 with the song Heartbeat', '61'),
('1412', 'No Degree of Separation', 'Francesca Michielin', '25', '', 'Francesca Michielin represented Italy in 2016 with the song No Degree of Separation', '61'),
('1413', 'Miracle', 'Samra', '6', '', 'Samra represented Azerbaijan in 2016 with the song Miracle', '61'),
('1414', 'Goodbye (Shelter)', 'Sanja Vučić ZAA', '43', '', 'Sanja Vučić ZAA represented Serbia in 2016 with the song Goodbye (Shelter)', '61'),
('1415', 'Pioneer', 'Freddie', '21', '', 'Freddie represented Hungary in 2016 with the song Pioneer', '61'),
('1416', 'Midnight Gold', 'Nika Kocharov & Young Georgian Lolitaz', '18', '', 'Nika Kocharov & Young Georgian Lolitaz represented Georgia in 2016 with the song Midnight Gold', '61'),
('1417', 'Alter Ego', 'Minus One', '12', '', 'Minus One represented Cyprus in 2016 with the song Alter Ego', '61'),
('1418', 'Say Yay!', 'Barei', '47', './src/assets/es-2016.jpg', 'Barei represented Spain in 2016 with the song Say Yay!', '61'),
('1419', 'Lighthouse', 'Nina Kraljić', '11', '', 'Nina Kraljić represented Croatia in 2016 with the song Lighthouse', '61'),
('1420', 'You''re Not Alone', 'Joe & Jake', '52', '', 'Joe & Jake represented United Kingdom in 2016 with the song You''re Not Alone', '61'),
('1421', 'I Stand', 'Gabriela Gunčíková', '13', '', 'Gabriela Gunčíková represented Czechia in 2016 with the song I Stand', '61'),
('1422', 'Lee Kriewitz', 'Jamie', '19', '', 'Jamie represented Germany in 2016 with the song Lee Kriewitz', '61'),
('1423', 'Ljubav Je', 'Dalal & Deen feat. Ana Rucner & Jala', '9', '', 'Dalal & Deen feat. Ana Rucner & Jala represented Bosnia and Herzegovina in 2016 with the song Ljubav Je', '61'),
('1424', 'Dona', 'Kaliopi', '36', '', 'Kaliopi represented North Macedonia in 2016 with the song Dona', '61'),
('1425', 'Help You Fly', 'Ivan', '7', '', 'Ivan represented Belarus in 2016 with the song Help You Fly', '61'),
('1426', 'I Didn''t Know', 'Serhat', '42', '', 'Serhat represented San Marino in 2016 with the song I Didn''t Know', '61'),
('1427', 'Icebreaker', 'Agnete', '37', '', 'Agnete represented Norway in 2016 with the song Icebreaker', '61'),
('1428', 'The Real Thing', 'Highway', '33', '', 'Highway represented Montenegro in 2016 with the song The Real Thing', '61'),
('1429', 'Blue and Red', 'ManuElla', '46', '', 'ManuElla represented Slovenia in 2016 with the song Blue and Red', '61'),
('1430', 'Hear Them Calling', 'Greta Salóme', '22', '', 'Greta Salóme represented Iceland in 2016 with the song Hear Them Calling', '61'),
('1431', 'Sing It Away', 'Sandhja', '16', '', 'Sandhja represented Finland in 2016 with the song Sing It Away', '61'),
('1432', 'Sunlight', 'Nicky Byrne', '23', '', 'Nicky Byrne represented Ireland in 2016 with the song Sunlight', '61'),
('1433', 'Fairytale', 'Eneda Tarifa', '1', '', 'Eneda Tarifa represented Albania in 2016 with the song Fairytale', '61'),
('1434', 'Utopian Land', 'Argo', '20', '', 'Argo represented Greece in 2016 with the song Utopian Land', '61'),
('1435', 'Soldiers of Love', 'Lighthouse X', '14', '', 'Lighthouse X represented Denmark in 2016 with the song Soldiers of Love', '61'),
('1436', 'Falling Stars', 'Lidia Isac', '31', '', 'Lidia Isac represented Moldova in 2016 with the song Falling Stars', '61'),
('1437', 'The Last of Our Kind', 'Rykka', '49', '', 'Rykka represented Switzerland in 2016 with the song The Last of Our Kind', '61'),
('1438', 'Play', 'Jüri Pootsmann', '15', '', 'Jüri Pootsmann represented Estonia in 2016 with the song Play', '61');
        `)

    // 2017
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1439', 'Amar Pelos Dois', 'Salvador Sobral', '39', '', 'Salvador Sobral represented Portugal in 2017 with the song Amar Pelos Dois', '62'),
('1440', 'Beautiful Mess', 'Kristian Kostov', '10', '', 'Kristian Kostov represented Bulgaria in 2017 with the song Beautiful Mess', '62'),
('1441', 'Hey Mamma', 'Sunstroke Project', '31', '', 'Sunstroke Project represented Moldova in 2017 with the song Hey Mamma', '62'),
('1442', 'City Lights', 'Blanche', '8', '', 'Blanche represented Belgium in 2017 with the song City Lights', '62'),
('1443', 'I Can''t Go On', 'Robin Bengtsson', '48', '', 'Robin Bengtsson represented Sweden in 2017 with the song I Can''t Go On', '62'),
('1444', 'Occidentali''s Karma', 'Francesco Gabbani', '25', '', 'Francesco Gabbani represented Italy in 2017 with the song Occidentali''s Karma', '62'),
('1445', 'Yodel It!', 'Ilinca feat. Alex Florea', '40', '', 'Ilinca feat. Alex Florea represented Romania in 2017 with the song Yodel It!', '62'),
('1446', 'Origo', 'Joci Pápai', '21', '', 'Joci Pápai represented Hungary in 2017 with the song Origo', '62'),
('1447', 'Don''t Come Easy', 'Isaiah', '4', '', 'Isaiah represented Australia in 2017 with the song Don''t Come Easy', '62'),
('1448', 'Grab the Moment', 'Jowst', '37', '', 'Jowst represented Norway in 2017 with the song Grab the Moment', '62'),
('1449', 'Lights And Shadows', 'OG3NE', '35', '', 'OG3NE represented Netherlands in 2017 with the song Lights And Shadows', '62'),
('1450', 'Requiem', 'Alma', '17', '', 'Alma represented France in 2017 with the song Requiem', '62'),
('1451', 'My Friend', 'Jacques Houdek', '11', '', 'Jacques Houdek represented Croatia in 2017 with the song My Friend', '62'),
('1452', 'Skeletons', 'Dihaj', '6', '', 'Dihaj represented Azerbaijan in 2017 with the song Skeletons', '62'),
('1453', 'Never Give Up on You', 'Lucie Jones', '52', '', 'Lucie Jones represented United Kingdom in 2017 with the song Never Give Up on You', '62'),
('1454', 'Running On Air', 'Nathan Trent', '5', '', 'Nathan Trent represented Austria in 2017 with the song Running On Air', '62'),
('1455', 'Historyja majho žyccia', 'Naviband', '7', '', 'Naviband represented Belarus in 2017 with the song Historyja majho žyccia', '62'),
('1456', 'Fly With Me', 'Artsvik', '3', '', 'Artsvik represented Armenia in 2017 with the song Fly With Me', '62'),
('1457', 'This is Love', 'Demy', '20', '', 'Demy represented Greece in 2017 with the song This is Love', '62'),
('1458', 'Where I Am', 'Anja', '14', '', 'Anja represented Denmark in 2017 with the song Where I Am', '62'),
('1459', 'Gravity', 'Hovig', '12', '', 'Hovig represented Cyprus in 2017 with the song Gravity', '62'),
('1460', 'Flashlight', 'Kasia Moś', '38', '', 'Kasia Moś represented Poland in 2017 with the song Flashlight', '62'),
('1461', 'I Feel Alive', 'Imri Ziv', '24', '', 'Imri Ziv represented Israel in 2017 with the song I Feel Alive', '62'),
('1462', 'Time', 'O.Torvald', '51', '', 'O.Torvald represented Ukraine in 2017 with the song Time', '62'),
('1463', 'Perfect Life', 'Levina', '19', '', 'Levina represented Germany in 2017 with the song Perfect Life', '62'),
('1464', 'Do It for Your Lover', 'Manel Navarro', '47', './src/assets/es-2017.jpeg', 'Manel Navarro represented Spain in 2017 with the song Do It for Your Lover', '62'),
('1465', 'Keep The Faith', 'Tamara Gachechiladze', '18', '', 'Tamara Gachechiladze represented Georgia in 2017 with the song Keep The Faith', '62'),
('1466', 'In Too Deep', 'Tijana Bogićević', '43', '', 'Tijana Bogićević represented Serbia in 2017 with the song In Too Deep', '62'),
('1467', 'Apollo', 'Timebelle', '49', '', 'Timebelle represented Switzerland in 2017 with the song Apollo', '62'),
('1468', 'Blackbird', 'Norma John', '16', '', 'Norma John represented Finland in 2017 with the song Blackbird', '62'),
('1469', 'Dying To Try', 'Brendan Murray', '23', '', 'Brendan Murray represented Ireland in 2017 with the song Dying To Try', '62'),
('1470', 'Verona', 'Koit Toome & Laura', '15', '', 'Koit Toome & Laura represented Estonia in 2017 with the song Verona', '62'),
('1471', 'My Turn', 'Martina Bárta', '13', '', 'Martina Bárta represented Czechia in 2017 with the song My Turn', '62'),
('1472', 'World', 'Lindita', '1', '', 'Lindita represented Albania in 2017 with the song World', '62'),
('1473', 'Dance Alone', 'Jana Burčeska', '36', '', 'Jana Burčeska represented North Macedonia in 2017 with the song Dance Alone', '62'),
('1474', 'Paper', 'Svala', '22', '', 'Svala represented Iceland in 2017 with the song Paper', '62'),
('1475', 'Space', 'Slavko Kalezić', '33', '', 'Slavko Kalezić represented Montenegro in 2017 with the song Space', '62'),
('1476', 'Breathlessly', 'Claudia Faniello', '30', '', 'Claudia Faniello represented Malta in 2017 with the song Breathlessly', '62'),
('1477', 'Rain Of Revolution', 'Fusedmarc', '28', '', 'Fusedmarc represented Lithuania in 2017 with the song Rain Of Revolution', '62'),
('1478', 'On My Way', 'Omar Naber', '46', '', 'Omar Naber represented Slovenia in 2017 with the song On My Way', '62'),
('1479', 'Line', 'Triana Park', '27', '', 'Triana Park represented Latvia in 2017 with the song Line', '62'),
('1480', 'Spirit Of The Night', 'Valentina Monetta & Jimmie Wilson', '42', '', 'Valentina Monetta & Jimmie Wilson represented San Marino in 2017 with the song Spirit Of The Night', '62');
        `)

    // 2018
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1481', 'Toy', 'Netta', '24', '', 'Netta represented Israel in 2018 with the song Toy', '63'),
('1482', 'Fuego', 'Eleni Foureira', '12', '', 'Eleni Foureira represented Cyprus in 2018 with the song Fuego', '63'),
('1483', 'Nobody But You', 'Cesár Sampson', '5', '', 'Cesár Sampson represented Austria in 2018 with the song Nobody But You', '63'),
('1484', 'You Let Me Walk Alone', 'Michael Schulte', '19', '', 'Michael Schulte represented Germany in 2018 with the song You Let Me Walk Alone', '63'),
('1485', 'Non Mi Avete Fatto Niente', 'Ermal Meta & Fabrizio Moro', '25', '', 'Ermal Meta & Fabrizio Moro represented Italy in 2018 with the song Non Mi Avete Fatto Niente', '63'),
('1486', 'Lie To Me', 'Mikolas Josef', '13', '', 'Mikolas Josef represented Czechia in 2018 with the song Lie To Me', '63'),
('1487', 'Dance You Off', 'Benjamin Ingrosso', '48', '', 'Benjamin Ingrosso represented Sweden in 2018 with the song Dance You Off', '63'),
('1488', 'La Forza', 'Elina Nechayeva', '15', '', 'Elina Nechayeva represented Estonia in 2018 with the song La Forza', '63'),
('1489', 'Higher Ground', 'Rasmussen', '14', '', 'Rasmussen represented Denmark in 2018 with the song Higher Ground', '63'),
('1490', 'My Lucky Day', 'DoReDos', '31', '', 'DoReDos represented Moldova in 2018 with the song My Lucky Day', '63'),
('1491', 'Mall', 'Eugent Bushpepa', '1', '', 'Eugent Bushpepa represented Albania in 2018 with the song Mall', '63'),
('1492', 'When We''re Old', 'Ieva Zasimauskaitė', '28', '', 'Ieva Zasimauskaitė represented Lithuania in 2018 with the song When We''re Old', '63'),
('1493', 'Mercy', 'Madame Monsieur', '17', '', 'Madame Monsieur represented France in 2018 with the song Mercy', '63'),
('1494', 'Bones', 'Equinox', '10', '', 'Equinox represented Bulgaria in 2018 with the song Bones', '63'),
('1495', 'That''s How You Write a Song', 'Alexander Rybak', '37', '', 'Alexander Rybak represented Norway in 2018 with the song That''s How You Write a Song', '63'),
('1496', 'Together', 'Ryan O''Shaughnessy', '23', '', 'Ryan O''Shaughnessy represented Ireland in 2018 with the song Together', '63'),
('1497', 'Under the Ladder', 'Mélovin', '51', '', 'Mélovin represented Ukraine in 2018 with the song Under the Ladder', '63'),
('1498', 'Outlaw In ''Em', 'Waylon', '35', '', 'Waylon represented Netherlands in 2018 with the song Outlaw In ''Em', '63'),
('1499', 'Nova Deca', 'Sanja Ilić & Balkanika', '43', '', 'Sanja Ilić & Balkanika represented Serbia in 2018 with the song Nova Deca', '63'),
('1500', 'We Got Love', 'Jessica Mauboy', '4', '', 'Jessica Mauboy represented Australia in 2018 with the song We Got Love', '63'),
('1501', 'Viszlát Nyár', 'AWS', '21', '', 'AWS represented Hungary in 2018 with the song Viszlát Nyár', '63'),
('1502', 'Hvala, ne!', 'Lea Sirk', '46', '', 'Lea Sirk represented Slovenia in 2018 with the song Hvala, ne!', '63'),
('1503', 'Tu Canción', 'Amaia & Alfred', '47', './src/assets/es-2018.jpg', 'Amaia & Alfred represented Spain in 2018 with the song Tu Canción', '63'),
('1504', 'Storm', 'SuRie', '52', '', 'SuRie represented United Kingdom in 2018 with the song Storm', '63'),
('1505', 'Monsters', 'Saara Aalto', '16', '', 'Saara Aalto represented Finland in 2018 with the song Monsters', '63'),
('1506', 'O Jardim', 'Cláudia Pascoal', '39', '', 'Cláudia Pascoal represented Portugal in 2018 with the song O Jardim', '63'),
('1507', 'Goodbye', 'The Humans', '40', '', 'The Humans represented Romania in 2018 with the song Goodbye', '63'),
('1508', 'Funny Girl', 'Laura Rizzotto', '27', '', 'Laura Rizzotto represented Latvia in 2018 with the song Funny Girl', '63'),
('1509', 'Taboo', 'Christabelle', '30', '', 'Christabelle represented Malta in 2018 with the song Taboo', '63'),
('1510', 'X My Heart', 'Aisel', '6', '', 'Aisel represented Azerbaijan in 2018 with the song X My Heart', '63'),
('1511', 'A Matter of Time', 'Sennek', '8', '', 'Sennek represented Belgium in 2018 with the song A Matter of Time', '63'),
('1512', 'Stones', 'Zibbz', '49', '', 'Zibbz represented Switzerland in 2018 with the song Stones', '63'),
('1513', 'Light Me Up', 'Gromee feat. Lukas Meijer', '38', '', 'Gromee feat. Lukas Meijer represented Poland in 2018 with the song Light Me Up', '63'),
('1514', 'Oniro Mou', 'Yianna Terzi', '20', '', 'Yianna Terzi represented Greece in 2018 with the song Oniro Mou', '63'),
('1515', 'Qami', 'Sevak Khanagyan', '3', '', 'Sevak Khanagyan represented Armenia in 2018 with the song Qami', '63'),
('1516', 'I Won''t Break', 'Julia Samoylova', '41', '', 'Julia Samoylova represented Russia in 2018 with the song I Won''t Break', '63'),
('1517', 'Forever', 'Alekseev', '7', '', 'Alekseev represented Belarus in 2018 with the song Forever', '63'),
('1518', 'Crazy', 'Franka', '11', '', 'Franka represented Croatia in 2018 with the song Crazy', '63'),
('1519', 'Inje', 'Vanja Radovanović', '33', '', 'Vanja Radovanović represented Montenegro in 2018 with the song Inje', '63'),
('1520', 'Who We Are', 'Jessika feat. Jenifer Brening', '42', '', 'Jessika feat. Jenifer Brening represented San Marino in 2018 with the song Who We Are', '63'),
('1521', 'Jazz Band Iriao', 'Ethno', '18', '', 'Ethno represented Georgia in 2018 with the song Jazz Band Iriao', '63'),
('1522', 'Lost And Found', 'Eye Cue', '36', '', 'Eye Cue represented North Macedonia in 2018 with the song Lost And Found', '63'),
('1523', 'Our Choice', 'Ari Ólafsson', '22', '', 'Ari Ólafsson represented Iceland in 2018 with the song Our Choice', '63');
        `)

    // 2019
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1524', 'Arcade', 'Duncan Laurence', '35', '', 'Duncan Laurence represented Netherlands in 2019 with the song Arcade', '64'),
('1525', 'Soldi', 'Mahmood', '25', '', 'Mahmood represented Italy in 2019 with the song Soldi', '64'),
('1526', 'Scream', 'Sergey Lazarev', '41', '', 'Sergey Lazarev represented Russia in 2019 with the song Scream', '64'),
('1527', 'She Got Me', 'Luca Hänni', '49', '', 'Luca Hänni represented Switzerland in 2019 with the song She Got Me', '64'),
('1528', 'Too Late for Love', 'John Lundvik', '48', '', 'John Lundvik represented Sweden in 2019 with the song Too Late for Love', '64'),
('1529', 'Spirit in the Sky', 'KEiiNO', '37', '', 'KEiiNO represented Norway in 2019 with the song Spirit in the Sky', '64'),
('1530', 'Proud', 'Tamara Todevska', '36', '', 'Tamara Todevska represented North Macedonia in 2019 with the song Proud', '64'),
('1531', 'Truth', 'Chingiz', '6', '', 'Chingiz represented Azerbaijan in 2019 with the song Truth', '64'),
('1532', 'Heidke', 'Kate Miller', '4', '', 'Kate Miller represented Australia in 2019 with the song Heidke', '64'),
('1533', 'Hatrið mun sigra', 'Hatari', '22', '', 'Hatari represented Iceland in 2019 with the song Hatrið mun sigra', '64'),
('1534', 'Friend of a Friend', 'Lake Malawi', '13', '', 'Lake Malawi represented Czechia in 2019 with the song Friend of a Friend', '64'),
('1535', 'Love is Forever', 'Leonora', '14', '', 'Leonora represented Denmark in 2019 with the song Love is Forever', '64'),
('1536', 'Replay', 'Tamta', '12', '', 'Tamta represented Cyprus in 2019 with the song Replay', '64'),
('1537', 'Chameleon', 'Michela', '30', '', 'Michela represented Malta in 2019 with the song Chameleon', '64'),
('1538', 'Sebi', 'Zala Kralj & Gašper Šantl', '46', '', 'Zala Kralj & Gašper Šantl represented Slovenia in 2019 with the song Sebi', '64'),
('1539', 'Roi', 'Bilal Hassani', '17', '', 'Bilal Hassani represented France in 2019 with the song Roi', '64'),
('1540', 'Ktheju Tokës', 'Jonida Maliqi', '1', '', 'Jonida Maliqi represented Albania in 2019 with the song Ktheju Tokës', '64'),
('1541', 'Kruna', 'Nevena Božović', '43', '', 'Nevena Božović represented Serbia in 2019 with the song Kruna', '64'),
('1542', 'Say Na Na Na', 'Serhat', '42', '', 'Serhat represented San Marino in 2019 with the song Say Na Na Na', '64'),
('1543', 'Storm', 'Victor Crone', '15', '', 'Victor Crone represented Estonia in 2019 with the song Storm', '64'),
('1544', 'Better Love', 'Katerine Duska', '20', '', 'Katerine Duska represented Greece in 2019 with the song Better Love', '64'),
('1545', 'La Venda', 'Miki', '47', './src/assets/es-2019.jpg', 'Miki represented Spain in 2019 with the song La Venda', '64'),
('1546', 'Home', 'Kobi Marimi', '24', '', 'Kobi Marimi represented Israel in 2019 with the song Home', '64'),
('1547', 'Like It', 'Zena', '7', '', 'Zena represented Belarus in 2019 with the song Like It', '64'),
('1548', 'Sister', 'S!sters', '19', '', 'S!sters represented Germany in 2019 with the song Sister', '64'),
('1549', 'Bigger Than Us', 'Michael Rice', '52', '', 'Michael Rice represented United Kingdom in 2019 with the song Bigger Than Us', '64'),
('1550', 'Pali się', 'Tulia', '38', '', 'Tulia represented Poland in 2019 with the song Pali się', '64'),
('1551', 'Az én apám', 'Joci Pápai', '21', '', 'Joci Pápai represented Hungary in 2019 with the song Az én apám', '64'),
('1552', 'Run with the Lions', 'Jurij Veklenko', '28', '', 'Jurij Veklenko represented Lithuania in 2019 with the song Run with the Lions', '64'),
('1553', 'Stay', 'Anna Odobescu', '31', '', 'Anna Odobescu represented Moldova in 2019 with the song Stay', '64'),
('1554', 'Wake Up', 'Eliot', '8', '', 'Eliot represented Belgium in 2019 with the song Wake Up', '64'),
('1555', 'On a Sunday', 'Ester Peony', '40', '', 'Ester Peony represented Romania in 2019 with the song On a Sunday', '64'),
('1556', 'Keep on Going', 'Oto Nemsadze', '18', '', 'Oto Nemsadze represented Georgia in 2019 with the song Keep on Going', '64'),
('1557', 'The Dream', 'Roko', '11', '', 'Roko represented Croatia in 2019 with the song The Dream', '64'),
('1558', 'Telemóveis', 'Conan Osíris', '39', '', 'Conan Osíris represented Portugal in 2019 with the song Telemóveis', '64'),
('1559', 'That Night', 'Carousel', '27', '', 'Carousel represented Latvia in 2019 with the song That Night', '64'),
('1560', 'Walking Out', 'Srbuk', '3', '', 'Srbuk represented Armenia in 2019 with the song Walking Out', '64'),
('1561', 'Heaven', 'D mol', '33', '', 'D mol represented Montenegro in 2019 with the song Heaven', '64'),
('1562', 'Look Away', 'Darude feat. Sebastian Rejman', '16', '', 'Darude feat. Sebastian Rejman represented Finland in 2019 with the song Look Away', '64'),
('1563', 'Limits', 'Pænda', '5', '', 'Pænda represented Austria in 2019 with the song Limits', '64'),
('1564', '22', 'Sarah McTernan', '23', '', 'Sarah McTernan represented Ireland in 2019 with the song 22', '64');
        `)

    // 2020
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1565', 'Fall From The Sky', 'Arilena Ara', '1', '', 'Arilena Ara represented Albania in 2020 with the song Fall From The Sky', '65'),
('1566', 'Chains On You', 'Athena Manoukian', '3', '', 'Athena Manoukian represented Armenia in 2020 with the song Chains On You', '65'),
('1567', 'Don''t Break Me', 'Montaigne', '4', '', 'Montaigne represented Australia in 2020 with the song Don''t Break Me', '65'),
('1568', 'Alive', 'Vincent Bueno', '5', '', 'Vincent Bueno represented Austria in 2020 with the song Alive', '65'),
('1569', 'Cleopatra', 'Efendi', '6', '', 'Efendi represented Azerbaijan in 2020 with the song Cleopatra', '65'),
('1570', 'Da vidna', 'VAL', '7', '', 'VAL represented Belarus in 2020 with the song Da vidna', '65'),
('1571', 'Release Me', 'Hooverphonic', '8', '', 'Hooverphonic represented Belgium in 2020 with the song Release Me', '65'),
('1572', 'Tears Getting Sober', 'Victoria', '10', '', 'Victoria represented Bulgaria in 2020 with the song Tears Getting Sober', '65'),
('1573', 'Divlji vjetre', 'Damir Kedžo', '11', '', 'Damir Kedžo represented Croatia in 2020 with the song Divlji vjetre', '65'),
('1574', 'Running', 'Sandro', '12', '', 'Sandro represented Cyprus in 2020 with the song Running', '65'),
('1575', 'Kemama', 'Benny Cristo', '13', '', 'Benny Cristo represented Czechia in 2020 with the song Kemama', '65'),
('1576', 'Yes', 'Ben & Tan', '14', '', 'Ben & Tan represented Denmark in 2020 with the song Yes', '65'),
('1577', 'What Love Is', 'Uku Suviste', '15', '', 'Uku Suviste represented Estonia in 2020 with the song What Love Is', '65'),
('1578', 'Looking Back', 'Aksel', '16', '', 'Aksel represented Finland in 2020 with the song Looking Back', '65'),
('1579', 'The Best in Me', 'Tom Leeb', '17', '', 'Tom Leeb represented France in 2020 with the song The Best in Me', '65'),
('1580', 'Take Me As I Am', 'Tornike Kipiani', '18', '', 'Tornike Kipiani represented Georgia in 2020 with the song Take Me As I Am', '65'),
('1581', 'Violent Thing', 'Ben Dolic', '19', '', 'Ben Dolic represented Germany in 2020 with the song Violent Thing', '65'),
('1582', 'Superg!rl​', 'Stefania', '20', '', 'Stefania represented Greece in 2020 with the song Superg!rl​', '65'),
('1583', 'Think About Things', 'Daði & Gagnamagnið', '22', '', 'Daði & Gagnamagnið represented Iceland in 2020 with the song Think About Things', '65'),
('1584', 'Story Of My Life', 'Lesley Roy', '23', '', 'Lesley Roy represented Ireland in 2020 with the song Story Of My Life', '65'),
('1585', 'Feker Libi', 'Eden Alene', '24', '', 'Eden Alene represented Israel in 2020 with the song Feker Libi', '65'),
('1586', 'Fai rumore', 'Diodato', '25', '', 'Diodato represented Italy in 2020 with the song Fai rumore', '65'),
('1587', 'Still Breathing', 'Samanta Tīna', '27', '', 'Samanta Tīna represented Latvia in 2020 with the song Still Breathing', '65'),
('1588', 'On Fire', 'The Roop', '28', '', 'The Roop represented Lithuania in 2020 with the song On Fire', '65'),
('1589', 'All Of My Love', 'Destiny', '30', '', 'Destiny represented Malta in 2020 with the song All Of My Love', '65'),
('1590', 'Prison', 'Natalia Gordienko', '31', '', 'Natalia Gordienko represented Moldova in 2020 with the song Prison', '65'),
('1591', 'Grow', 'Jeangu Macrooy', '35', '', 'Jeangu Macrooy represented Netherlands in 2020 with the song Grow', '65'),
('1592', 'You', 'Vasil', '36', '', 'Vasil represented North Macedonia in 2020 with the song You', '65'),
('1593', 'Attention', 'Ulrikke', '37', '', 'Ulrikke represented Norway in 2020 with the song Attention', '65'),
('1594', 'Empires', 'Alicja', '38', '', 'Alicja represented Poland in 2020 with the song Empires', '65'),
('1595', 'Medo de sentir', 'Elisa', '39', '', 'Elisa represented Portugal in 2020 with the song Medo de sentir', '65'),
('1596', 'Alcohol You', 'Roxen', '40', '', 'Roxen represented Romania in 2020 with the song Alcohol You', '65'),
('1597', 'Uno', 'Little Big', '41', '', 'Little Big represented Russia in 2020 with the song Uno', '65'),
('1598', 'Freaky!', 'Senhit', '42', '', 'Senhit represented San Marino in 2020 with the song Freaky!', '65'),
('1599', 'Hasta La Vista', 'Hurricane', '43', '', 'Hurricane represented Serbia in 2020 with the song Hasta La Vista', '65'),
('1600', 'Voda', 'Ana Soklič', '46', '', 'Ana Soklič represented Slovenia in 2020 with the song Voda', '65'),
('1601', 'Universo', 'Blas Cantó', '47', './src/assets/es-2020.jpg', 'Blas Cantó represented Spain in 2020 with the song Universo', '65'),
('1602', 'Move', 'The Mamas', '48', '', 'The Mamas represented Sweden in 2020 with the song Move', '65'),
('1603', 'Répondez', 'Gjon''s Tears', '49', '', 'Gjon''s Tears represented Switzerland in 2020 with the song Répondez', '65'),
('1604', 'Solovey', 'Go_A', '51', '', 'Go_A represented Ukraine in 2020 with the song Solovey', '65'),
('1605', 'My Last Breath', 'James Newman', '52', '', 'James Newman represented United Kingdom in 2020 with the song My Last Breath', '65');
        `)

    // 2021
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1606', 'Zitti e buoni', 'Måneskin', '25', '', 'Måneskin represented Italy in 2021 with the song Zitti e buoni', '66'),
('1607', 'Voilà', 'Barbara Pravi', '17', '', 'Barbara Pravi represented France in 2021 with the song Voilà', '66'),
('1608', 'Tout l''univers', 'Gjon''s Tears', '49', '', 'Gjon''s Tears represented Switzerland in 2021 with the song Tout l''univers', '66'),
('1609', '10 Years', 'Daði & Gagnamagnið', '22', '', 'Daði & Gagnamagnið represented Iceland in 2021 with the song 10 Years', '66'),
('1610', 'Shum', 'Go_A', '51', '', 'Go_A represented Ukraine in 2021 with the song Shum', '66'),
('1611', 'Dark Side', 'Blind Channel', '16', '', 'Blind Channel represented Finland in 2021 with the song Dark Side', '66'),
('1612', 'Je Me Casse', 'Destiny', '30', '', 'Destiny represented Malta in 2021 with the song Je Me Casse', '66'),
('1613', 'Discoteque', 'The Roop', '28', '', 'The Roop represented Lithuania in 2021 with the song Discoteque', '66'),
('1614', 'Russian Woman', 'Manizha', '41', '', 'Manizha represented Russia in 2021 with the song Russian Woman', '66'),
('1615', 'Last Dance', 'Stefania', '20', '', 'Stefania represented Greece in 2021 with the song Last Dance', '66'),
('1616', 'Growing Up Is Getting Old', 'Victoria', '10', '', 'Victoria represented Bulgaria in 2021 with the song Growing Up Is Getting Old', '66'),
('1617', 'Love Is On My Side', 'The Black Mamba', '39', '', 'The Black Mamba represented Portugal in 2021 with the song Love Is On My Side', '66'),
('1618', 'Sugar', 'Natalia Gordienko', '31', '', 'Natalia Gordienko represented Moldova in 2021 with the song Sugar', '66'),
('1619', 'Voices', 'Tusse', '48', '', 'Tusse represented Sweden in 2021 with the song Voices', '66'),
('1620', 'Loco Loco', 'Hurricane', '43', '', 'Hurricane represented Serbia in 2021 with the song Loco Loco', '66'),
('1621', 'El Diablo', 'Elena Tsagrinou', '12', '', 'Elena Tsagrinou represented Cyprus in 2021 with the song El Diablo', '66'),
('1622', 'Set Me Free', 'Eden Alene', '24', '', 'Eden Alene represented Israel in 2021 with the song Set Me Free', '66'),
('1623', 'Fallen Angel', 'TIX', '37', '', 'TIX represented Norway in 2021 with the song Fallen Angel', '66'),
('1624', 'The Wrong Place', 'Hooverphonic', '8', '', 'Hooverphonic represented Belgium in 2021 with the song The Wrong Place', '66'),
('1625', 'Mata Hari', 'Efendi', '6', '', 'Efendi represented Azerbaijan in 2021 with the song Mata Hari', '66'),
('1626', 'Karma', 'Anxhela Peristeri', '1', '', 'Anxhela Peristeri represented Albania in 2021 with the song Karma', '66'),
('1627', 'Adrenalina', 'Senhit feat. Flo Rida', '42', '', 'Senhit feat. Flo Rida represented San Marino in 2021 with the song Adrenalina', '66'),
('1628', 'Birth Of A New Age', 'Jeangu Macrooy', '35', '', 'Jeangu Macrooy represented Netherlands in 2021 with the song Birth Of A New Age', '66'),
('1629', 'Voy A Quedarme', 'Blas Cantó', '47', './src/assets/es-2021.webp', 'Blas Cantó represented Spain in 2021 with the song Voy A Quedarme', '66'),
('1630', 'I Don''t Feel Hate', 'Jendrik', '19', '', 'Jendrik represented Germany in 2021 with the song I Don''t Feel Hate', '66'),
('1631', 'Embers', 'James Newman', '52', '', 'James Newman represented United Kingdom in 2021 with the song Embers', '66'),
('1632', 'Tick', 'Albina', '11', '', 'Albina represented Croatia in 2021 with the song Tick', '66'),
('1633', 'Amnesia', 'Roxen', '40', '', 'Roxen represented Romania in 2021 with the song Amnesia', '66'),
('1634', 'Øve os på hinanden', 'Fyr og Flamme', '14', '', 'Fyr og Flamme represented Denmark in 2021 with the song Øve os på hinanden', '66'),
('1635', 'Amen', 'Vincent Bueno', '5', '', 'Vincent Bueno represented Austria in 2021 with the song Amen', '66'),
('1636', 'The Lucky One', 'Uku Suviste', '15', '', 'Uku Suviste represented Estonia in 2021 with the song The Lucky One', '66'),
('1637', 'Amen', 'Ana Soklič', '46', '', 'Ana Soklič represented Slovenia in 2021 with the song Amen', '66'),
('1638', 'The Ride', 'Rafał', '38', '', 'Rafał represented Poland in 2021 with the song The Ride', '66'),
('1639', 'Technicolour', 'Montaigne', '4', '', 'Montaigne represented Australia in 2021 with the song Technicolour', '66'),
('1640', 'Here I Stand', 'Vasil', '36', '', 'Vasil represented North Macedonia in 2021 with the song Here I Stand', '66'),
('1641', 'Omaga', 'Benny Cristo', '13', '', 'Benny Cristo represented Czechia in 2021 with the song Omaga', '66'),
('1642', 'Maps', 'Lesley Roy', '23', '', 'Lesley Roy represented Ireland in 2021 with the song Maps', '66'),
('1643', 'You', 'Tornike Kipiani', '18', '', 'Tornike Kipiani represented Georgia in 2021 with the song You', '66'),
('1644', 'The Moon Is Rising', 'Samanta Tīna', '27', '', 'Samanta Tīna represented Latvia in 2021 with the song The Moon Is Rising', '66');
        `)

    // 2022
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1645', 'Stefania', 'Kalush Orchestra', '51', '', 'Kalush Orchestra represented Ukraine in 2022 with the song Stefania', '67'),
('1646', 'Space Man', 'Sam Ryder', '52', '', 'Sam Ryder represented United Kingdom in 2022 with the song Space Man', '67'),
('1647', 'SloMo', 'Chanel', '47', './src/assets/es-2022.jpg', 'Chanel represented Spain in 2022 with the song SloMo', '67'),
('1648', 'Hold Me Closer', 'Cornelia Jakobs', '48', '', 'Cornelia Jakobs represented Sweden in 2022 with the song Hold Me Closer', '67'),
('1649', 'In Corpore Sano', 'Konstrakta', '43', '', 'Konstrakta represented Serbia in 2022 with the song In Corpore Sano', '67'),
('1650', 'Brividi', 'Mahmood & Blanco', '25', '', 'Mahmood & Blanco represented Italy in 2022 with the song Brividi', '67'),
('1651', 'Trenulețul', 'Zdob și Zdub & Advahov Brothers', '31', '', 'Zdob și Zdub & Advahov Brothers represented Moldova in 2022 with the song Trenulețul', '67'),
('1652', 'Die Together', 'Amanda Georgiadi Tenfjord', '20', '', 'Amanda Georgiadi Tenfjord represented Greece in 2022 with the song Die Together', '67'),
('1653', 'Saudade, saudade', 'Maro', '39', '', 'Maro represented Portugal in 2022 with the song Saudade, saudade', '67'),
('1654', 'Give That Wolf a Banana', 'Subwoolfer', '37', '', 'Subwoolfer represented Norway in 2022 with the song Give That Wolf a Banana', '67'),
('1655', 'De Diepte', 'S10', '35', '', 'S10 represented Netherlands in 2022 with the song De Diepte', '67'),
('1656', 'River', 'Ochman', '38', '', 'Ochman represented Poland in 2022 with the song River', '67'),
('1657', 'Hope', 'Stefan', '15', '', 'Stefan represented Estonia in 2022 with the song Hope', '67'),
('1658', 'Sentimentai', 'Monika Liu', '28', '', 'Monika Liu represented Lithuania in 2022 with the song Sentimentai', '67'),
('1659', 'Not The Same', 'Sheldon Riley', '4', '', 'Sheldon Riley represented Australia in 2022 with the song Not The Same', '67'),
('1660', 'Fade To Black', 'Nadir Rustamli', '6', '', 'Nadir Rustamli represented Azerbaijan in 2022 with the song Fade To Black', '67'),
('1661', 'Boys Do Cry', 'Marius Bear', '49', '', 'Marius Bear represented Switzerland in 2022 with the song Boys Do Cry', '67'),
('1662', 'Llámame', 'WRS', '40', '', 'WRS represented Romania in 2022 with the song Llámame', '67'),
('1663', 'Miss You', 'Jérémie Makiese', '8', '', 'Jérémie Makiese represented Belgium in 2022 with the song Miss You', '67'),
('1664', 'Snap', 'Rosa Linn', '3', '', 'Rosa Linn represented Armenia in 2022 with the song Snap', '67'),
('1665', 'Jezebel', 'The Rasmus', '16', '', 'The Rasmus represented Finland in 2022 with the song Jezebel', '67'),
('1666', 'Lights Off', 'We Are Domi', '13', '', 'We Are Domi represented Czechia in 2022 with the song Lights Off', '67'),
('1667', 'Með hækkandi sól', 'Systur', '22', '', 'Systur represented Iceland in 2022 with the song Með hækkandi sól', '67'),
('1668', 'Fulenn', 'Alvan & Ahez', '17', '', 'Alvan & Ahez represented France in 2022 with the song Fulenn', '67'),
('1669', 'Rockstars', 'Malik Harris', '19', '', 'Malik Harris represented Germany in 2022 with the song Rockstars', '67'),
('1670', 'Guilty Pleasure', 'Mia Dimšić', '11', '', 'Mia Dimšić represented Croatia in 2022 with the song Guilty Pleasure', '67'),
('1671', 'Circles', 'Andrea', '36', '', 'Andrea represented North Macedonia in 2022 with the song Circles', '67'),
('1672', 'Sekret', 'Ronela Hajati', '1', '', 'Ronela Hajati represented Albania in 2022 with the song Sekret', '67'),
('1673', 'Ela', 'Andromache', '12', '', 'Andromache represented Cyprus in 2022 with the song Ela', '67'),
('1674', 'I.M', 'Michael Ben David', '24', '', 'Michael Ben David represented Israel in 2022 with the song I.M', '67'),
('1675', 'The Show', 'Reddi', '14', '', 'Reddi represented Denmark in 2022 with the song The Show', '67'),
('1676', 'Eat Your Salad', 'Citi Zēni', '27', '', 'Citi Zēni represented Latvia in 2022 with the song Eat Your Salad', '67'),
('1677', 'Stripper', 'Achille Lauro', '42', '', 'Achille Lauro represented San Marino in 2022 with the song Stripper', '67'),
('1678', 'That''s Rich', 'Brooke', '23', '', 'Brooke represented Ireland in 2022 with the song That''s Rich', '67'),
('1679', 'I Am What I Am', 'Emma Muscat', '30', '', 'Emma Muscat represented Malta in 2022 with the song I Am What I Am', '67'),
('1680', 'Halo', 'LUM!X & Pia Maria', '5', '', 'LUM!X & Pia Maria represented Austria in 2022 with the song Halo', '67'),
('1681', 'Breathe', 'Vladana', '33', '', 'Vladana represented Montenegro in 2022 with the song Breathe', '67'),
('1682', 'Intention', 'Intelligent Music Project', '10', '', 'Intelligent Music Project represented Bulgaria in 2022 with the song Intention', '67'),
('1683', 'Lock Me In', 'Circus Mircus', '18', '', 'Circus Mircus represented Georgia in 2022 with the song Lock Me In', '67'),
('1684', 'Disko', 'LPS', '46', '', 'LPS represented Slovenia in 2022 with the song Disko', '67');
        `)

    // 2023
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1685', 'Tattoo', 'Loreen', '48', '', 'Loreen represented Sweden in 2023 with the song Tattoo', '68'),
('1686', 'Cha Cha Cha', 'Käärijä', '16', '', 'Käärijä represented Finland in 2023 with the song Cha Cha Cha', '68'),
('1687', 'Unicorn', 'Noa Kirel', '24', '', 'Noa Kirel represented Israel in 2023 with the song Unicorn', '68'),
('1688', 'Due vite', 'Marco Mengoni', '25', '', 'Marco Mengoni represented Italy in 2023 with the song Due vite', '68'),
('1689', 'Queen of Kings', 'Alessandra', '37', '', 'Alessandra represented Norway in 2023 with the song Queen of Kings', '68'),
('1690', 'Heart of Steel', 'Tvorchi', '51', '', 'Tvorchi represented Ukraine in 2023 with the song Heart of Steel', '68'),
('1691', 'Because of You', 'Gustaph', '8', '', 'Gustaph represented Belgium in 2023 with the song Because of You', '68'),
('1692', 'Bridges', 'Alika', '15', '', 'Alika represented Estonia in 2023 with the song Bridges', '68'),
('1693', 'Promise', 'Voyager', '4', '', 'Voyager represented Australia in 2023 with the song Promise', '68'),
('1694', 'My Sister''s Crown', 'Vesna', '13', '', 'Vesna represented Czechia in 2023 with the song My Sister''s Crown', '68'),
('1695', 'Stay', 'Monika Linkytė', '28', '', 'Monika Linkytė represented Lithuania in 2023 with the song Stay', '68'),
('1696', 'Break a Broken Heart', 'Andrew Lambrou', '12', '', 'Andrew Lambrou represented Cyprus in 2023 with the song Break a Broken Heart', '68'),
('1697', 'Mama ŠČ!', 'Let 3', '11', '', 'Let 3 represented Croatia in 2023 with the song Mama ŠČ!', '68'),
('1698', 'Future Lover', 'Brunette', '3', '', 'Brunette represented Armenia in 2023 with the song Future Lover', '68'),
('1699', 'Who The Hell Is Edgar?', 'Teya & Salena', '5', '', 'Teya & Salena represented Austria in 2023 with the song Who The Hell Is Edgar?', '68'),
('1700', 'Évidemment', 'La Zarra', '17', '', 'La Zarra represented France in 2023 with the song Évidemment', '68'),
('1701', 'Eaea', 'Blanca Paloma', '47', './src/assets/es-2023.jpeg', 'Blanca Paloma represented Spain in 2023 with the song Eaea', '68'),
('1702', 'Soarele și Luna', 'Pasha Parfeni', '31', '', 'Pasha Parfeni represented Moldova in 2023 with the song Soarele și Luna', '68'),
('1703', 'Solo', 'Blanka', '38', '', 'Blanka represented Poland in 2023 with the song Solo', '68'),
('1704', 'Watergun', 'Remo Forrer', '49', '', 'Remo Forrer represented Switzerland in 2023 with the song Watergun', '68'),
('1705', 'Carpe Diem', 'Joker Out', '46', '', 'Joker Out represented Slovenia in 2023 with the song Carpe Diem', '68'),
('1706', 'Duje', 'Albina & Familja Kelmendi', '1', '', 'Albina & Familja Kelmendi represented Albania in 2023 with the song Duje', '68'),
('1707', 'Ai Coração', 'Mimicat', '39', '', 'Mimicat represented Portugal in 2023 with the song Ai Coração', '68'),
('1708', 'Samo mi se spava', 'Luke Black', '43', '', 'Luke Black represented Serbia in 2023 with the song Samo mi se spava', '68'),
('1709', 'I Wrote A Song', 'Mae Muller', '52', '', 'Mae Muller represented United Kingdom in 2023 with the song I Wrote A Song', '68'),
('1710', 'Blood & Glitter', 'Lord Of The Lost', '19', '', 'Lord Of The Lost represented Germany in 2023 with the song Blood & Glitter', '68'),
('1711', 'Power', 'Diljá', '22', '', 'Diljá represented Iceland in 2023 with the song Power', '68'),
('1712', 'Aijā', 'Sudden Lights', '27', '', 'Sudden Lights represented Latvia in 2023 with the song Aijā', '68'),
('1713', 'Echo', 'Iru', '18', '', 'Iru represented Georgia in 2023 with the song Echo', '68'),
('1714', 'What They Say', 'Victor Vernicos', '20', '', 'Victor Vernicos represented Greece in 2023 with the song What They Say', '68'),
('1715', 'We Are One', 'Wild Youth', '23', '', 'Wild Youth represented Ireland in 2023 with the song We Are One', '68'),
('1716', 'Burning Daylight', 'Mia Nicolai & Dion Cooper', '35', '', 'Mia Nicolai & Dion Cooper represented Netherlands in 2023 with the song Burning Daylight', '68'),
('1717', 'Breaking My Heart', 'Reiley', '14', '', 'Reiley represented Denmark in 2023 with the song Breaking My Heart', '68'),
('1718', 'Tell Me More', 'TuralTuranX', '6', '', 'TuralTuranX represented Azerbaijan in 2023 with the song Tell Me More', '68'),
('1719', 'Dance (Our Own Party)', 'The Busker', '30', '', 'The Busker represented Malta in 2023 with the song Dance (Our Own Party)', '68'),
('1720', 'D.G.T. (Off and On)', 'Theodor Andrei', '40', '', 'Theodor Andrei represented Romania in 2023 with the song D.G.T. (Off and On)', '68'),
('1721', 'Like An Animal', 'Piqued Jacks', '42', '', 'Piqued Jacks represented San Marino in 2023 with the song Like An Animal', '68');
        `)

    // 2024
    db.run(`
        INSERT INTO songs (id, title, artist, country_id, image, information, edition_id) VALUES
('1722', 'The Code', 'Nemo', '49', '', 'Nemo represented Switzerland in 2024 with the song The Code', '69'),
('1723', 'Rim Tim Tagi Dim', 'Baby Lasagna', '11', '', 'Baby Lasagna represented Croatia in 2024 with the song Rim Tim Tagi Dim', '69'),
('1724', 'Teresa & Maria', 'alyona alyona & Jerry Heil', '51', '', 'alyona alyona & Jerry Heil represented Ukraine in 2024 with the song Teresa & Maria', '69'),
('1725', 'Mon amour', 'Slimane', '17', '', 'Slimane represented France in 2024 with the song Mon amour', '69'),
('1726', 'Hurricane', 'Eden Golan', '24', '', 'Eden Golan represented Israel in 2024 with the song Hurricane', '69'),
('1727', 'Doomsday Blue', 'Bambie Thug', '23', '', 'Bambie Thug represented Ireland in 2024 with the song Doomsday Blue', '69'),
('1728', 'La noia', 'Angelina Mango', '25', '', 'Angelina Mango represented Italy in 2024 with the song La noia', '69'),
('1729', 'Jako', 'Ladaniva', '3', '', 'Ladaniva represented Armenia in 2024 with the song Jako', '69'),
('1730', 'Unforgettable', 'Marcus & Martinus', '48', '', 'Marcus & Martinus represented Sweden in 2024 with the song Unforgettable', '69'),
('1731', 'Grito', 'Iolanda', '39', '', 'Iolanda represented Portugal in 2024 with the song Grito', '69'),
('1732', 'Zari', 'Marina Satti', '20', '', 'Marina Satti represented Greece in 2024 with the song Zari', '69'),
('1733', 'Always on the Run', 'Isaak', '19', '', 'Isaak represented Germany in 2024 with the song Always on the Run', '69'),
('1734', 'Fighter', 'Tali', '29', '', 'Tali represented Luxembourg in 2024 with the song Fighter', '69'),
('1735', 'Luktelk', 'Silvester Belt', '28', '', 'Silvester Belt represented Lithuania in 2024 with the song Luktelk', '69'),
('1736', 'Liar', 'Silia Kapsis', '12', '', 'Silia Kapsis represented Cyprus in 2024 with the song Liar', '69'),
('1737', 'Hollow', 'Dons', '27', '', 'Dons represented Latvia in 2024 with the song Hollow', '69'),
('1738', 'Ramonda', 'Teya Dora', '43', '', 'Teya Dora represented Serbia in 2024 with the song Ramonda', '69'),
('1739', 'Dizzy', 'Olly Alexander', '52', '', 'Olly Alexander represented United Kingdom in 2024 with the song Dizzy', '69'),
('1740', 'No Rules!', 'Windows95man', '16', '', 'Windows95man represented Finland in 2024 with the song No Rules!', '69'),
('1741', '(nendest) narkootikumidest ei tea me (küll) midagi', '5miinust & Puuluup', '15', '', '5miinust & Puuluup represented Estonia in 2024 with the song (nendest) narkootikumidest ei tea me (küll) midagi', '69'),
('1742', 'Firefighter', 'Nutsa Buzaladze', '18', '', 'Nutsa Buzaladze represented Georgia in 2024 with the song Firefighter', '69'),
('1743', 'Zorra', 'Nebulossa', '47', './src/assets/es-2024.jpg', 'Nebulossa represented Spain in 2024 with the song Zorra', '69'),
('1744', 'Veronika', 'Raiven', '46', '', 'Raiven represented Slovenia in 2024 with the song Veronika', '69'),
('1745', 'We Will Rave', 'Kaleen', '5', '', 'Kaleen represented Austria in 2024 with the song We Will Rave', '69'),
('1746', 'Ulveham', 'Gåte', '37', '', 'Gåte represented Norway in 2024 with the song Ulveham', '69'),
('1747', 'One Milkali (One Blood)', 'Electric Fields', '4', '', 'Electric Fields represented Australia in 2024 with the song One Milkali (One Blood)', '69'),
('1748', 'Pedestal', 'Aiko', '13', '', 'Aiko represented Czechia in 2024 with the song Pedestal', '69'),
('1749', 'The Tower', 'Luna', '38', '', 'Luna represented Poland in 2024 with the song The Tower', '69'),
('1750', 'Sand', 'Saba', '14', '', 'Saba represented Denmark in 2024 with the song Sand', '69'),
('1751', 'In the Middle', 'Natalia Barbu', '31', '', 'Natalia Barbu represented Moldova in 2024 with the song In the Middle', '69'),
('1752', 'Before the Party''s Over', 'Mustii', '8', '', 'Mustii represented Belgium in 2024 with the song Before the Party''s Over', '69'),
('1753', '11:11', 'Megara', '42', '', 'Megara represented San Marino in 2024 with the song 11:11', '69'),
('1754', 'Titan', 'Besa', '1', '', 'Besa represented Albania in 2024 with the song Titan', '69'),
('1755', 'Loop', 'Sarah Bonnici', '30', '', 'Sarah Bonnici represented Malta in 2024 with the song Loop', '69'),
('1756', 'Özünlə Apar', 'Fahree feat. Ilkin Dovlatov', '6', '', 'Fahree feat. Ilkin Dovlatov represented Azerbaijan in 2024 with the song Özünlə Apar', '69'),
('1757', 'Scared of Heights', 'Hera Björk', '22', '', 'Hera Björk represented Iceland in 2024 with the song Scared of Heights', '69'),
('1758', 'Europapa', 'Joost Klein', '35', '', 'Joost Klein represented Netherlands in 2024 with the song Europapa', '69');
        `)
    
    // 2025
    db.run(`
        
        `)

    // Insertar datos de ejemplo en `edition_countries` (relación entre ediciones y países)
    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (1, 49), (1, 35), (1, 8), (1, 19), (1, 17), (1, 29), (1, 25), (1, 25);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (2, 35), (2, 17), (2, 14), (2, 29), (2, 19), (2, 25), (2, 52), (2, 8), (2, 49), (2, 5);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (3, 17), (3, 49), (3, 25), (3, 48), (3, 8), (3, 5), (3, 19), (3, 14), (3, 35), (3, 29);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (4, 35), (4, 52), (4, 17), (4, 49), (4, 14), (4, 25), (4, 8), (4, 19), (4, 48), (4, 5), (4, 32);`)

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (5, 17), (5, 52), (5, 32), (5, 37), (5, 19), (5, 8), (5, 5), (5, 49), (5, 25), (5, 48), (5, 14), (5, 35), (5, 29);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (6, 29), (6, 52), (6, 49), (6, 17), (6, 14), (6, 25), (6, 37), (6, 54), (6, 47), (6, 32), (6, 16), (6, 35), (6, 19), (6, 48), (6, 5), (6, 8);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (7, 17), (7, 32), (7, 29), (7, 54), (7, 52), (7, 19), (7, 16), (7, 48), (7, 25), (7, 14), (7, 37), (7, 49), (7, 8), (7, 47), (7, 5), (7, 35);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (8, 14), (8, 49), (8, 25), (8, 52), (8, 17), (8, 32), (8, 5), (8, 29), (8, 19), (8, 8), (8, 54), (8, 47), (8, 35), (8, 37), (8, 16), (8, 48);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (9, 25), (9, 52), (9, 32), (9, 29), (9, 17), (9, 5), (9, 16), (9, 37), (9, 14), (9, 35), (9, 8), (9, 47), (9, 19), (9, 39), (9, 54), (9, 49);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (10, 29), (10, 52), (10, 17), (10, 5), (10, 25), (10, 23), (10, 14), (10, 49), (10, 32), (10, 48), (10, 35), (10, 54), (10, 37), (10, 39), (10, 47), (10, 19), (10, 8), (10, 16);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (11, 5), (11, 48), (11, 37), (11, 8), (11, 23), (11, 49), (11, 54), (11, 47), (11, 52), (11, 19), (11, 29), (11, 16), (11, 39), (11, 14), (11, 35), (11, 17), (11, 32), (11, 25);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (12, 52), (12, 23), (12, 17), (12, 29), (12, 32), (12, 47), (12, 8), (12, 48), (12, 19), (12, 54), (12, 25), (12, 39), (12, 16), (12, 35), (12, 5), (12, 37), (12, 49);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (13, 47), (13, 52), (13, 17), (13, 23), (13, 48), (13, 19), (13, 8), (13, 32), (13, 54), (13, 25), (13, 39), (13, 29), (13, 5), (13, 49), (13, 37), (13, 35), (13, 16);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (14, 47), (14, 52), (14, 35), (14, 17), (14, 49), (14, 32), (14, 23), (14, 8), (14, 48), (14, 19), (14, 29), (14, 16), (14, 54), (14, 25), (14, 39), (14, 37);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (15, 23), (15, 52), (15, 19), (15, 49), (15, 17), (15, 47), (15, 35), (15, 25), (15, 8), (15, 32), (15, 54), (15, 29);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (16, 32), (16, 47), (16, 19), (16, 52), (16, 25), (16, 48), (16, 35), (16, 16), (16, 39), (16, 17), (16, 23), (16, 49), (16, 29), (16, 8), (16, 54), (16, 5), (16, 37), (16, 30);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (17, 29), (17, 52), (17, 19), (17, 35), (17, 5), (17, 25), (17, 39), (17, 49), (17, 54), (17, 47), (17, 17), (17, 16), (17, 48), (17, 37), (17, 23), (17, 32), (17, 8), (17, 30);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (18, 29), (18, 47), (18, 52), (18, 24), (18, 48), (18, 16), (18, 37), (18, 19), (18, 32), (18, 39), (18, 23), (18, 49), (18, 25), (18, 35), (18, 54), (18, 17), (18, 8);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (19, 48), (19, 25), (19, 35), (19, 52), (19, 29), (19, 32), (19, 24), (19, 23), (19, 47), (19, 8), (19, 20), (19, 54), (19, 16), (19, 37), (19, 19), (19, 49), (19, 39);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (20, 35), (20, 52), (20, 25), (20, 17), (20, 29), (20, 49), (20, 16), (20, 48), (20, 23), (20, 47), (20, 24), (20, 30), (20, 54), (20, 32), (20, 8), (20, 39), (20, 19), (20, 37), (20, 50);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (21, 52), (21, 17), (21, 32), (21, 49), (21, 5), (21, 24), (21, 25), (21, 8), (21, 35), (21, 23), (21, 16), (21, 39), (21, 20), (21, 29), (21, 19), (21, 47), (21, 54), (21, 37);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (22, 17), (22, 52), (22, 23), (22, 32), (22, 20), (22, 49), (22, 8), (22, 19), (22, 47), (22, 16), (22, 24), (22, 35), (22, 25), (22, 37), (22, 39), (22, 29), (22, 5), (22, 48);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (23, 24), (23, 8), (23, 17), (23, 32), (23, 23), (23, 19), (23, 29), (23, 20), (23, 47), (23, 49), (23, 52), (23, 25), (23, 35), (23, 48), (23, 5), (23, 14), (23, 39), (23, 16), (23, 50), (23, 37);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (24, 24), (24, 47), (24, 17), (24, 19), (24, 23), (24, 14), (24, 52), (24, 20), (24, 39), (24, 49), (24, 37), (24, 35), (24, 29), (24, 16), (24, 25), (24, 32), (24, 48), (24, 8), (24, 5);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (25, 23), (25, 19), (25, 52), (25, 49), (25, 35), (25, 25), (25, 39), (25, 5), (25, 29), (25, 48), (25, 17), (25, 47), (25, 20), (25, 14), (25, 50), (25, 37), (25, 8), (25, 34), (25, 16);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (26, 52), (26, 19), (26, 17), (26, 49), (26, 23), (26, 12), (26, 24), (26, 20), (26, 35), (26, 48), (26, 29), (26, 14), (26, 8), (26, 47), (26, 54), (26, 16), (26, 5), (26, 50), (26, 39), (26, 37);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (27, 19), (27, 24), (27, 49), (27, 8), (27, 12), (27, 29), (27, 52), (27, 48), (27, 5), (27, 47), (27, 23), (27, 37), (27, 39), (27, 54), (27, 50), (27, 35), (27, 14), (27, 16);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (28, 29), (28, 24), (28, 48), (28, 54), (28, 19), (28, 52), (28, 35), (28, 17), (28, 37), (28, 5), (28, 25), (28, 16), (28, 39), (28, 20), (28, 49), (28, 12), (28, 14), (28, 8), (28, 50), (28, 47);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (29, 48), (29, 23), (29, 47), (29, 14), (29, 8), (29, 25), (29, 52), (29, 17), (29, 16), (29, 29), (29, 39), (29, 50), (29, 35), (29, 19), (29, 12), (29, 49), (29, 37), (29, 54), (29, 5);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (30, 37), (30, 19), (30, 48), (30, 52), (30, 24), (30, 23), (30, 25), (30, 5), (30, 16), (30, 17), (30, 14), (30, 49), (30, 29), (30, 47), (30, 50), (30, 12), (30, 20), (30, 39), (30, 8);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (31, 8), (31, 49), (31, 29), (31, 23), (31, 48), (31, 14), (31, 52), (31, 19), (31, 50), (31, 47), (31, 54), (31, 37), (31, 35), (31, 39), (31, 16), (31, 22), (31, 17), (31, 5), (31, 24), (31, 12);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (32, 23), (32, 19), (32, 25), (32, 54), (32, 35), (32, 14), (32, 12), (32, 24), (32, 37), (32, 20), (32, 8), (32, 48), (32, 52), (32, 17), (32, 16), (32, 22), (32, 49), (32, 39), (32, 47), (32, 5), (32, 29), (32, 50);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (33, 49), (33, 52), (33, 14), (33, 29), (33, 37), (33, 54), (33, 24), (33, 23), (33, 35), (33, 17), (33, 47), (33, 48), (33, 25), (33, 19), (33, 50), (33, 22), (33, 20), (33, 8), (33, 39), (33, 16), (33, 5);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (34, 54), (34, 52), (34, 14), (34, 48), (34, 5), (34, 47), (34, 16), (34, 17), (34, 25), (34, 20), (34, 12), (34, 24), (34, 49), (34, 19), (34, 35), (34, 39), (34, 37), (34, 23), (34, 8), (34, 29), (34, 50), (34, 22);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (35, 25), (35, 17), (35, 23), (35, 22), (35, 47), (35, 52), (35, 54), (35, 14), (35, 19), (35, 5), (35, 49), (35, 8), (35, 29), (35, 12), (35, 35), (35, 48), (35, 50), (35, 24), (35, 20), (35, 39), (35, 37), (35, 16);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (36, 48), (36, 17), (36, 24), (36, 47), (36, 49), (36, 30), (36, 25), (36, 39), (36, 12), (36, 23), (36, 52), (36, 50), (36, 20), (36, 29), (36, 22), (36, 8), (36, 37), (36, 19), (36, 14), (36, 16), (36, 54), (36, 5);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (37, 23), (37, 52), (37, 30), (37, 25), (37, 20), (37, 24), (37, 22), (37, 17), (37, 35), (37, 5), (37, 12), (37, 14), (37, 54), (37, 47), (37, 49), (37, 19), (37, 39), (37, 37), (37, 50), (37, 8), (37, 29), (37, 48), (37, 16);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (38, 23), (38, 52), (38, 49), (38, 17), (38, 37), (38, 35), (38, 48), (38, 30), (38, 20), (38, 39), (38, 47), (38, 25), (38, 22), (38, 5), (38, 11), (38, 9), (38, 16), (38, 19), (38, 12), (38, 29), (38, 50), (38, 14), (38, 46), (38, 24), (38, 8);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (39, 23), (39, 38), (39, 19), (39, 21), (39, 30), (39, 37), (39, 17), (39, 39), (39, 41), (39, 52), (39, 12), (39, 22), (39, 48), (39, 20), (39, 9), (39, 11), (39, 5), (39, 47), (39, 49), (39, 45), (39, 40), (39, 16), (39, 35), (39, 15), (39, 28);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (40, 37), (40, 47), (40, 48), (40, 17), (40, 14), (40, 11), (40, 46), (40, 24), (40, 12), (40, 52), (40, 30), (40, 20), (40, 5), (40, 23), (40, 22), (40, 50), (40, 41), (40, 38), (40, 9), (40, 8), (40, 39), (40, 21), (40, 19);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (41, 23), (41, 37), (41, 48), (41, 11), (41, 15), (41, 39), (41, 35), (41, 52), (41, 12), (41, 30), (41, 5), (41, 50), (41, 22), (41, 20), (41, 38), (41, 49), (41, 8), (41, 45), (41, 17), (41, 47), (41, 46), (41, 9), (41, 16);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (42, 52), (42, 23), (42, 50), (42, 25), (42, 12), (42, 47), (42, 17), (42, 15), (42, 30), (42, 46), (42, 38), (42, 20), (42, 21), (42, 48), (42, 41), (42, 14), (42, 11), (42, 19), (42, 9), (42, 22), (42, 5), (42, 49), (42, 35), (42, 37), (42, 39);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (43, 24), (43, 52), (43, 30), (43, 35), (43, 11), (43, 8), (43, 19), (43, 37), (43, 23), (43, 48), (43, 12), (43, 39), (43, 15), (43, 50), (43, 16), (43, 47), (43, 38), (43, 46), (43, 36), (43, 20), (43, 45), (43, 40), (43, 21), (43, 17), (43, 49);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (44, 48), (44, 22), (44, 19), (44, 11), (44, 24), (44, 15), (44, 9), (44, 14), (44, 35), (44, 5), (44, 46), (44, 8), (44, 52), (44, 37), (44, 30), (44, 50), (44, 23), (44, 38), (44, 17), (44, 28), (44, 39), (44, 12), (44, 47);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (45, 14), (45, 41), (45, 27), (45, 15), (45, 19), (45, 23), (45, 48), (45, 30), (45, 11), (45, 50), (45, 37), (45, 22), (45, 35), (45, 5), (45, 36), (45, 52), (45, 40), (45, 47), (45, 16), (45, 49), (45, 12), (45, 24), (45, 17), (45, 8);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (46, 15), (46, 14), (46, 20), (46, 17), (46, 48), (46, 47), (46, 46), (46, 19), (46, 30), (46, 11), (46, 50), (46, 41), (46, 28), (46, 9), (46, 52), (46, 24), (46, 39), (46, 35), (46, 27), (46, 38), (46, 23), (46, 22), (46, 37);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (47, 27), (47, 30), (47, 52), (47, 15), (47, 17), (47, 12), (47, 47), (47, 48), (47, 40), (47, 41), (47, 11), (47, 24), (47, 9), (47, 8), (47, 46), (47, 50), (47, 20), (47, 5), (47, 36), (47, 16), (47, 19), (47, 49), (47, 28), (47, 14);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (48, 50), (48, 8), (48, 41), (48, 37), (48, 48), (48, 5), (48, 38), (48, 22), (48, 47), (48, 40), (48, 23), (48, 19), (48, 35), (48, 51), (48, 11), (48, 9), (48, 20), (48, 17), (48, 24), (48, 12), (48, 15), (48, 39), (48, 46), (48, 27), (48, 30), (48, 52);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (49, 51), (49, 44), (49, 20), (49, 50), (49, 12), (49, 48), (49, 1), (49, 19), (49, 9), (49, 47), (49, 41), (49, 30), (49, 11), (49, 36), (49, 17), (49, 52), (49, 38), (49, 40), (49, 22), (49, 35), (49, 5), (49, 8), (49, 23), (49, 37), (49, 15), (49, 24), (49, 14), (49, 16), (49, 39), (49, 28), (49, 27), (49, 2), (49, 7), (49, 32), (49, 46), (49, 49);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (50, 20), (50, 30), (50, 40), (50, 24), (50, 27), (50, 31), (50, 44), (50, 49), (50, 37), (50, 14), (50, 11), (50, 21), (50, 50), (50, 9), (50, 41), (50, 1), (50, 36), (50, 12), (50, 48), (50, 51), (50, 47), (50, 52), (50, 17), (50, 19), (50, 38), (50, 46), (50, 7), (50, 35), (50, 23), (50, 22), (50, 39), (50, 16), (50, 10), (50, 15), (50, 5), (50, 8), (50, 2), (50, 32), (50, 28);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (51, 16), (51, 41), (51, 9), (51, 40), (51, 48), (51, 28), (51, 51), (51, 3), (51, 20), (51, 23), (51, 50), (51, 36), (51, 11), (51, 37), (51, 19), (51, 49), (51, 27), (51, 14), (51, 52), (51, 31), (51, 47), (51, 17), (51, 24), (51, 30), (51, 38), (51, 8), (51, 22), (51, 1), (51, 12), (51, 46), (51, 10), (51, 15), (51, 39), (51, 35), (51, 32), (51, 7), (51, 2);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (52, 43), (52, 51), (52, 41), (52, 50), (52, 10), (52, 7), (52, 20), (52, 3), (52, 21), (52, 31), (52, 9), (52, 18), (52, 40), (52, 36), (52, 46), (52, 27), (52, 16), (52, 48), (52, 19), (52, 47), (52, 28), (52, 17), (52, 52), (52, 23), (52, 39), (52, 2), (52, 22), (52, 38), (52, 12), (52, 11), (52, 1), (52, 37), (52, 14), (52, 49), (52, 35), (52, 33), (52, 15), (52, 24), (52, 30), (52, 8), (52, 5), (52, 13);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (53, 41), (53, 51), (53, 20), (53, 3), (53, 37), (53, 43), (53, 50), (53, 6), (53, 24), (53, 9), (53, 18), (53, 27), (53, 39), (53, 22), (53, 14), (53, 47), (53, 1), (53, 48), (53, 17), (53, 40), (53, 11), (53, 16), (53, 19), (53, 38), (53, 52), (53, 36), (53, 10), (53, 49), (53, 30), (53, 46), (53, 31), (53, 12), (53, 28), (53, 35), (53, 7), (53, 33), (53, 23), (53, 2), (53, 8), (53, 13), (53, 15), (53, 21), (53, 42);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (54, 37), (54, 22), (54, 6), (54, 50), (54, 52), (54, 15), (54, 20), (54, 17), (54, 9), (54, 3), (54, 41), (54, 51), (54, 14), (54, 31), (54, 39), (54, 24), (54, 1), (54, 11), (54, 40), (54, 19), (54, 48), (54, 30), (54, 28), (54, 47), (54, 16), (54, 43), (54, 23), (54, 36), (54, 33), (54, 38), (54, 12), (54, 7), (54, 49), (54, 21), (54, 46), (54, 35), (54, 2), (54, 45), (54, 10), (54, 27), (54, 8), (54, 13);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (55, 19), (55, 50), (55, 40), (55, 14), (55, 6), (55, 8), (55, 3), (55, 20), (55, 18), (55, 51), (55, 41), (55, 17), (55, 43), (55, 24), (55, 47), (55, 1), (55, 9), (55, 39), (55, 22), (55, 37), (55, 12), (55, 31), (55, 23), (55, 7), (55, 52), (55, 48), (55, 16), (55, 28), (55, 30), (55, 38), (55, 15), (55, 36), (55, 11), (55, 35), (55, 45), (55, 10), (55, 27), (55, 46), (55, 49);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (56, 6), (56, 25), (56, 48), (56, 51), (56, 14), (56, 9), (56, 20), (56, 23), (56, 18), (56, 19), (56, 52), (56, 31), (56, 46), (56, 43), (56, 17), (56, 41), (56, 40), (56, 5), (56, 28), (56, 22), (56, 16), (56, 21), (56, 47), (56, 15), (56, 49), (56, 30), (56, 3), (56, 8), (56, 50), (56, 1), (56, 10), (56, 45), (56, 7), (56, 11), (56, 24), (56, 36), (56, 42), (56, 37), (56, 27), (56, 39), (56, 38), (56, 12), (56, 35);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (57, 48), (57, 41), (57, 43), (57, 6), (57, 1), (57, 15), (57, 50), (57, 19), (57, 25), (57, 47), (57, 31), (57, 40), (57, 36), (57, 28), (57, 51), (57, 12), (57, 20), (57, 9), (57, 23), (57, 22), (57, 30), (57, 17), (57, 14), (57, 21), (57, 52), (57, 37), (57, 10), (57, 49), (57, 11), (57, 16), (57, 39), (57, 18), (57, 35), (57, 7), (57, 24), (57, 42), (57, 46), (57, 45), (57, 33), (57, 27), (57, 8), (57, 5);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (58, 14), (58, 6), (58, 51), (58, 37), (58, 41), (58, 20), (58, 25), (58, 30), (58, 35), (58, 21), (58, 31), (58, 8), (58, 40), (58, 48), (58, 18), (58, 7), (58, 22), (58, 3), (58, 52), (58, 15), (58, 19), (58, 28), (58, 17), (58, 16), (58, 47), (58, 23), (58, 43), (58, 42), (58, 10), (58, 33), (58, 49), (58, 11), (58, 24), (58, 1), (58, 5), (58, 36), (58, 27), (58, 12), (58, 46);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (59, 5), (59, 35), (59, 48), (59, 3), (59, 21), (59, 51), (59, 41), (59, 37), (59, 14), (59, 47), (59, 16), (59, 40), (59, 49), (59, 38), (59, 22), (59, 7), (59, 52), (59, 19), (59, 33), (59, 20), (59, 25), (59, 6), (59, 30), (59, 42), (59, 46), (59, 17), (59, 39), (59, 28), (59, 23), (59, 15), (59, 36), (59, 27), (59, 8), (59, 1), (59, 24), (59, 18), (59, 31);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (60, 48), (60, 41), (60, 25), (60, 8), (60, 4), (60, 27), (60, 15), (60, 37), (60, 24), (60, 43), (60, 18), (60, 6), (60, 33), (60, 46), (60, 40), (60, 3), (60, 1), (60, 28), (60, 20), (60, 21), (60, 47), (60, 12), (60, 38), (60, 52), (60, 17), (60, 5), (60, 19), (60, 31), (60, 30), (60, 7), (60, 23), (60, 14), (60, 35), (60, 13), (60, 36), (60, 39), (60, 22), (60, 16), (60, 42), (60, 49);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (61, 51), (61, 4), (61, 41), (61, 10), (61, 48), (61, 17), (61, 3), (61, 38), (61, 28), (61, 8), (61, 35), (61, 30), (61, 5), (61, 24), (61, 27), (61, 25), (61, 6), (61, 43), (61, 21), (61, 18), (61, 12), (61, 47), (61, 11), (61, 52), (61, 13), (61, 19), (61, 9), (61, 36), (61, 7), (61, 42), (61, 37), (61, 33), (61, 46), (61, 22), (61, 16), (61, 23), (61, 1), (61, 20), (61, 14), (61, 31), (61, 49), (61, 15);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (62, 39), (62, 10), (62, 31), (62, 8), (62, 48), (62, 25), (62, 40), (62, 21), (62, 4), (62, 37), (62, 35), (62, 17), (62, 11), (62, 6), (62, 52), (62, 5), (62, 7), (62, 3), (62, 20), (62, 14), (62, 12), (62, 38), (62, 24), (62, 51), (62, 19), (62, 47), (62, 18), (62, 43), (62, 49), (62, 16), (62, 23), (62, 15), (62, 13), (62, 1), (62, 36), (62, 22), (62, 33), (62, 30), (62, 28), (62, 46), (62, 27), (62, 42);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (63, 24), (63, 12), (63, 5), (63, 19), (63, 25), (63, 13), (63, 48), (63, 15), (63, 14), (63, 31), (63, 1), (63, 28), (63, 17), (63, 10), (63, 37), (63, 23), (63, 51), (63, 35), (63, 43), (63, 4), (63, 21), (63, 46), (63, 47), (63, 52), (63, 16), (63, 39), (63, 40), (63, 27), (63, 30), (63, 6), (63, 8), (63, 49), (63, 38), (63, 20), (63, 3), (63, 41), (63, 7), (63, 11), (63, 33), (63, 42), (63, 18), (63, 36), (63, 22);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (64, 35), (64, 25), (64, 41), (64, 49), (64, 48), (64, 37), (64, 36), (64, 6), (64, 4), (64, 22), (64, 13), (64, 14), (64, 12), (64, 30), (64, 46), (64, 17), (64, 1), (64, 43), (64, 42), (64, 15), (64, 20), (64, 47), (64, 24), (64, 7), (64, 19), (64, 52), (64, 38), (64, 21), (64, 28), (64, 31), (64, 8), (64, 40), (64, 18), (64, 11), (64, 39), (64, 27), (64, 3), (64, 33), (64, 16), (64, 5), (64, 23);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (65, 1), (65, 3), (65, 4), (65, 5), (65, 6), (65, 7), (65, 8), (65, 10), (65, 11), (65, 12), (65, 13), (65, 14), (65, 15), (65, 16), (65, 17), (65, 18), (65, 19), (65, 20), (65, 22), (65, 23), (65, 24), (65, 25), (65, 27), (65, 28), (65, 30), (65, 31), (65, 35), (65, 36), (65, 37), (65, 38), (65, 39), (65, 40), (65, 41), (65, 42), (65, 43), (65, 46), (65, 47), (65, 48), (65, 49), (65, 51), (65, 52);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (66, 25), (66, 17), (66, 49), (66, 22), (66, 51), (66, 16), (66, 30), (66, 28), (66, 41), (66, 20), (66, 10), (66, 39), (66, 31), (66, 48), (66, 43), (66, 12), (66, 24), (66, 37), (66, 8), (66, 6), (66, 1), (66, 42), (66, 35), (66, 47), (66, 19), (66, 52), (66, 11), (66, 40), (66, 14), (66, 5), (66, 15), (66, 46), (66, 38), (66, 4), (66, 36), (66, 13), (66, 23), (66, 18), (66, 27);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (67, 51), (67, 52), (67, 47), (67, 48), (67, 43), (67, 25), (67, 31), (67, 20), (67, 39), (67, 37), (67, 35), (67, 38), (67, 15), (67, 28), (67, 4), (67, 6), (67, 49), (67, 40), (67, 8), (67, 3), (67, 16), (67, 13), (67, 22), (67, 17), (67, 19), (67, 11), (67, 36), (67, 1), (67, 12), (67, 24), (67, 14), (67, 27), (67, 42), (67, 23), (67, 30), (67, 5), (67, 33), (67, 10), (67, 18), (67, 46);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (68, 48), (68, 16), (68, 24), (68, 25), (68, 37), (68, 51), (68, 8), (68, 15), (68, 4), (68, 13), (68, 28), (68, 12), (68, 11), (68, 3), (68, 5), (68, 17), (68, 47), (68, 31), (68, 38), (68, 49), (68, 46), (68, 1), (68, 39), (68, 43), (68, 52), (68, 19), (68, 22), (68, 27), (68, 18), (68, 20), (68, 23), (68, 35), (68, 14), (68, 6), (68, 30), (68, 40), (68, 42);`);

    db.run(`INSERT OR REPLACE INTO edition_countries (edition_id, country_id) VALUES (69, 49), (69, 11), (69, 51), (69, 17), (69, 24), (69, 23), (69, 25), (69, 3), (69, 48), (69, 39), (69, 20), (69, 19), (69, 29), (69, 28), (69, 12), (69, 27), (69, 43), (69, 52), (69, 16), (69, 15), (69, 18), (69, 47), (69, 46), (69, 5), (69, 37), (69, 4), (69, 13), (69, 38), (69, 14), (69, 31), (69, 8), (69, 42), (69, 1), (69, 30), (69, 6), (69, 22), (69, 35);`);

    return db; // Retorna la base de datos lista
};

export default initDatabase; // Exportación por defecto
