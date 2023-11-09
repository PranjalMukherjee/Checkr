DROP schema if exists `chekr`;
create schema `chekr`;
use `chekr`;
DROP table if exists `candidates`;
CREATE TABLE candidates (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    location VARCHAR(255),
    email VARCHAR(255),
    dob DATE,
    phone_no VARCHAR(20),
    zipcode VARCHAR(10),
    driver_license VARCHAR(20),
    social_security VARCHAR(11),
    created_at DATETIME,
    date DATE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


DROP table if exists `reports`;
CREATE TABLE reports (
    id INT PRIMARY KEY not null auto_increment,
	status ENUM('CLEAR', 'CONSIDER'),
    adjudication ENUM('ENGAGE', 'ADVERSE_ACTION'),
    package VARCHAR(20),
    created_at DATETIME,
    completed_date DATETIME,
    turn_around_time VARCHAR(30),

    candidate_id INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
)engine=InnoDB auto_increment=1 DEFAULT CHARSET=latin1;

DROP table if exists `adverse_actions`;
CREATE TABLE adverse_actions(
    id INT PRIMARY KEY not null auto_increment,
    name VARCHAR(255),
    status ENUM('PENDING', 'SCHEDULED', 'COMPLETE', 'DISPUTE', 'CANCELED','UNDELIVERABLE') ,
    pre_notice_date DATE,
    post_notice_date DATE,
    candidate_id INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
)engine=InnoDB auto_increment=1 DEFAULT CHARSET=latin1;

DROP table if exists `court_searches`;
CREATE TABLE court_searches (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    ssn_verification_status ENUM('CLEAR', 'CONSIDER'),
    ssn_verification_date DATE,
    sex_offender_status ENUM('CLEAR', 'CONSIDER'),
    sex_offender_date DATE,
    global_watchlist_status ENUM('CLEAR', 'CONSIDER'),
    global_watchlist_date DATE,
    federal_criminal_status ENUM('CLEAR', 'CONSIDER'),
    federal_criminal_date DATE,
    county_criminal_status ENUM('CLEAR', 'CONSIDER'),
    county_criminal_date DATE,
    candidate_id INT,
    FOREIGN KEY (candidate_id)
        REFERENCES candidates (id)
)  ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=LATIN1;

