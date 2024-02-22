import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      status: "ok",
      totalResults: 36,
      page : 1,
      articles: []
    //   articles: [
    //     {
    //       source: {
    //         id: null,
    //         name: "Harvard Crimson",
    //       },
    //       author: null,
    //       title:
    //         "Amid Backlash to Antisemitic Post, Harvard Professor Resigns as PSC Faculty Adviser, FSJP Member | News - Harvard Crimson",
    //       description:
    //         "Walter Johnson, a professor of History and African and African American Studies, resigned as a faculty adviser to the Harvard Undergraduate Palestine Solidarity Committee and from Faculty and Staff for Justice in Palestine after the groups faced a wave of bac…",
    //       url: "https://www.thecrimson.com/article/2024/2/21/walter-johnson-resigns-psc/",
    //       urlToImage:
    //         "https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2024/02/08/204900_1368437.jpg.2000x1333_q95_crop-smart_upscale.jpg",
    //       publishedAt: "2024-02-21T04:27:13Z",
    //       content:
    //         "Walter Johnson, a professor of History and of African and African American Studies, resigned as a faculty adviser to the Harvard Undergraduate Palestine Solidarity Committee and from Harvard Faculty … [+2798 chars]",
    //     },
    //     {
    //       source: {
    //         id: "espn",
    //         name: "ESPN",
    //       },
    //       author: null,
    //       title:
    //         "No. 15 Creighton halts No. 1 UConn's 14-game win streak - ESPN",
    //       description:
    //         "No. 15 Creighton knocked off UConn 85-66 Tuesday night for the program's first win over a No. 1-ranked team. In doing so, the Bluejays halted the longest active win streak in Division I at 14 games.",
    //       url: "https://www.espn.com/mens-college-basketball/story/_/id/39566531/creighton-knocks-uconn-ending-huskies-14-game-win-streak",
    //       urlToImage:
    //         "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0221%2Fr1293947_1296x729_16%2D9.jpg",
    //       publishedAt: "2024-02-21T04:00:00Z",
    //       content:
    //         "Feb 20, 2024, 11:00 PM ET\r\nOMAHA, Neb. -- Steven Ashworth scored 16 of his 20 points in the first half as Creighton built a double-digit lead, and the No. 15 Bluejays knocked off UConn 85-66 Tuesday … [+5527 chars]",
    //     },
    //     {
    //       source: {
    //         id: "cnn",
    //         name: "CNN",
    //       },
    //       author: "Eric Levenson",
    //       title:
    //         "2 men charged with murder in Kansas City Chiefs rally shooting - CNN",
    //       description:
    //         "Two men were charged with murder and other felony charges for their roles in the mass shooting after a Kansas City Chiefs championship rally last week, Jackson County Prosecutor Jean Peters Baker said Tuesday.",
    //       url: "https://www.cnn.com/2024/02/20/us/two-men-charged-with-murder-in-kansas-city-parade-shooting/index.html",
    //       urlToImage:
    //         "https://media.cnn.com/api/v1/images/stellar/prod/ap24045748627612.jpg?c=16x9&q=w_800,c_fill",
    //       publishedAt: "2024-02-21T03:16:00Z",
    //       content:
    //         "Two men were charged with murder and other felony charges for their roles in the mass shooting after a Kansas City Chiefs championship rally last week, Jackson County Prosecutor Jean Peters Baker sai… [+4657 chars]",
    //     },
    //     {
    //       source: {
    //         id: null,
    //         name: "BBC News",
    //       },
    //       author: null,
    //       title:
    //         "Audrii Cunningham: Police find body of missing 11-year-old Texas girl - BBC.com",
    //       description:
    //         "Police plan to charge a 42-year-old man with murder for Audrii Cunningham's death.",
    //       url: "https://www.bbc.com/news/world-us-canada-68355777",
    //       urlToImage:
    //         "https://ichef.bbci.co.uk/news/1024/branded_news/CD77/production/_132699525_whatsappimage2024-02-20at7.06.19pm.jpg",
    //       publishedAt: "2024-02-21T01:41:03Z",
    //       content:
    //         "By Bernd Debusmann JrBBC News, Washington\r\nAudrii Cunningham, 11, was reported missing on 15 February\r\nPolice have found the body of an 11-year-old Texas girl who went missing last week and are poise… [+2072 chars]",
    //     },
    //     {
    //       source: {
    //         id: null,
    //         name: "Yahoo Entertainment",
    //       },
    //       author: "Spencer Soper",
    //       title:
    //         "Bezos Wraps Up 50 Million Amazon Stock Sale Netting $8.5 Billion - Yahoo Finance",
    //       description:
    //         "(Bloomberg) -- Jeff Bezos unloaded 14 million Amazon.com Inc. shares worth about $2.4 billion, finishing in just nine trading days the plan he disclosed...",
    //       url: "https://finance.yahoo.com/news/bezos-wraps-50-million-amazon-011046525.html",
    //       urlToImage:
    //         "https://s.yimg.com/ny/api/res/1.2/hSYhZb5M8BaykRaYiOYf9A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzI-/https://media.zenfs.com/en/bloomberg_markets_842/568b01b300d2b8fc777661a2fef14c0a",
    //       publishedAt: "2024-02-21T01:10:00Z",
    //       content:
    //         "(Bloomberg) Jeff Bezos unloaded 14 million Amazon.com Inc. shares worth about $2.4 billion, finishing in just nine trading days the plan he disclosed earlier this month to sell up to 50 million share… [+913 chars]",
    //     },
    //     {
    //       source: {
    //         id: null,
    //         name: "CNBC",
    //       },
    //       author: "Julie Coleman",
    //       title:
    //         "CEO says Palo Alto Networks didn't lower its guidance due to lack of demand: 'There is no cybersecurity abyss' - CNBC",
    //       description:
    //         "Palo Alto Networks CEO Nikesh Arora reviewed the cybersecurity company's recent earnings report with CNBC's Jim Cramer.",
    //       url: "https://www.cnbc.com/2024/02/20/ceo-says-palo-alto-networks-didnt-lower-its-guidance-due-to-lack-of-demand.html",
    //       urlToImage:
    //         "https://image.cnbcfm.com/api/v1/image/107359476-1705414350755-1J7A9644.JPG?v=1705414425&w=1920&h=1080",
    //       publishedAt: "2024-02-21T01:02:00Z",
    //       content:
    //         "Palo Alto Networks CEO Nikesh Arora told CNBC's Jim Cramer the company didn't lower revenue guidance because it expects a lack of demand for cybersecurity products.\r\n\"There is no cybersecurity abyss.… [+1927 chars]",
    //     },
    //     {
    //       source: {
    //         id: null,
    //         name: "Page Six",
    //       },
    //       author: "Tamantha Ryan",
    //       title:
    //         "James Brown’s daughters explain how they forgave him for abusing wife Deidre Jenkins: 'Time to show grace' - Page Six",
    //       description:
    //         "“When you see a family member being hurt, you’re not feeling the best about the person that’s hurting them,” Yamma Brown told People in a new interview.",
    //       url: "https://pagesix.com/2024/02/20/entertainment/james-browns-daughters-explain-how-they-forgave-him-for-abusing-wife-deidre-jenkins/",
    //       urlToImage:
    //         "https://pagesix.com/wp-content/uploads/sites/3/2024/02/76860203.jpg?quality=75&strip=all&w=1024",
    //       publishedAt: "2024-02-21T00:51:00Z",
    //       content:
    //         "Deanna Brown Thomas and Yamma Brown, two of James Brown’s daughters, got candid about forgiving their father after witnessing him abuse their mom, Deidre Jenkins.\r\n“When you see a family member being… [+3327 chars]",
    //     },
    //     {
    //       source: {
    //         id: null,
    //         name: "BBC News",
    //       },
    //       author: null,
    //       title:
    //         "Space debris: 'Grandfather satellite' due to fall to Earth - BBC.com",
    //       description:
    //         "Europe's pioneering ERS-2 Earth observation spacecraft will make an uncontrolled dive to destruction.",
    //       url: "https://www.bbc.com/news/science-environment-68318273",
    //       urlToImage:
    //         "https://ichef.bbci.co.uk/news/1024/branded_news/9CA0/production/_132669004_ers-2_in_orbit.jpg",
    //       publishedAt: "2024-02-21T00:37:07Z",
    //       content:
    //         "Artwork: Europe's Earth Remote Sensing satellites weighed about 2.5 tonnes at launch\r\nA pioneering European satellite is due to fall to Earth in the coming hours.\r\nERS-2 was a cutting-edge observatio… [+4985 chars]",
    //     },
    //     {
    //       source: {
    //         id: "associated-press",
    //         name: "Associated Press",
    //       },
    //       author: "KIM CHANDLER",
    //       title:
    //         "Alabama Supreme Court rules frozen embryos are 'children' under state law - The Associated Press",
    //       description:
    //         "The Alabama Supreme Court has ruled that frozen embryos created during fertility treatments should be considered children under state law. Justices issued the ruling Friday in a pair of wrongful death cases brought by couples who had frozen embryos destroyed …",
    //       url: "https://apnews.com/article/alabama-supreme-court-from-embryos-161390f0758b04a7638e2ddea20df7ca",
    //       urlToImage:
    //         "https://dims.apnews.com/dims4/default/4639537/2147483647/strip/true/crop/5712x3213+0+536/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F48%2F6e%2Fdef65eee92e31eb8a5fc46036404%2F716b6b7041c04ff68452d83dc0f0f8aa",
    //       publishedAt: "2024-02-21T00:22:30Z",
    //       content:
    //         "MONTGOMERY, Ala. (AP) The Alabama Supreme Court has ruled that frozen embryos can be considered children under state law, a decision critics said could have sweeping implications for fertility treatm… [+5967 chars]",
    //     },
    //     {
    //       source: {
    //         id: "entertainment-weekly",
    //         name: "Entertainment Weekly",
    //       },
    //       author: "https://www.facebook.com/entertainmentweekly",
    //       title:
    //         "Beyoncé becomes first Black woman with No. 1 country song - Entertainment Weekly News",
    //       description:
    //         "Beyoncé just made country music history, becoming the first Black woman to top the country chart with her No. 1 song 'Texas Hold 'Em.'",
    //       url: "https://ew.com/beyonce-becomes-first-black-woman-with-country-no-1-hit-8597768",
    //       urlToImage:
    //         "https://ew.com/thmb/9ghIuv4HiiJCA3yBdKHykp1f0mQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beyonce-country-022024-f710da8cbea24a92860d08de9bd172e9.jpg",
    //       publishedAt: "2024-02-21T00:06:46Z",
    //       content:
    //         "After conquering the world with Renaissance, Beyoncé is continuing to make history with Act II.\r\nBillboard announced Tuesday that the Grammy winner hit No. 1 on the Hot Country Songs chart with her n… [+2734 chars]",
    //     },
    //     {
    //       source: {
    //         id: "bleacher-report",
    //         name: "Bleacher Report",
    //       },
    //       author: "Erin Walsh",
    //       title:
    //         "Report: Chiefs' Travis Kelce Traveling to Australia for Taylor Swift's Eras Tour - Bleacher Report",
    //       description:
    //         "It appears Kansas City Chiefs tight end Travis Kelce is headed to Australia to support Taylor Swift. Kelce is reportedly traveling to Australia to support…",
    //       url: "https://bleacherreport.com/articles/10110094-report-chiefs-travis-kelce-traveling-to-australia-for-taylor-swifts-eras-tour",
    //       urlToImage:
    //         "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1708471900/okjlpjx3pkawwfvxrrmb.jpg",
    //       publishedAt: "2024-02-20T23:50:55Z",
    //       content:
    //         "Set Number: X164496 TK1\r\nIt appears Kansas City Chiefs tight end Travis Kelce is headed to Australia to support Taylor Swift.\r\nKelce is reportedly traveling to Australia to support Swift during the l… [+930 chars]",
    //     },
    //     {
    //       source: {
    //         id: null,
    //         name: "PBS",
    //       },
    //       author: "William Brangham, Alexis Cox, Nana Adwoa Antwi-Boasiako",
    //       title:
    //         "Wikileaks founder Julian Assange makes last-ditch attempt to avoid U.S. extradition - PBS NewsHour",
    //       description:
    //         "A two-day hearing in a London court room began Tuesday over the fate of Wikileaks founder Julian Assange. At stake is whether he'll be extradited to the U.S. on espionage charges. Carrie DeCell, a senior staff attorney at the Knight First Amendment Institute,…",
    //       url: "https://www.pbs.org/newshour/show/wikileaks-founder-julian-assange-makes-last-ditch-attempt-to-avoid-u-s-extradition",
    //       urlToImage:
    //         "https://d3i6fh83elv35t.cloudfront.net/static/2024/02/assange-1024x706.jpg",
    //       publishedAt: "2024-02-20T23:50:45Z",
    //       content:
    //         "Jamil Jaffer:\r\nWell, one, he's not a U.S. citizen, so he doesn't actually have rights from the U.S. Constitution. Now, he's being brought here, prosecuted here. Presumably, those rights will apply on… [+1071 chars]",
    //     },
    //     {
    //       source: {
    //         id: "associated-press",
    //         name: "Associated Press",
    //       },
    //       author: "RALPH D. RUSSO, STEPHEN HAWKINS",
    //       title:
    //         "College Football Playoff approves 5+7 format and reduces spots for conference champions - The Associated Press",
    //       description:
    //         "The field for the 12-team College Football Playoff will comprise five conference champions and seven at-large selections after the university presidents who oversee the CFP voted unanimously to tweak the format. The move to decrease the number of spots reserv…",
    //       url: "https://apnews.com/article/cfp-expansion-33735d72577d17374d718e6c496983e6",
    //       urlToImage:
    //         "https://dims.apnews.com/dims4/default/c8447f9/2147483647/strip/true/crop/4831x2717+0+114/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F17%2F97%2F827d803c5be1e0a0f38308d0dd10%2F27fc44b46b574af3858892534c6f4e53",
    //       publishedAt: "2024-02-20T23:37:00Z",
    //       content:
    //         "The field for the 12-team College Football Playoff beginning next season will comprise five conference champions and seven at-large selections after the university presidents who oversee the CFP vote… [+3570 chars]",
    //     },
    //     {
    //       source: {
    //         id: null,
    //         name: "CBS Sports",
    //       },
    //       author: "",
    //       title:
    //         "2024 NFL Mock Draft: What a potential top 10 could look like if every team had to trade their original pick - CBS Sports",
    //       description: "A different type of mock draft!",
    //       url: "https://www.cbssports.com/nfl/news/2024-nfl-mock-draft-what-a-potential-top-10-could-look-like-if-every-team-had-to-trade-their-original-pick/",
    //       urlToImage:
    //         "https://sportshub.cbsistatic.com/i/r/2024/02/20/2f5e5c7c-cde8-41f8-8556-aed5df67782b/thumbnail/1200x675/5caf7387b7fad69be4e9a0d6f2ff4050/jayden-daniels.jpg",
    //       publishedAt: "2024-02-20T23:15:00Z",
    //       content:
    //         "Trades inside the top 10 often happen in the NFL Draft. But what if every team had to trade its original pick? What might the top 10 look like then? \r\nWell, that's what CBS Sports NFL Draft insider R… [+532 chars]",
    //     },
    //   ]
    };
  }

  async componentDidMount() {
    let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b715461f466243e08493b4f063c01ef9");
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults});
  }

  handelNext = async ()=>{
    // if(this.state.page + 1 < Math.ceil(this.state.totalResults / 20)){}
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b715461f466243e08493b4f063c01ef9&page=${this.state.page + 1}`);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
        this.setState({
            page: this.state.page + 1
    })
    console.log("Page number is : ", this.state.page);
// }
  }
  handelPrev = async()=>{
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b715461f466243e08493b4f063c01ef9&page=${this.state.page - 1}`);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    this.setState({
        page: this.state.page - 1
    })
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Hedlines</h2>
        <div className="row">
          {this.state.articles.map((elements) => {
            return (
              <div className="col-md-3 my-3" key={elements.url}>
                <NewsItems
                  title={elements.title ? elements.title : ""}
                  description={elements.description ? elements.description : ""}
                  imageUrl={elements.urlToImage}
                  newsUrl={elements.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPrev}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handelNext}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
