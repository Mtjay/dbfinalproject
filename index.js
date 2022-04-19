require('dotenv').config()
const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const cors = require('cors')
const oracledb = require('oracledb')
const dbConfig = require('./dbconfig.js')

//to do: make app into its own comp


oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const mypw = process.env.NODE_ORACLEDB_PASSWORD
try {
  oracledb.initOracleClient({libDir: 'C:\\oracle\\instantclient_21_3'});
} catch (err) {
  console.error('Whoops!');
  console.error(err);
  process.exit(1);
}
function doRelease(connection) {
  connection.release(function (err) {
    if (err) {
      console.error(err.message);
    }
  });
}
//to parse data from POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));

app.use(cors())

app.get('/api',(request,response)=>{
  //console.log(request)
  //  response.send('<h1>backend api</h1>')
})
//-------------------------------------------------------------------------POST
app.post('/api',(request,response)=>{
  //to do: build SQL querries from POST request body
  //to do: make querry parser to build respective object
temp = request.body




//case2.1: violent and state are selected
  if(request.body.crime_type){
    oracledb.getConnection(dbConfig, function (err, connection) {
      if (err) {
        console.error(err.message);
        response.status(500).send("Error connecting to DB");
        return;
      }

      console.log("After connection");
      //murder
      if(request.body.crime_type==="violent"){
          connection.execute(`with t1 as
          (
          select SUM(cast(violent_crime as int))  as "2005"
          from statecrime2005
          ), 
          t2 as
          (
          select SUM(cast(violent_crime  as int))  as "2006"
          from statecrime2006
          ), 
          t3 as 
          (
          select SUM(cast(violent_crime  as int))  as "2007"
          from statecrime2007
          ),
          t4 as
          (
          select SUM(cast(violent_crime  as int))  as "2008"
          from statecrime2008
          ), 
          t5 as
          (
          select SUM(cast(violent_crime  as int))  as "2009"
          from statecrime2009
          ), 
          t6 as 
          (
          select SUM(cast(violent_crime  as int))  as "2010"
          from statecrime2010
          ), 
          t7 as 
          (
          select SUM(cast(violent_crime  as int))  as "2011"
          from statecrime2011
          ),
          t8 as
          (
          select SUM(cast(violent_crime  as int))  as "2012"
          from statecrime2012
          ), 
          t9 as 
          (
          select SUM(cast(violent_crime  as int))  as "2013"
          from statecrime2013
          ), 
          t10 as 
          (
          select SUM(cast(violent_crime  as int))  as "2014"
          from statecrime2014
          ), 
          t11 as 
          (
          select SUM(cast(violent_crime  as int))  as "2015"
          from statecrime2015
          ), 
          t12 as 
          (
          select SUM(cast(violent_crime  as int))  as "2016"
          from statecrime2016
          ),
          t13 as
          (
          select SUM(cast(violent_crime  as int))  as "2017"
          from statecrime2017
          ), 
          t14 as
          (
          select SUM(cast(violent_crime  as int))  as "2018"
          from statecrime2018
          ), 
          t15 as 
          (select SUM(cast(violent_crime  as int))  as "2019"
          from statecrime2019
          )
          select t1."2005", t2."2006", t3."2007", t4."2008", t5."2009", t6."2010", t7."2011", t8."2012", t9."2013", t10."2014", t11."2015", t12."2016", t13."2017", t14."2018", t15."2019" 
          from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15
        `,{},
          { outFormat: oracledb.OBJECT },
          function (err, result) {
            if (err) {
              console.error(err.message);
              response.status(500).send("Error getting data from DB");
              doRelease(connection);
              return;
            }
          // console.log("RESULTSET:" + JSON.stringify(result));
            var SQLresult = [];
            result.rows.forEach(function (element) {
              SQLresult.push(element)
              //  violent.push({ murder: element.MURDER, forcible_rape: element.FORCIBLE_RAPE, 
              //                  roberry: element.ROBBERY, aggravated_assault: element.AGGRAVATED_ASSAULT, 
              //                  rows: element.rows});
            }, this);
          
            response.json(SQLresult);
            console.log(SQLresult)
            doRelease(connection);
          });
        }else if(request.body.crime_type==="property"){
          connection.execute(`with t1 as
          (
          select SUM(cast(property_crime as int))  as "2005"
          from statecrime2005
          ), 
          t2 as
          (
          select SUM(cast(property_crime  as int))  as "2006"
          from statecrime2006
          ), 
          t3 as 
          (
          select SUM(cast(property_crime  as int))  as "2007"
          from statecrime2007
          ),
          t4 as
          (
          select SUM(cast(property_crime  as int))  as "2008"
          from statecrime2008
          ), 
          t5 as
          (
          select SUM(cast(property_crime  as int))  as "2009"
          from statecrime2009
          ), 
          t6 as 
          (
          select SUM(cast(property_crime  as int))  as "2010"
          from statecrime2010
          ), 
          t7 as 
          (
          select SUM(cast(property_crime  as int))  as "2011"
          from statecrime2011
          ),
          t8 as
          (
          select SUM(cast(property_crime  as int))  as "2012"
          from statecrime2012
          ), 
          t9 as 
          (
          select SUM(cast(property_crime  as int))  as "2013"
          from statecrime2013
          ), 
          t10 as 
          (
          select SUM(cast(property_crime  as int))  as "2014"
          from statecrime2014
          ), 
          t11 as 
          (
          select SUM(cast(property_crime  as int))  as "2015"
          from statecrime2015
          ), 
          t12 as 
          (
          select SUM(cast(property_crime  as int))  as "2016"
          from statecrime2016
          ),
          t13 as
          (
          select SUM(cast(property_crime  as int))  as "2017"
          from statecrime2017
          ), 
          t14 as
          (
          select SUM(cast(property_crime  as int))  as "2018"
          from statecrime2018
          ), 
          t15 as 
          (select SUM(cast(property_crime  as int))  as "2019"
          from statecrime2019
          )
          select t1."2005", t2."2006", t3."2007", t4."2008", t5."2009", t6."2010", t7."2011", t8."2012", t9."2013", t10."2014", t11."2015", t12."2016", t13."2017", t14."2018", t15."2019" 
          from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15
        `,{},
          { outFormat: oracledb.OBJECT },
          function (err, result) {
            if (err) {
              console.error(err.message);
              response.status(500).send("Error getting data from DB");
              doRelease(connection);
              return;
            }
          // console.log("RESULTSET:" + JSON.stringify(result));
            var SQLresult = [];
            result.rows.forEach(function (element) {
              SQLresult.push(element)
              //  violent.push({ murder: element.MURDER, forcible_rape: element.FORCIBLE_RAPE, 
              //                  roberry: element.ROBBERY, aggravated_assault: element.AGGRAVATED_ASSAULT, 
              //                  rows: element.rows});
            }, this);
          
            response.json(SQLresult);
            console.log(SQLresult)
            doRelease(connection);
          });
        }
    });
  }
  //case2.2: property and state are selected
  

if(request.body.query){
  oracledb.getConnection(dbConfig, function (err, connection) {
    if (err) {
      console.error(err.message);
      response.status(500).send("Error connecting to DB");
      return;
    }

    console.log("After connection");
    //murder
    if(request.body.query==="query1"){
    connection.execute(`with t1 as
    (
    select (SUM(murder) + SUM(forcible_rape) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larceny_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2005"
    from university2005
    where university like '%University of Florida%'
    ), 
    t2 as
    (
    select (SUM(murder) + SUM(forcible_rape) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larceny_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2006"
    from university2006
    where university like '%University of Florida%'
    ), 
    t3 as 
    (
    select (SUM(murder) + SUM(forcible_rape) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larceny_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2007"
    from university2007
    where university like '%University of Florida%'
    ),
    t4 as
    (
    select (SUM(murder) + SUM(forcible_rape) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larceny_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2008"
    from university2008
    where university like '%University of Florida%'
    ), 
    t5 as
    (
    select (SUM(murder_and_nonnegligent_manslaughter) + SUM(forcible_rape) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larceny_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2009"
    from university2009
    where university like '%University of Florida%'
    ), 
    t6 as 
    (
    select (SUM(murder_and_nonnegligent_manslaughter) + SUM(forcible_rape) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larcency_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2010"
    from university2010
    where university like '%University of Florida%'
    ), 
    t7 as 
    (
    select (SUM(murder_and_nonnegligent_manslaughter) + SUM(forcible_rape) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larcency_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2011"
    from university2011
    where university like '%University of Florida%'
    ),
    t8 as
    (
    select (SUM(murder_and_nonnegligent_manslaughter) + SUM(forcible_rape) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larcency_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2012"
    from university2012
    where university like '%University of Florida%'
    ), 
    t9 as 
    (
    select (SUM(murder_and_nonnegligent_manslaughter) + SUM(rape_revised) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larcency_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2013"
    from university2013
    where university like '%University of Florida%'
    ), 
    t10 as 
    (
    select (SUM(murder_and_nonnegligent_manslaughter) + SUM(rape_revised) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larcency_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2014"
    from university2014
    where university like '%University of Florida%'
    ), 
    t11 as 
    (
    select (SUM(murder_and_nonnegligent_manslaughter) + SUM(rape_revised) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larcency_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2015"
    from university2015
    where university like '%University of Florida%'
    ), 
    t12 as 
    (
    select (SUM(murder) + SUM(rape) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larceny_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2017"
    from university2017
    where university like '%University of Florida%'
    ),
    t13 as
    (
    select (SUM(murder_and_nonnegligent_manslaughter) + SUM(rape) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larceny_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2018"
    from university2018
    where university like '%University of Florida%'
    ), 
    t14 as
    (
    select (SUM(murder) + SUM(rape) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larceny_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2019"
    from university2019
    where university like '%University of Florida%'
    ), 
    t15 as
    (
    select (SUM(murder_and_nonnegligent_manslaughter) + SUM(rape_revised) + SUM(robbery) + SUM(aggravated_assault) + SUM(burglary)
    + SUM(larcency_theft) + SUM(motor_vehicle_theft) + SUM(arson)) / SUM(student_enrollment) * 100 as "2016"
    from university2016
    where university like '%University of Florida%'
    )
    select t1."2005", t2."2006", t3."2007", t4."2008", t5."2009", t6."2010", t7."2011", t8."2012", t9."2013", t10."2014", t11."2015", t15."2016",t12."2017", t13."2018", t14."2019"
    from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14,t15
    
    `,{},
      { outFormat: oracledb.OBJECT },
      function (err, result) {
        if (err) {
          console.error(err.message);
          response.status(500).send("Error getting data from DB");
          doRelease(connection);
          return;
        }
      // console.log("RESULTSET:" + JSON.stringify(result));
        var SQLresult = [];
        result.rows.forEach(function (element) {
          SQLresult.push(element)
          //  violent.push({ murder: element.MURDER, forcible_rape: element.FORCIBLE_RAPE, 
          //                  roberry: element.ROBBERY, aggravated_assault: element.AGGRAVATED_ASSAULT, 
          //                  rows: element.rows});
        }, this);
      
        response.json(SQLresult);
        console.log(SQLresult)
        doRelease(connection);
      });
    }else if(request.body.query==="query2"){
      connection.execute(`with t1 as(
        select statecrime2005.region, statecrime2005.state, (SUM(murder2005.total_firearms)/SUM(statecrime2005.murder)) * 100 as rate05
        from statecrime2005
        join murder2005 on murder2005.state = statecrime2005.state
        group by statecrime2005.region, statecrime2005.state
        order by statecrime2005.region
        
        ), 
        t2 as 
        (
        select statecrime2006.region, statecrime2006.state, (SUM(murder2006.total_firearms)/SUM(statecrime2006.murder)) * 100 as rate06
        from statecrime2006
        join murder2006 on murder2006.state = statecrime2006.state
        group by statecrime2006.region, statecrime2006.state
        order by statecrime2006.region
        ), 
        t3 as 
        (
        select statecrime2007.region, statecrime2007.state, (SUM(murder2007.total_firearms)/SUM(statecrime2007.murder)) * 100 as rate07
        from statecrime2007
        join murder2007 on murder2007.state = statecrime2007.state
        group by statecrime2007.region, statecrime2007.state
        order by statecrime2007.region
        ), 
        t4 as 
        (
        select statecrime2008.region, statecrime2008.state, (SUM(murder2008.total_firearms)/SUM(statecrime2008.murder)) * 100 as rate08
        from statecrime2008
        join murder2008 on murder2008.state = statecrime2008.state
        group by statecrime2008.region, statecrime2008.state
        order by statecrime2008.region
        ), 
        t5 as 
        (
        select statecrime2009.region, statecrime2009.state, (SUM(murder2009.total_firearms)/SUM(statecrime2009.murder)) * 100 as rate09
        from statecrime2009
        join murder2009 on murder2009.state = statecrime2009.state
        group by statecrime2009.region, statecrime2009.state
        order by statecrime2009.region
        ), 
        t6 as 
        (
        select statecrime2005.region, statecrime2005.state, (SUM(murder2005.total_firearms)/SUM(statecrime2005.murder)) * 100 as rate10
        from statecrime2005
        join murder2005 on murder2005.state = statecrime2005.state
        group by statecrime2005.region, statecrime2005.state
        order by statecrime2005.region
        ), 
        t7 as (
        select statecrime2008.region, statecrime2008.state, (SUM(murder2008.total_firearms)/SUM(statecrime2008.murder)) * 100 as rate11
        from statecrime2008
        join murder2008 on murder2008.state = statecrime2008.state
        group by statecrime2008.region, statecrime2008.state
        order by statecrime2008.region
        ), 
        t8 as 
        (
        select statecrime2017.region, statecrime2017.state, (SUM(murder2017.total_firearms)/SUM(statecrime2017.murder)) * 100 as rate12
        from statecrime2017
        join murder2017 on murder2017.state = statecrime2017.state
        group by statecrime2017.region, statecrime2017.state
        order by statecrime2017.region
        ), 
        t9 as 
        (
        select statecrime2017.region, statecrime2017.state, (SUM(murder2017.total_firearms)/SUM(statecrime2017.murder)) * 100 as rate13
        from statecrime2017
        join murder2017 on murder2017.state = statecrime2017.state
        group by statecrime2017.region, statecrime2017.state
        order by statecrime2017.region
        ), 
        t10 as 
        (
        select statecrime2007.region, statecrime2007.state, (SUM(murder2007.total_firearms)/SUM(statecrime2007.murder)) * 100 as rate14
        from statecrime2007
        join murder2007 on murder2007.state = statecrime2007.state
        group by statecrime2007.region, statecrime2007.state
        order by statecrime2007.region
        ), 
        t11 as 
        (
        select statecrime2009.region, statecrime2009.state, (SUM(murder2009.total_firearms)/SUM(statecrime2009.murder)) * 100 as rate15
        from statecrime2009
        join murder2009 on murder2009.state = statecrime2009.state
        group by statecrime2009.region, statecrime2009.state
        order by statecrime2009.region
        ), 
        t13 as 
        (
        select statecrime2017.region, statecrime2017.state, (SUM(murder2017.total_firearms)/SUM(statecrime2017.murder)) * 100 as rate17
        from statecrime2017
        join murder2017 on murder2017.state = statecrime2017.state
        group by statecrime2017.region, statecrime2017.state
        order by statecrime2017.region
        ), 
        t14 as (
        select statecrime2018.region, statecrime2018.state, (SUM(murder2018.total_firearms)/SUM(statecrime2018.murder)) * 100 as rate18
        from statecrime2018
        join murder2018 on murder2018.state = statecrime2018.state
        group by statecrime2018.region, statecrime2018.state
        order by statecrime2018.region
        ), 
        t15 as (
        select statecrime2019.region, statecrime2019.state,(SUM(murder2019.total_firearms)/SUM(statecrime2019.murder)) * 100 as rate19
        from statecrime2019
        join murder2019 on murder2019.state = statecrime2019.state
        group by statecrime2019.region, statecrime2019.state
        order by statecrime2019.region
        )
        select t1.region, SUM(t1.rate05)/ COUNT(*) as "2005" , SUM(t2.rate06)/ COUNT(*) as "2006", SUM(t3.rate07)/ COUNT(*) as "2007", SUM(t4.rate08)/ COUNT(*) as "2008", SUM(t5.rate09)/ COUNT(*) as "2009",  SUM(t6.rate10)/ COUNT(*) as "2010", 
         SUM(t7.rate11)/ COUNT(*) as "2011",  SUM(t8.rate12)/ COUNT(*) as "2012",  SUM(t9.rate13)/ COUNT(*) as "2013",  SUM(t10.rate14)/ COUNT(*) as "2014",  SUM(t11.rate15)/ COUNT(*) as "2015",  SUM(t13.rate17)/ COUNT(*) as "2017",
          SUM(t14.rate18)/ COUNT(*) as "2018",  SUM(t15.rate19)/ COUNT(*) as "2019"
        from t1, t2, t3
        ,t4, t5, t6, t7, t8, t9 , t10, t11, t13, t14, t15
        where t1.state = t2.state and t1.state = t3.state and t1.state = t4.state and t1.state = t5.state and t1.state = t6.state and t1.state = t7.state and t1.state = t8.state and t1.state = t9.state and t1.state = t10.state and 
        t1.state = t11.state and t1.state = t13.state and t1.state = t14.state and t1.state = t15.state
        and t1.region = t3.region and t1.region = t2.region and t1.region = t4.region and t1.region = t5.region and t1.region = t6.region and
        t1.region = t7.region and t1.region = t8.region and t1.region = t9.region and t1.region = t10.region and t1.region = t11.region and t1.region = t13.region and t1.region = t14.region and t1.region = t15.region and t1.region in ('Midwest', 'South', 'West', 'Northeast')
        group by t1.region        
      `,{},
        { outFormat: oracledb.OBJECT },
        function (err, result) {
          if (err) {
            console.error(err.message);
            response.status(500).send("Error getting data from DB");
            doRelease(connection);
            return;
          }
        // console.log("RESULTSET:" + JSON.stringify(result));
          var SQLresult = [];
          result.rows.forEach(function (element) {
            SQLresult.push(element)
            //  violent.push({ murder: element.MURDER, forcible_rape: element.FORCIBLE_RAPE, 
            //                  roberry: element.ROBBERY, aggravated_assault: element.AGGRAVATED_ASSAULT, 
            //                  rows: element.rows});
          }, this);
        
          response.json(SQLresult);
          console.log(SQLresult)
          doRelease(connection);
        });
      }else if(request.body.query==="query3"){
        connection.execute(`${"WHITE:"} 
        with t1 as(
        select ((SUM(raceminor2005.white) + SUM(raceadult2005.white)) / (SUM(raceminor2005.total)+ SUM(raceadult2005.total))) * 100  as "2005"
        from raceminor2005
        join raceadult2005 on raceminor2005.offense_charged = raceadult2005.offense_charged
        where raceminor2005.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t2 as 
        (
        select ((SUM(raceminor2006.white) + SUM(raceadult2006.white)) / (SUM(raceminor2006.total)+ SUM(raceadult2006.total))) * 100  as "2006"
        from raceminor2006
        join raceadult2006 on raceminor2006.offense_charged = raceadult2006.offense_charged
        where raceminor2006.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t3 as 
        (
        select ((SUM(raceminor2007.white) + SUM(raceadult2007.white)) / (SUM(raceminor2007.total)+ SUM(raceadult2007.total))) * 100  as "2007"
        from raceminor2007
        join raceadult2007 on raceminor2007.offense_charged = raceadult2007.offense_charged
        where raceminor2007.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t4 as 
        (
        select ((SUM(raceminor2008.white) + SUM(raceadult2008.white)) / (SUM(raceminor2008.total)+ SUM(raceadult2008.total))) * 100  as "2008"
        from raceminor2008
        join raceadult2008 on raceminor2008.offense_charged = raceadult2008.offense_charged
        where raceminor2008.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t5 as 
        (
        select ((SUM(raceminor2009.white) + SUM(raceadult2009.white)) / (SUM(raceminor2009.total)+ SUM(raceadult2009.total))) * 100  as "2009"
        from raceminor2009
        join raceadult2009 on raceminor2009.offense_charged = raceadult2009.offense_charged
        where raceminor2009.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t6 as 
        (
        select ((SUM(raceminor2010.white) + SUM(raceadult2010.white)) / (SUM(raceminor2010.total)+ SUM(raceadult2010.total))) * 100  as "2010"
        from raceminor2010
        join raceadult2010 on raceminor2010.offense_charged = raceadult2010.offense_charged
        where raceminor2010.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t7 as (
        select ((SUM(raceminor2011.white) + SUM(raceadult2011.white)) / (SUM(raceminor2011.total)+ SUM(raceadult2011.total))) * 100  as "2011"
        from raceminor2011
        join raceadult2011 on raceminor2011.offense_charged = raceadult2011.offense_charged
        where raceminor2011.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t8 as 
        (
        select ((SUM(raceminor2012.white) + SUM(raceadult2012.white)) / (SUM(raceminor2012.total)+ SUM(raceadult2012.total))) * 100  as "2012"
        from raceminor2012
        join raceadult2012 on raceminor2012.offense_charged = raceadult2012.offense_charged
        where raceminor2012.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t9 as 
        (
        select ((SUM(raceminor2013.white) + SUM(raceadult2013.white)) / (SUM(raceminor2013.total)+ SUM(raceadult2013.total))) * 100  as "2013"
        from raceminor2013
        join raceadult2013 on raceminor2013.offense_charged = raceadult2013.offense_charged
        where raceminor2013.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t10 as 
        (
        select ((SUM(raceminor2014.white) + SUM(raceadult2014.white)) / (SUM(raceminor2014.total)+ SUM(raceadult2014.total))) * 100  as "2014"
        from raceminor2014
        join raceadult2014 on raceminor2014.offense_charged = raceadult2014.offense_charged
        where raceminor2014.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t11 as 
        (
        select ((SUM(raceminor2015.white) + SUM(raceadult2015.white)) / (SUM(raceminor2015.total)+ SUM(raceadult2015.total))) * 100  as "2015"
        from raceminor2015
        join raceadult2015 on raceminor2015.offense_charged = raceadult2015.offense_charged
        where raceminor2015.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t13 as 
        (
        select ((SUM(raceminor2017.white) + SUM(raceadult2017.white)) / (SUM(raceminor2017.total)+ SUM(raceadult2017.total))) * 100  as "2017"
        from raceminor2017
        join raceadult2017 on raceminor2017.offense_charged = raceadult2017.offense_charged
        where raceminor2017.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t14 as (
        select ((SUM(raceminor2018.white) + SUM(raceadult2018.white)) / (SUM(raceminor2018.total)+ SUM(raceadult2018.total))) * 100  as "2018"
        from raceminor2018
        join raceadult2018 on raceminor2018.offense_charged = raceadult2018.offense_charged
        where raceminor2018.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t15 as (
        select ((SUM(raceminor2019.white) + SUM(raceadult2019.white)) / (SUM(raceminor2019.total)+ SUM(raceadult2019.total))) * 100  as "2019"
        from raceminor2019
        join raceadult2019 on raceminor2019.offense_charged = raceadult2019.offense_charged
        where raceminor2019.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        )
        select * 
        from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t13, t14, t15
        
        
        
        
        ${"BLACK:"} 
        with t1 as(
        select ((SUM(raceminor2005.black) + SUM(raceadult2005.black)) / (SUM(raceminor2005.total)+ SUM(raceadult2005.total))) * 100  as "2005"
        from raceminor2005
        join raceadult2005 on raceminor2005.offense_charged = raceadult2005.offense_charged
        where raceminor2005.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t2 as 
        (
        select ((SUM(raceminor2006.black) + SUM(raceadult2006.black)) / (SUM(raceminor2006.total)+ SUM(raceadult2006.total))) * 100  as "2006"
        from raceminor2006
        join raceadult2006 on raceminor2006.offense_charged = raceadult2006.offense_charged
        where raceminor2006.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t3 as 
        (
        select ((SUM(raceminor2007.black) + SUM(raceadult2007.black)) / (SUM(raceminor2007.total)+ SUM(raceadult2007.total))) * 100  as "2007"
        from raceminor2007
        join raceadult2007 on raceminor2007.offense_charged = raceadult2007.offense_charged
        where raceminor2007.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t4 as 
        (
        select ((SUM(raceminor2008.black) + SUM(raceadult2008.black)) / (SUM(raceminor2008.total)+ SUM(raceadult2008.total))) * 100  as "2008"
        from raceminor2008
        join raceadult2008 on raceminor2008.offense_charged = raceadult2008.offense_charged
        where raceminor2008.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t5 as 
        (
        select ((SUM(raceminor2009.black) + SUM(raceadult2009.black)) / (SUM(raceminor2009.total)+ SUM(raceadult2009.total))) * 100  as "2009"
        from raceminor2009
        join raceadult2009 on raceminor2009.offense_charged = raceadult2009.offense_charged
        where raceminor2009.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t6 as 
        (
        select ((SUM(raceminor2010.black) + SUM(raceadult2010.black)) / (SUM(raceminor2010.total)+ SUM(raceadult2010.total))) * 100  as "2010"
        from raceminor2010
        join raceadult2010 on raceminor2010.offense_charged = raceadult2010.offense_charged
        where raceminor2010.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t7 as (
        select ((SUM(raceminor2011.black) + SUM(raceadult2011.black)) / (SUM(raceminor2011.total)+ SUM(raceadult2011.total))) * 100  as "2011"
        from raceminor2011
        join raceadult2011 on raceminor2011.offense_charged = raceadult2011.offense_charged
        where raceminor2011.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t8 as 
        (
        select ((SUM(raceminor2012.black) + SUM(raceadult2012.black)) / (SUM(raceminor2012.total)+ SUM(raceadult2012.total))) * 100  as "2012"
        from raceminor2012
        join raceadult2012 on raceminor2012.offense_charged = raceadult2012.offense_charged
        where raceminor2012.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t9 as 
        (
        select ((SUM(raceminor2013.black) + SUM(raceadult2013.black)) / (SUM(raceminor2013.total)+ SUM(raceadult2013.total))) * 100  as "2013"
        from raceminor2013
        join raceadult2013 on raceminor2013.offense_charged = raceadult2013.offense_charged
        where raceminor2013.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t10 as 
        (
        select ((SUM(raceminor2014.black) + SUM(raceadult2014.black)) / (SUM(raceminor2014.total)+ SUM(raceadult2014.total))) * 100  as "2014"
        from raceminor2014
        join raceadult2014 on raceminor2014.offense_charged = raceadult2014.offense_charged
        where raceminor2014.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t11 as 
        (
        select ((SUM(raceminor2015.black) + SUM(raceadult2015.black)) / (SUM(raceminor2015.total)+ SUM(raceadult2015.total))) * 100  as "2015"
        from raceminor2015
        join raceadult2015 on raceminor2015.offense_charged = raceadult2015.offense_charged
        where raceminor2015.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t13 as 
        (
        select ((SUM(raceminor2017.black) + SUM(raceadult2017.black)) / (SUM(raceminor2017.total)+ SUM(raceadult2017.total))) * 100  as "2017"
        from raceminor2017
        join raceadult2017 on raceminor2017.offense_charged = raceadult2017.offense_charged
        where raceminor2017.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t14 as (
        select ((SUM(raceminor2018.black) + SUM(raceadult2018.black)) / (SUM(raceminor2018.total)+ SUM(raceadult2018.total))) * 100  as "2018"
        from raceminor2018
        join raceadult2018 on raceminor2018.offense_charged = raceadult2018.offense_charged
        where raceminor2018.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t15 as (
        select ((SUM(raceminor2019.black) + SUM(raceadult2019.black)) / (SUM(raceminor2019.total)+ SUM(raceadult2019.total))) * 100  as "2019"
        from raceminor2019
        join raceadult2019 on raceminor2019.offense_charged = raceadult2019.offense_charged
        where raceminor2019.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        )
        select * 
        from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t13, t14, t15
        
        
        
        
        
        
        
        ${"ASIAN:"} 
        with t1 as(
        select ((SUM(raceminor2005.asian) + SUM(raceadult2005.asian)) / (SUM(raceminor2005.total)+ SUM(raceadult2005.total))) * 100  as "2005"
        from raceminor2005
        join raceadult2005 on raceminor2005.offense_charged = raceadult2005.offense_charged
        where raceminor2005.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t2 as 
        (
        select ((SUM(raceminor2006.asian) + SUM(raceadult2006.asian)) / (SUM(raceminor2006.total)+ SUM(raceadult2006.total))) * 100  as "2006"
        from raceminor2006
        join raceadult2006 on raceminor2006.offense_charged = raceadult2006.offense_charged
        where raceminor2006.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t3 as 
        (
        select ((SUM(raceminor2007.asian) + SUM(raceadult2007.asian)) / (SUM(raceminor2007.total)+ SUM(raceadult2007.total))) * 100  as "2007"
        from raceminor2007
        join raceadult2007 on raceminor2007.offense_charged = raceadult2007.offense_charged
        where raceminor2007.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t4 as 
        (
        select ((SUM(raceminor2008.asian) + SUM(raceadult2008.asian)) / (SUM(raceminor2008.total)+ SUM(raceadult2008.total))) * 100  as "2008"
        from raceminor2008
        join raceadult2008 on raceminor2008.offense_charged = raceadult2008.offense_charged
        where raceminor2008.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t5 as 
        (
        select ((SUM(raceminor2009.asian) + SUM(raceadult2009.asian)) / (SUM(raceminor2009.total)+ SUM(raceadult2009.total))) * 100  as "2009"
        from raceminor2009
        join raceadult2009 on raceminor2009.offense_charged = raceadult2009.offense_charged
        where raceminor2009.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t6 as 
        (
        select ((SUM(raceminor2010.asian) + SUM(raceadult2010.asian)) / (SUM(raceminor2010.total)+ SUM(raceadult2010.total))) * 100  as "2010"
        from raceminor2010
        join raceadult2010 on raceminor2010.offense_charged = raceadult2010.offense_charged
        where raceminor2010.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t7 as (
        select ((SUM(raceminor2011.asian) + SUM(raceadult2011.asian)) / (SUM(raceminor2011.total)+ SUM(raceadult2011.total))) * 100  as "2011"
        from raceminor2011
        join raceadult2011 on raceminor2011.offense_charged = raceadult2011.offense_charged
        where raceminor2011.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t8 as 
        (
        select ((SUM(raceminor2012.asian) + SUM(raceadult2012.asian)) / (SUM(raceminor2012.total)+ SUM(raceadult2012.total))) * 100  as "2012"
        from raceminor2012
        join raceadult2012 on raceminor2012.offense_charged = raceadult2012.offense_charged
        where raceminor2012.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t9 as 
        (
        select ((SUM(raceminor2013.asian) + SUM(raceadult2013.asian)) / (SUM(raceminor2013.total)+ SUM(raceadult2013.total))) * 100  as "2013"
        from raceminor2013
        join raceadult2013 on raceminor2013.offense_charged = raceadult2013.offense_charged
        where raceminor2013.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t10 as 
        (
        select ((SUM(raceminor2014.asian) + SUM(raceadult2014.asian)) / (SUM(raceminor2014.total)+ SUM(raceadult2014.total))) * 100  as "2014"
        from raceminor2014
        join raceadult2014 on raceminor2014.offense_charged = raceadult2014.offense_charged
        where raceminor2014.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t11 as 
        (
        select ((SUM(raceminor2015.asian) + SUM(raceadult2015.asian)) / (SUM(raceminor2015.total)+ SUM(raceadult2015.total))) * 100  as "2015"
        from raceminor2015
        join raceadult2015 on raceminor2015.offense_charged = raceadult2015.offense_charged
        where raceminor2015.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t13 as 
        (
        select ((SUM(raceminor2017.asian) + SUM(raceadult2017.asian)) / (SUM(raceminor2017.total)+ SUM(raceadult2017.total))) * 100  as "2017"
        from raceminor2017
        join raceadult2017 on raceminor2017.offense_charged = raceadult2017.offense_charged
        where raceminor2017.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t14 as (
        select ((SUM(raceminor2018.asian) + SUM(raceadult2018.asian)) / (SUM(raceminor2018.total)+ SUM(raceadult2018.total))) * 100  as "2018"
        from raceminor2018
        join raceadult2018 on raceminor2018.offense_charged = raceadult2018.offense_charged
        where raceminor2018.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        ), 
        t15 as (
        select ((SUM(raceminor2019.asian) + SUM(raceadult2019.asian)) / (SUM(raceminor2019.total)+ SUM(raceadult2019.total))) * 100  as "2019"
        from raceminor2019
        join raceadult2019 on raceminor2019.offense_charged = raceadult2019.offense_charged
        where raceminor2019.offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
        )
        select * 
        from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t13, t14, t15
        
        `,{},
          { outFormat: oracledb.OBJECT },
          function (err, result) {
            if (err) {
              console.error(err.message);
              response.status(500).send("Error getting data from DB");
              doRelease(connection);
              return;
            }
          // console.log("RESULTSET:" + JSON.stringify(result));
            var SQLresult = [];
            result.rows.forEach(function (element) {
              SQLresult.push(element)
              //  violent.push({ murder: element.MURDER, forcible_rape: element.FORCIBLE_RAPE, 
              //                  roberry: element.ROBBERY, aggravated_assault: element.AGGRAVATED_ASSAULT, 
              //                  rows: element.rows});
            }, this);
          
            response.json(SQLresult);
            console.log(SQLresult)
            doRelease(connection);
          });
        }else if(request.body.query==="query4"){
          connection.execute(`${"MALE METRO:"}

          with t1 as(
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100  as "2005"
          from metro2005
          where column1 in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t2 as
          (select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2006"
          from metro2006
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t3 as
          (
          select (SUM(MALE_TOTAL) / SUM(MALE_UNDER_18)) * 100 AS "2007"
          from metro2007
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t4 as
          (select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2008"
          from metro2008
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t5 as
          (
          select(SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2009"
          from metro2009
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t6 as
          (
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2010"
          from metro2010
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t7 as (
          select (SUM(male_under18)/ SUM(MALE_TOTAL)) * 100 as "2011"
          from metro2011
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t8 as
          (
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2012"
          from metro2012
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t9 as
          (
          select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2013"
          from metro2013
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t10 as
          (
          select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2014"
          from metro2014
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t11 as
          (
          select(SUM(MALE_UNDER_18)/ SUM(MALE_TOTAL)) * 100 as "2015"
          from metro2015
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Rape', 'Robbery', 'Aggravated assault')
          ),
          t13 as
          (select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2017"
          from metro2017
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t14 as (
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2018"
          from metro2018
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t15 as (
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL_)) * 100 as "2019"
          from metro2019
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          )
          select *
          from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t13, t14, t15
          
          
          ${"MALE NONMETRO:"}
          with t1 as(
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100  as "2005"
          from nonmetro2005
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t2 as
          (select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2006"
          from nonmetro2006
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t3 as
          (
          select (SUM(MALE_TOTAL) / SUM(MALE_UNDER_18)) * 100 AS "2007"
          from nonmetro2007
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t4 as
          (select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2008"
          from nonmetro2008
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t5 as
          (
          select(SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2009"
          from nonmetro2009
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t6 as
          (
          select  (SUM(male_under18)/ SUM(MALE_TOTAL)) * 100 as "2010"
          from nonmetro2010
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t7 as (
          select (SUM(male_under18)/ SUM(MALE_TOTAL)) * 100 as "2011"
          from nonmetro2011
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t8 as
          (
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2012"
          from nonmetro2012
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t9 as
          (
          select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2013"
          from nonmetro2013
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t10 as
          (
          select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2014"
          from nonmetro2014
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t11 as
          (
          select(SUM(MALE_UNDER_18)/ SUM(MALE_TOTAL)) * 100 as "2015"
          from nonmetro2015
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Rape', 'Robbery', 'Aggravated assault')
          ),
          t13 as
          (select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2017"
          from nonmetro2017
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t14 as (
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2018"
          from nonmetro2018
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t15 as (
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2019"
          from nonmetro2019
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          )
          select *
          from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t13, t14, t15
          
          
          
          
          
          
          ${"MALE SUBURBAN:"}
          with t1 as(
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100  as "2005"
          from suburban2005
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t2 as
          (select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2006"
          from suburban2006
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t3 as
          (
          select (SUM(MALE_TOTAL) / SUM(MALE_UNDER_18)) * 100 AS "2007"
          from suburban2007
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t4 as
          (select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2008"
          from suburban2008
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t5 as
          (
          select(SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2009"
          from suburban2009
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t6 as
          (
          select  (SUM(male_under18)/ SUM(MALE_TOTAL)) * 100 as "2010"
          from suburban2010
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t7 as (
          select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2011"
          from suburban2011
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t8 as
          (
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2012"
          from suburban2012
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t9 as
          (
          select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2013"
          from suburban2013
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t10 as
          (
          select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2014"
          from suburban2014
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t11 as
          (
          select(SUM(MALE_UNDER_18)/ SUM(MALE_TOTAL)) * 100 as "2015"
          from suburban2015
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Rape', 'Robbery', 'Aggravated assault')
          ),
          t13 as
          (select (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2017"
          from suburban2017
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t14 as (
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2018"
          from suburban2018
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ),
          t15 as (
          select  (SUM(male_under_18)/ SUM(MALE_TOTAL)) * 100 as "2019"
          from suburban2019
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          )
          select *
          from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t13, t14, t15
          
          ${"FEMALE METRO: "}
          with t1 as(
          select  (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100  as "2005"
          from METRO2005
          where column1 in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t2 as 
          (select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2006"
          from METRO2006
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t3 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 AS "2007"
          from METRO2007
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t4 as 
          (select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2008"
          from METRO2008
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t5 as 
          (
          select(SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2009"
          from METRO2009
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t6 as 
          (
          select  (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2010"
          from METRO2010
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t7 as (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2011"
          from METRO2011
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t8 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2012"
          from METRO2012
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t9 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2013"
          from METRO2013
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t10 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2014"
          from METRO2014
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t11 as 
          (
          select(SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2015"
          from METRO2015
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Rape', 'Robbery', 'Aggravated assault')
          ), 
          t13 as 
          (select(SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2017"
          from METRO2017
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Rape2', 'Robbery', 'Aggravated assault')
          ), 
          t14 as (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2018"
          from METRO2018
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t15 as (
          select  (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2019"
          from METRO2019
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          )
          select * 
          from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t13, t14, t15
          
          ${"FEMALE NON METRO:"}
          with t1 as(
          select  (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100  as "2005"
          from nonmetro2005
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t2 as 
          (select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2006"
          from nonmetro2006
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t3 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 AS "2007"
          from nonmetro2007
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t4 as 
          (select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2008"
          from nonmetro2008
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t5 as 
          (
          select(SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2009"
          from nonmetro2009
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t6 as 
          (
          select  (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2010"
          from nonmetro2010
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t7 as (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2011"
          from nonmetro2011
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t8 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2012"
          from nonmetro2012
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t9 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2013"
          from nonmetro2013
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t10 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2014"
          from nonmetro2014
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t11 as 
          (
          select(SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2015"
          from nonmetro2015
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Rape', 'Robbery', 'Aggravated assault')
          ), 
          t13 as 
          (select(SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2017"
          from nonmetro2017
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Rape2', 'Robbery', 'Aggravated assault')
          ), 
          t14 as (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2018"
          from nonmetro2018
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t15 as (
          select  (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2019"
          from nonmetro2019
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          )
          select * 
          from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t13, t14, t15
          
          
          ${"FEMALE SUBURBAN:"}
          with t1 as(
          select  (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100  as "2005"
          from suburban2005
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t2 as 
          (select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2006"
          from suburban2006
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t3 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 AS "2007"
          from suburban2007
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t4 as 
          (select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2008"
          from suburban2008
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t5 as 
          (
          select(SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2009"
          from suburban2009
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t6 as 
          (
          select  (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2010"
          from suburban2010
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t7 as (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2011"
          from suburban2011
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t8 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2012"
          from suburban2012
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t9 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2013"
          from suburban2013
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t10 as 
          (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2014"
          from suburban2014
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t11 as 
          (
          select(SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2015"
          from suburban2015
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Rape', 'Robbery', 'Aggravated assault')
          ), 
          t13 as 
          (select(SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2017"
          from suburban2017
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Rape2', 'Robbery', 'Aggravated assault')
          ), 
          t14 as (
          select (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2018"
          from suburban2018
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          ), 
          t15 as (
          select  (SUM(FEMALE_UNDER_18)/ SUM(FEMALE_TOTAL)) * 100 as "2019"
          from suburban2019
          where offense_charged in ('Murder and nonnegligent manslaughter', 'Forcible rape', 'Robbery', 'Aggravated assault')
          )
          select * 
          from t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t13, t14, t15
          
          `,{},
            { outFormat: oracledb.OBJECT },
            function (err, result) {
              if (err) {
                console.error(err.message);
                response.status(500).send("Error getting data from DB");
                doRelease(connection);
                return;
              }
            // console.log("RESULTSET:" + JSON.stringify(result));
              var SQLresult = [];
              result.rows.forEach(function (element) {
                SQLresult.push(element)
                //  violent.push({ murder: element.MURDER, forcible_rape: element.FORCIBLE_RAPE, 
                //                  roberry: element.ROBBERY, aggravated_assault: element.AGGRAVATED_ASSAULT, 
                //                  rows: element.rows});
              }, this);
            
              response.json(SQLresult);
              console.log(SQLresult)
              doRelease(connection);
            });
          }else if(request.body.query==="query5"){
            connection.execute(`with t1 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2005
            ), 
            t2 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2005
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t3 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2006
            ), 
            t4 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2006
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t5 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2007
            ), 
            t6 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2007
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t7 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2008
            ), 
            t8 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2008
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t9 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2009
            ), 
            t10 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2009
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t11 as 
            (
            select (SUM(male_under18) + SUM(female_under18)) as totaljuveniles
            from cities2010
            ), 
            t12 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2010
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t13 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2011
            ), 
            t14 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2011
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t15 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2012
            ), 
            t16 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2012
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t17 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2013
            ), 
            t18 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2013
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t19 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2014
            ), 
            t20 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2014
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t21 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2015
            ), 
            t22 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2015
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t23 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2017
            ), 
            t24 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2017
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t25 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2018
            ), 
            t26 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2018
            where population_group LIKE '%TOTAL CITIES%'
            ), 
            t27 as 
            (
            select (SUM(male_under_18) + SUM(female_under_18)) as totaljuveniles
            from cities2019
            ), 
            t28 as 
            (
            select (REFERRED_TO_CRIMINAL_OR_ADULT_COURT / TOTAL) as rate
            from popgroup2019
            where population_group LIKE '%TOTAL CITIES%'
            )
            select (t1.totaljuveniles *  t2.rate) as "2005", (t3.totaljuveniles * t4.rate ) as "2006", (t5.totaljuveniles * t6.rate) as "2007", (t7.totaljuveniles * t8.rate) as "2008", (t9.totaljuveniles * t10.rate) as "2009", 
            (t11.totaljuveniles * t12.rate) as "2010", (t13.totaljuveniles * t14.rate) as "2011", (t15.totaljuveniles * t16.rate) as "2012", (t17.totaljuveniles * t18.rate) as "2013", (t19.totaljuveniles * t20.rate) as "2014", 
            (t21.totaljuveniles * t22.rate) as "2015" , (t23.totaljuveniles * t24.rate) as "2017", (t25.totaljuveniles * t26.rate) as "2018", (t27.totaljuveniles * t28.rate) as "2019"
            from t1, t2,t3,t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28
            
            `,{},
              { outFormat: oracledb.OBJECT },
              function (err, result) {
                if (err) {
                  console.error(err.message);
                  response.status(500).send("Error getting data from DB");
                  doRelease(connection);
                  return;
                }
              // console.log("RESULTSET:" + JSON.stringify(result));
                var SQLresult = [];
                result.rows.forEach(function (element) {
                  SQLresult.push(element)
                  //  violent.push({ murder: element.MURDER, forcible_rape: element.FORCIBLE_RAPE, 
                  //                  roberry: element.ROBBERY, aggravated_assault: element.AGGRAVATED_ASSAULT, 
                  //                  rows: element.rows});
                }, this);
              
                response.json(SQLresult);
                console.log(SQLresult)
                doRelease(connection);
              });
            }

    //robbery
    
    
      
  });
}

})//end of POST



//------------------------------------------
/*
todo: async/await, validate routers' parameters, set up REST client, 
add request logger, add test env, project structure
*/


  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})



    // //--------------------------------ORACLE

    // try {
    //   oracledb.initOracleClient({libDir: 'C:\\oracle\\instantclient_21_3'});
    // } catch (err) {
    //   console.error('Whoops!');
    //   console.error(err);
    //   process.exit(1);
    // }
    // async function run() {
    // let connection;
    // var i = 'test_example';
    // try {
    //   connection = await oracledb.getConnection(dbConfig);
    //   //adds table to oracle db in sql dev
    //   const stmts = [
          
    //     ];
    
    //     for (const s of stmts) {
    //       try {
    //         await connection.execute(s);
    //       } catch (e) {
    //         if (e.errorNum != 942)
    //           console.error(e);
    //       }
    //     }
    
    //   } catch (err) {
    //   console.error(err);
    // }
    // }
    // run()
    
    // //------------------------------------------end oracle