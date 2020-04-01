/**
 * Raw data is sourced from:
 * http://web.archive.org/web/20190502130432/http://www.pooreconomics.com/sites/all/themes/cents/data/country/js/data.min.js
 *
 * Visualization reference:
 * https://web.archive.org/web/20190414224929/http://www.pooreconomics.com/data/country/home
 */
export const DATA = {
  livingOn: [
    '$1 / day',
    '$2 / day',
    '$2-4 / day',
    '$6-10 / day'
  ],
  categories: [
    {
      cID: 0,
      name: 'Introduction'
    },
    {
      cID: 1,
      name: 'Consumption'
    },
    {
      cID: 2,
      name: 'Health'
    },
    {
      cID: 3,
      name: 'Education'
    },
    {
      cID: 4,
      name: 'Population'
    },
    {
      cID: 5,
      name: 'Risk'
    },
    {
      cID: 6,
      name: 'Microfinance'
    },
    {
      cID: 7,
      name: 'Savings'
    },
    {
      cID: 8,
      name: 'Entrepreneurship'
    }
  ],
  /**
   * These are extra information for each of the visualization category
   */
  eggs: [
    {
      eID: 0,
      cID: 0,
      lID: 2,
      pos: [-10, 332],
      title: '200 countries, 200 years, 4 minutes',
      url:
        'https://web.archive.org/web/20190502130432/http://www.gapminder.org/videos/200-years-that-changed-the-world-bbc/',
      quote:
        'Hans Rosling explains the history of wealth and income divergence over the last 200 years in four minutes.'
    },
    {
      eID: 1,
      cID: 0,
      lID: 0,
      pos: [18, 158],
      title: 'Counting the poor',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/4.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.princeton.edu/rpds/papers/pdfs/deaton_povertymeasured.pdf',
      quote:
        'The first step in eradicating poverty is measuring it. We must ask: Who is poor and who is not? Is poverty the same as hunger? How will we know whether the Millennium Development Goals have been met, or whether world poverty is falling at all? Angus Deaton addresses these questions.'
    },
    {
      eID: 2,
      cID: 0,
      lID: 3,
      pos: [30, 147],
      title:
        "Esther Duflo and Abhijit Banerjee talk Poor Economics on NPR's Planet Money",
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/6.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.npr.org/blogs/money/2011/06/08/137041672/the-tuesday-podcast-poor-economics',
      quote:
        'The authors talk bed nets, immunization, and improving education quality.'
    },
    {
      eID: 3,
      cID: 1,
      lID: 0,
      pos: [41, 308],
      cTitle: 'MOROCCO',
      title: 'Finding happiness from a tap',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/morrocowater.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://econ-www.mit.edu/files/6491',
      quote:
        'A study in Morocco finds that providing in-house water connections, while not directly affecting health outcomes, led to improved life satisfaction, reduced community conflict, and satisfaction with the product itself.'
    },
    {
      eID: 4,
      cID: 1,
      lID: 0,
      pos: [76, 97],
      cTitle: 'MEXICO',
      title: 'What does your floor mean to your kids?',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/9.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www-wds.worldbank.org/servlet/WDSContentServer/WDSP/IB/2007/08/28/000158349_20070828131650/Rendered/PDF/wps421401update1.pdf',
      quote:
        'A large-scale housing upgrade in Mexico, replacing dirt floors with cement, significantly improved the health of young children.'
    },
    {
      eID: 5,
      cID: 1,
      lID: 0,
      pos: [91, 568],
      cTitle: 'PHILIPPINES',
      title: 'How can you stop smoking? Lock your money up.',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/11.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/sites/default/files/publications/65%20Commitment%20Savings%20to%20Stop%20Smoking%20Oct%2010.pdf',
      quote:
        "Many of the poor would like to reduce their expenditures on temptation goods (alcohol, tobacco, sweets). But as you know, intentions don't always translate into action. A study in the Philippines finds that commitment mechanisms tied to financial penalties help people stop habits such as smoking. "
    },
    {
      eID: 6,
      cID: 1,
      lID: 0,
      pos: [122, 388],
      cTitle: 'KENYA',
      title: 'Free uniforms get kids in school',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/12.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/sites/default/files/publications/169%20new%20paper,%20november%202009.pdf',
      quote:
        'A program in Kenya was established to reduce the cost of schooling by distributing free school uniforms. The study finds that giving a school uniform reduced school absenteeism by 44 percent for the average student. Not only that, it also increased test scores for those who received a uniform.'
    },
    {
      eID: 7,
      cID: 1,
      lID: 0,
      pos: [190, 348],
      cTitle: 'SOUTH AFRICA',
      title: "A death's double depression",
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/13.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.nber.org/papers/w14998.pdf',
      quote:
        'A death in the family can mean losing a potential money earner; additionally, traditional funerals can be extremely expensive. A study in South Africa found that family spending in households that lost an adult in the past five years was approximately 20 percent lower than in households that did not, and those households were more vulnerable.'
    },
    {
      eID: 8,
      cID: 1,
      lID: 1,
      pos: [32, 141],
      title: 'Poverty is no longer synonymous with hunger',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/15.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.foreignpolicy.com/articles/2011/04/25/more_than_1_billion_people_are_hungry_in_the_world',
      quote:
        'The idea of the starving poor grabs headlines in a way that most poverty issues cannot, but the story of hunger is complex. Lack of calories alone may not be the most pressing issue for the poor; however, malnutrition is pervasive and detrimental. And this is not without consequences. There is a lot of evidence that children suffering from malnutrition generally grow into less successful adults.'
    },
    {
      eID: 9,
      cID: 1,
      lID: 0,
      pos: [28, 68],
      title: 'Are taller people smarter?',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/16.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.princeton.edu/~accase/downloads/Stature_and_Status.pdf',
      quote:
        'A controversial study found that  taller people earn more because of cognitive ability, not because of factors like self-esteem or social dominance. The children who grew more during early adolescence had higher cognitive test scores than those who grew more during late adolescence. The researchers attribute both height and cognitive abilities to good nutrition in early childhood.'
    },
    {
      eID: 10,
      cID: 2,
      lID: 1,
      pos: [45, 533],
      cTitle: 'CHINA',
      title: 'Do Giffen goods really exist?',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/17.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.freakonomics.com/2008/05/05/the-indiana-jones-of-economics-part-i/',
      quote:
        'Economists have never proven the existence of a Giffen good: a good that people buy less of as the price drops. Rob Jensen finds it in the most widely consumed food in the most populous nation — rice in China. Food subsidies there decreased the amount of rice people consumed as well as their overall nutrition.'
    },
    {
      eID: 11,
      cID: 2,
      lID: 0,
      pos: [42, 475],
      cTitle: 'INDIA',
      title: 'Empty clinics',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/18.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/sites/default/files/publications/137%20Health%20Care%20Delivery%20Rajasthan%20EPW%2004.pdf',
      quote:
        'A study of health care in rural India shows that the quality of public service is extremely low due to high levels of absenteeism. The poor have largely abandoned the public system, choosing instead to frequent expensive, unqualified private providers.'
    },
    {
      eID: 12,
      cID: 2,
      lID: 1,
      pos: [102, 388],
      title: 'The price is wrong',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/19.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/publication/the-price-is-wrong',
      quote:
        'Charging even very small user fees sharply limits access to preventive health care. For example, when a program in Kenya moved from free deworming to charging an average of 30 cents per child, take-up fell from 75 to 19 percent. These small fees are the worst of both worlds: They raise little revenue, and dramatically reduce access to important products for the poor.'
    },
    {
      eID: 13,
      cID: 2,
      lID: 2,
      pos: [120, 366],
      cTitle: 'UGANDA',
      title: 'Communities can improve health outcomes',
      url:
        'https://web.archive.org/web/20190502130432/http://techtv.mit.edu/collections/povertyactionlab:1890/videos/10494-martina-bjorkman-nyquest-j-pal-african-launch',
      quote:
        'Health staff absenteeism is a huge problem in many developing countries. A community monitoring program in Uganda showed better quality, more frequently utilized health services, and improved health outcomes.'
    },
    {
      eID: 14,
      cID: 2,
      lID: 0,
      pos: [70, 118],
      title: 'The long-lasting effects of undernutrition',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/21.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2258311/',
      quote:
        'Undernourishment during pregnancy can lead to permanent impairment, including lower human capital and a higher probability of chronic diseases.'
    },
    {
      eID: 15,
      cID: 2,
      lID: 2,
      pos: [32, 141],
      title: 'HarvestPlus: breeding better crops for better nutrition',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/22.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.harvestplus.org/',
      quote:
        'Most of the poor can eat enough calories to be productive. The real problem may lie in a shortage of micronutrients. This is especially true for two groups, unborn babies and children, who do not control what they eat. HarvestPlus works to address this issue.'
    },
    {
      eID: 16,
      cID: 2,
      lID: 4,
      pos: [122, 388],
      title: 'Cost-effective solutions for child diarrhea',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/policy-lessons/health/child-diarrhea',
      quote:
        'There are numerous ways to protect against diarrhea, including hand-washing and decontaminating water at the source and within the home. But which method is the most cost-effective? Programs that clean or protect water at the community level, rather than requiring individual behavior change, avert the most diarrhea cases per dollar spent.'
    },
    {
      eID: 17,
      cID: 2,
      lID: 1,
      pos: [62, 493],
      cTitle: 'INDIA',
      title:
        'Why do so many poor children miss out on essential immunizations?',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/24.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/publication/new-look-old-problem-why-do-so-many-poor-children-miss-out-essential-immunizations',
      quote:
        'Parents may not understand the benefits of preventive medicine, and even when they do, they may procrastinate in taking their child to get immunized. But when services were reliable and parents were given a small incentive to use them, immunization rates increased dramatically.'
    },
    {
      eID: 18,
      cID: 3,
      lID: 0,
      pos: [48, 517],
      cTitle: 'BANGLADESH',
      title:
        'Going from bad to worse: the unintended consequences of a public health campaign',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/25.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://econ-www.mit.edu/files/6541',
      quote:
        'After the discovery of arsenic in Bangladeshi groundwater, a public health campaign encouraged switching to surface water. The alternative sources, however, while being free of arsenic, contained pathogens, which researchers found caused significant increases in child mortality.'
    },
    {
      eID: 19,
      cID: 3,
      lID: 2,
      pos: [42, 475],
      cTitle: 'INDIA',
      title: 'Pratham: every child in school and learning well',
      url:
        'https://web.archive.org/web/20190502130432/http://www.youtube.com/watch?v=JU-HopQnnvI&feature=player_embedded#at=103',
      quote:
        "Pratham uses simple but effective solutions to address widespread issues of low education quality in India. Pratham's flagship program, Read India, has been scaled up across 19 states in India. In 2008 to 2009, 33 million children benefited from the remedial education program that research has shown can improve learning outcomes."
    },
    {
      eID: 20,
      cID: 3,
      lID: 0,
      pos: [131, 374],
      cTitle: 'MALAWI',
      title:
        'What part of a conditional cash transfer works? The condition or the cash?',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/27.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://siteresources.worldbank.org/EXTSAFETYNETSANDTRANSFERS/Resources/WPS5090.pdf',
      quote:
        'The cost of schooling has been shown to play a large role in enrollment decisions. Interventions that make education cheaper are key to ensuring that every child gets a chance. Financial transfers, even unconditional ones, have been effective in helping parents invest more in education.'
    },
    {
      eID: 21,
      cID: 3,
      lID: 0,
      pos: [62, 493],
      cTitle: 'INDIA',
      title: 'Giving girls opportunities',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/28.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://sticerd.lse.ac.uk/seminarpapers/dg01112010.pdf',
      quote:
        "School enrollment is extremely sensitive to families' information about the rates of return on education. When call centers began recruiting young women from rural villages in India, girls were more likely to be enrolled in school and have a higher body mass index. This indicates that families were more willing to invest in their daughters when they knew of lucrative opportunities for them."
    },
    {
      eID: 22,
      cID: 3,
      lID: 0,
      pos: [122, 388],
      cTitle: 'KENYA',
      title: 'Deworming kids has a huge impact on their future income ',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/guerucci.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/publication/worms-work-long-run-impacts-child-health-gains',
      quote:
        'In Kenya, children who were given deworming pills in school for two years went to school longer and earned, as young adults, 20 percent more than children in comparable schools who received deworming for just one year.'
    },
    {
      eID: 23,
      cID: 3,
      lID: 4,
      pos: [18, 161],
      title: "What's the best way to get kids in school?",
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/policy-lessons/education/student-attendance',
      quote:
        'There are many ways of increasing school enrollment and attendance, but there is a huge variation in the costs of different programs. To address absence among enrolled children, policies that focus on reducing barriers to attendance, such as malnutrition and intestinal worms, as well as policies that inform parents of the benefits of education, have proven both effective and low-cost.'
    },
    {
      eID: 24,
      cID: 4,
      lID: 0,
      pos: [38, 59],
      cTitle: 'USA',
      title: 'Back to the basics: a no-excuse approach to teaching',
      url:
        'https://web.archive.org/web/20190502130432/http://www.nber.org/papers/w15740.pdf',
      quote:
        'A group of &quot;No Excuse&quot; charter schools in the United States focuses on teaching the basics &mdash; and has seen promising results. An evaluation of such a school in Massachusetts found improvements in math and reading scores, especially for students who were furthest behind.'
    },
    {
      eID: 25,
      cID: 4,
      lID: 3,
      pos: [18, 161],
      title: "Will the number of poor grow with the world's population?",
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/32.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://onpoint.wbur.org/2011/05/04/fighting-global-poverty',
      quote:
        "Esther and Abhijit comment on the UN's predictions that the world's population will grow past 10 billion. Will increased population mean increased poverty? The share of poor in the world has been decreasing, but population growth is being driven by the poorest countries. What we do know is that, as people become more educated, they have fewer children. "
    },
    {
      eID: 26,
      cID: 4,
      lID: 0,
      pos: [87, 312],
      cTitle: 'BURKINA FASO',
      title: 'How do households really behave?',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/33.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.jstor.org/pss/2138950',
      quote:
        "Households may not always behave efficiently. A study of households in Burkina Faso found that plots farmed by women were given less fertilizer and less labor than plots farmed by men. Reallocating some of these inputs could have increased the families' production by 6 percent with no extra spending."
    },
    {
      eID: 27,
      cID: 4,
      lID: 0,
      pos: [45, 533],
      cTitle: 'CHINA',
      title: 'You can have quantity and quality too',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/34.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.nber.org/papers/w14973.pdf?new_window=1',
      quote:
        'People have long believed in the &quot;quantity-quality trade-off.&quot; That is, when people have more children, each child will be less healthy, educated, or productive because parents have fewer resources to devote to each. However, a study in China found that, when the one-child policy was relaxed to allow families with a girl to have a second child, the girls received more education, not less.'
    },
    {
      eID: 28,
      cID: 4,
      lID: 0,
      pos: [122, 388],
      cTitle: 'KENYA',
      title:
        'Stay away from Sugar Daddies: Teenagers respond to HIV risk information',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/35.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/doc/do-teenagers-respond-hiv-risk-information-evidence-field-experiment-kenya',
      quote:
        'When female students were informed that older men were more likely to be infected with HIV than younger ones, girls changed their behaviors: sharply cutting down sex with older men. They also were more likely to use protection when having sex with boys their own age. This reduced pregnancy rates overall.'
    },
    {
      eID: 29,
      cID: 4,
      lID: 0,
      pos: [165, 365],
      cTitle: 'ZAMBIA',
      title: 'Fertility and household bargaining',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/36.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/publication/household-bargaining-and-excess-fertility-experimental-study-zambia',
      quote:
        'Do men and women have the same fertility preferences? A study in Zambia found that take-up of contraceptives varied widely depending on whether a woman was offered the contraceptive in private or in the presence of her husband.'
    },
    {
      eID: 30,
      cID: 4,
      lID: 1,
      pos: [42, 475],
      title: '100 million missing women',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/37.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.nybooks.com/articles/archives/1990/dec/20/more-than-100-million-women-are-missing/',
      quote:
        'In the 1980s, in a now classic article in The New York Review of Books, Amartya Sen calculated that there were 100 million &quot;missing women&quot; in the world. This was before sex-selective abortion was available &mdash; and things have only gotten worse since.'
    },
    {
      eID: 31,
      cID: 5,
      lID: 2,
      pos: [165, 365],
      cTitle: 'ZAMBIA',
      title: 'The Society for Family Health in Zambia',
      url:
        'https://web.archive.org/web/20190502130432/http://techtv.mit.edu/collections/povertyactionlab:1890/videos/10505-mannasseh-phiri-j-pal-africa-launch',
      quote:
        'Mannasseh Phiri, executive director of the Society for Family Health in Zambia, talks about innovative ways to address reproductive health issues in Zambia. For example, researchers found that public recognition was more effective than financial incentives at motivating hairdressers to sell condoms to their clients.'
    },
    {
      eID: 32,
      cID: 5,
      lID: 0,
      pos: [42, 475],
      cTitle: 'INDIA',
      title: 'Need to decrease your risk? Get married.',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/39.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.jstor.org/pss/1832196',
      quote:
        'The poor have come up with ingenious ways to cope with the high levels of risk in their lives, including temporary migration, income diversification, and even marriage. Marriage, for example, links two families and thus creates social networks that both sides are able to call upon when in trouble.'
    },
    {
      eID: 33,
      cID: 5,
      lID: 0,
      pos: [94, 331],
      cTitle: 'NIGERIA',
      title:
        'When being a good neighbor means lending more than a cup of sugar',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/40.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://are.berkeley.edu/courses/ARE251/2003/papers/Udry.pdf',
      quote:
        'Informal insurance has sprung up in many places among community networks that are willing to help those who are having a bad time, in return for similar help when the roles are reversed.'
    },
    {
      eID: 34,
      cID: 5,
      lID: 0,
      pos: [62, 493],
      cTitle: 'INDIA',
      title: 'The surprising disinterest in crop insurance',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/41.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.hbs.edu/research/pdf/09-116.pdf',
      quote:
        'A study that offered weather insurance to farmers in India found extremely low take-up. One reason for this low demand may be that formal insurance is only good at covering catastrophic events, which does not correspond to the needs or expectations of the poor.'
    },
    {
      eID: 35,
      cID: 5,
      lID: 0,
      pos: [38, 59],
      cTitle: 'USA',
      title: 'The poor face huge income variation',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/42.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.stanford.edu/~jayachan/selling_labor_low.pdf',
      quote:
        'Agricultural wages in India are 21 times more variable than in the United States. This is not just a difference in income: American farmers are insured, receive subsidies, and benefit from standard social insurance programs.'
    },
    {
      eID: 36,
      cID: 6,
      lID: 1,
      pos: [32, 141],
      title: 'Microfinance to microinsurance',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/43.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.forbes.com/2008/11/26/aig-insurance-zurich-pf-ii-in_ak_1126soapbox_inl.html',
      quote:
        'Against the hopes of some capitalists, microinsurance may not be the next billion-client market opportunity. On the other hand, the poor clearly bear unacceptable levels of risk. Given the enormous potential gains that could be achieved if the poor reduced their risk, government subsidies should be used to help grow insurance markets in developing countries.'
    },
    {
      eID: 37,
      cID: 6,
      lID: 0,
      pos: [42, 475],
      cTitle: 'INDIA',
      title: "Microfinance works, but don't expect a miracle",
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/45.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/publication/miracle-microfinance-evidence-randomized-evaluation',
      quote:
        "An evaluation we did of an Indian microfinance institution, Spandana, found that microfinance was helping people start businesses and make large purchases, but had no effect on health, education, or women's empowerment."
    },
    {
      eID: 38,
      cID: 6,
      lID: 1,
      pos: [10, 45],
      title:
        'The unexpected backlash: scaling back expectations for microfinance',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/46.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://seattletimes.nwsource.com/html/opinion/2011545639_guest08helms.html',
      quote:
        'The microfinance institutions reacted very negatively to the results of our study, saying it gave an &quot;inaccurate impression&quot; of microfinance. We were surprised, since our evidence shows that microfinance is a useful financial product. But apparently that is not enough.'
    },
    {
      eID: 39,
      cID: 6,
      lID: 5,
      pos: [114, 152],
      title:
        "FINCA: financial services for the world's lowest income entrepreneurs",
      url: 'https://web.archive.org/web/20190502130432/http://www.finca.org',
      quote:
        'FINCA works globally to provide a variety of financial services to people living on less than $2 a day. It aims to create employment, raise family incomes, and reduce poverty worldwide.'
    },
    {
      eID: 40,
      cID: 6,
      lID: 1,
      pos: [62, 493],
      cTitle: 'INDIA',
      title: 'Help microfinance; don’t kill it',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/48.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.indianexpress.com/news/help-microfinance-dont-kill-it/716105/0',
      quote:
        'In fall 2010, the government of Andhra Pradesh, India, imposed wide-reaching regulations on microfinance institutions, causing mass defaults on loan repayments around the state. Such disruptions come at great cost both to the poor and to the financial institutions that have stepped in to work with them.'
    },
    {
      eID: 41,
      cID: 7,
      lID: 1,
      pos: [90, 568],
      cTitle: 'PHILIPPINES',
      title: 'Expanding access to microcredit',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/49.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://financialaccess.org/sites/default/files/B17_Expanding_Microenterprise_Credit_Access.pdf',
      quote:
        'Since microcredit was seen as a key tool to achieve the Millennium Development Goals, lending efforts have been concentrated on women. If we view it as a valuable financial product that the poor lack access to, the rationale for barring access no longer holds.'
    },
    {
      eID: 42,
      cID: 7,
      lID: 3,
      pos: [32, 141],
      title: 'Helping the poor save a bit at a time',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/50.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.npr.org/2010/11/22/131524116/helping-the-world-s-poor-save-a-bit-at-a-time',
      quote:
        'There is currently an important international effort, led by the Bill & Melinda Gates Foundation, to increase access to savings accounts. But the design of these accounts will be just as important as their presence. Additionally, savings accounts should not be seen as the &quot;silver bullet.&quot;'
    },
    {
      eID: 43,
      cID: 7,
      lID: 2,
      pos: [18, 153],
      title: 'Does worrying about money keep you poor?',
      url:
        'https://web.archive.org/web/20190502130432/http://www.youtube.com/watch?v=azqgURq_qWw',
      quote:
        'Stressing about finances adversely affects behavior. Sendhil Mullainathan hypothesizes that, when people are financially comfortable, they are more capable of making the &quot;right&quot; decisions.'
    },
    {
      eID: 44,
      cID: 7,
      lID: 2,
      pos: [96, 311],
      cTitle: 'GHANA',
      title: 'Saving for your dreams',
      url:
        'https://web.archive.org/web/20190502130432/http://www.youtube.com/watch?v=ZVr4ZtsXJso',
      quote:
        'A project in Ghana asks this question: Will people save more if they are reminded that they are saving for a specific goal? A similar project in Kenya that offered people separate savings accounts specifically for health-related expenditures was able to increase investment in health products by as much as 125 percent.'
    },
    {
      eID: 45,
      cID: 7,
      lID: 1,
      pos: [203, 611],
      title: 'Fighting yourself every step of the way',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/53.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.project-syndicate.org/commentary/singer70/English',
      quote:
        'It is difficult to forgo small purchases that would make you happy right now in order to save for an important purchase sometime in the distant future. Automatic savings accounts or financial products with commitment features help impose a discipline that savers might not have on their own.'
    },
    {
      eID: 46,
      cID: 7,
      lID: 0,
      pos: [122, 388],
      cTitle: 'KENYA',
      title: 'A well-timed nudge',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/54.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/evaluation/nudging-farmers-use-fertilizer-experimental-evidence-kenya',
      quote:
        'Enabling farmers to prepay for fertilizer when they have cash on hand was as effective as a heavy subsidy in promoting fertilizer use.'
    },
    {
      eID: 47,
      cID: 8,
      lID: 5,
      pos: [48, 517],
      cTitle: 'BANGLADESH',
      title: 'SafeSave: saving in the slums',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/55.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.safesave.org/',
      quote:
        'SafeSave provides reliable basic banking services to the very poor in Dhaka, Bangladesh. SafeSave offers a savings account to anyone living within walking area of a branch office, and accepts deposits or loan repayments as small as USD $0.02.'
    },
    {
      eID: 48,
      cID: 8,
      lID: 5,
      pos: [122, 388],
      title: 'Subsistence farming: Could you do it?',
      url:
        'https://web.archive.org/web/20190502130432/http://www.3rdworldfarmer.com/',
      quote:
        'A simplistic but to-the-point simulation game gives players the chance to try their hand at farming with very little capital, high risks, and low returns. How do you fare?'
    },
    {
      eID: 49,
      cID: 8,
      lID: 0,
      pos: [76, 97],
      cTitle: 'MEXICO',
      title: 'A stable job does wonders … for your height?',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/57.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://econ-www.mit.edu/files/6727',
      quote:
        'The children of Mexican women who had stable factory jobs were much taller than those born to similar women in different towns. In fact, this effect was so large that it bridged the entire height gap between a poor Mexican child and the &quot;norm&quot; for a well-fed American child.'
    },
    {
      eID: 50,
      cID: 8,
      lID: 0,
      pos: [139, 360],
      title: 'Turning proven technology into real gains',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/58.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://atai-research.org/',
      quote:
        'The Green Revolution increased agricultural productivity in many developing countries, but has been far from ubiquitous. A new research initiative tries to understand why proven technologies are not adopted, and to design cost-effective ways to ensure that technological advances translate into improved lives for the poor.'
    },
    {
      eID: 51,
      cID: 8,
      lID: 5,
      pos: [82, 409],
      title: 'Targeting the poorest of the poor',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/59.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://graduation.cgap.org/',
      quote:
        'A series of pilot programs in eight countries around the world, modeled after methodology used by the NGO BRAC in Bangladesh, seeks to understand how providing safety nets, livelihoods, and microfinance can help the poorest to graduate out of extreme poverty.'
    },
    {
      eID: 52,
      cID: 8,
      lID: 0,
      pos: [81, 164],
      cTitle: 'DOMINICAN REPUBLIC',
      title: 'Improving profits with simple rules of thumb',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/60.jpg',
      url:
        'https://web.archive.org/web/20190502130432/http://www.povertyactionlab.org/publication/keeping-it-simple-financial-literacy-and-rules-thumb',
      quote:
        'Promoting financial literacy through simple &quot;rule of thumb&quot; methods causes greater improvements in business practices and outcomes than a traditional principles-based course.'
    },
    {
      eID: 53,
      cID: 8,
      lID: 3,
      pos: [18, 161],
      title: 'Why do the businesses of the poor stay small?',
      imgUrl: '/sites/all/themes/cents/data/timeuse/img/de/61.jpg',
      url: '',
      quote:
        'Many of the poor open a business as an additional source of income for their family. However, they often cannot or do not invest the time or resources needed to make it grow. Furthermore, few banks are willing to give them loans that would enable growth. This is why we see millions of very small businesses that generate very little revenue.'
    }
  ],
  countries: [
    { title: 'Bangladesh', population: '158.5 M' },
    { title: 'Brazil', population: '203.4 M' },
    { title: 'Ecuador', population: '15 M' },
    { title: 'Ghana', population: '24.7 M' },
    { title: 'Guatemala', population: '13.8 M' },
    { title: 'India Hyderabad', population: '6.3 M' },
    { title: 'India Udaipur', population: '3 M' },
    { title: 'Indonesia', population: '245.6 M' },
    { title: 'Ivory Coast', population: '21.5 M' },
    { title: 'Mexico', population: '113.7 M' },
    { title: 'Morocco', population: '31.9 M' },
    { title: 'Nicaragua', population: '5.6 M' },
    { title: 'Pakistan', population: '187.3 M' },
    { title: 'Panama', population: '3.4 M' },
    { title: 'Papua New Guinea', population: '6.1 M' },
    { title: 'Peru', population: '29.2 M' },
    { title: 'South Africa', population: '49 M' },
    { title: 'Tanzania', population: '42.7 M' },
    { title: 'Timor Leste', population: '1.1 M' }
  ],
  questions: [
    {
      qID: 0,
      cID: 0,
      title: 'How Many Households Own Land?',
      title2: '% Households Owning Land'
    },
    {
      qID: 1,
      cID: 0,
      title: 'How Many Rooms Do Poor Homes Have?',
      title2: 'Rooms per Home'
    },
    {
      qID: 2,
      cID: 0,
      title: 'How Much Land Do the Poor Own?',
      title2: 'Ares (One-Hundredth of a Hectare) '
    },
    {
      qID: 3,
      cID: 0,
      title: 'How Many Households Have a Latrine?',
      title2: '% Households With Latrine'
    },
    {
      qID: 4,
      cID: 0,
      title: 'How Many Households Have Tap Water at Home?',
      title2: '% Households With Tap Water '
    },
    {
      qID: 5,
      cID: 0,
      title: 'How Many Households Have Electricity?',
      title2: '% Households With Electricity'
    },
    {
      qID: 6,
      cID: 0,
      title: 'How Many Households Have a Radio?',
      title2: '% Households With Radio'
    },
    {
      qID: 7,
      cID: 0,
      title: 'How Many Households Have a Bicycle?',
      title2: '% Households With Bicycle'
    },
    {
      qID: 8,
      cID: 0,
      title: 'How Many Households Have a TV?',
      title2: '% Households With TV'
    },
    {
      qID: 9,
      cID: 0,
      title: 'Percentage of Population in Each Consumption Group',
      title2: '% Population Within Consumption Groups'
    },
    {
      qID: 10,
      cID: 0,
      title: 'Per Capita Consumption',
      title2: 'Mean and Median per Capita Consumption in $ per Month'
    },
    {
      qID: 11,
      cID: 1,
      title: 'How Much Are the Poor Spending on Food?',
      title2: '% Monthly Budget Spent on Food'
    },
    {
      qID: 12,
      cID: 1,
      title: 'How Much Do the Poor Spend on Health?',
      title2: '% Monthly Budget Spent on Health'
    },
    {
      qID: 13,
      cID: 1,
      title: 'How Much Are the Poor Spending on Festivals?',
      title2: '% Monthly Budget Spent on Festivals'
    },
    {
      qID: 14,
      cID: 1,
      title: 'How Much Do the Poor Spend on Entertainment?',
      title2: '% Monthly Budget Spent on Entertainment'
    },
    {
      qID: 15,
      cID: 1,
      title: 'How Much Are the Poor Spending on Alcohol and Tobacco?',
      title2: '% Monthly Budget Spent on Alcohol, Tobacco'
    },
    {
      qID: 16,
      cID: 1,
      title: 'How Many Households Are Spending on Festivals?',
      title2: '% Households Spending on Festivals'
    },
    {
      qID: 17,
      cID: 1,
      title: 'How Much Are the Poor Spending on Education? ',
      title2: '% Monthly Budget Spent on Education'
    },
    {
      qID: 18,
      cID: 2,
      title: 'How Healthy Do the Poor Feel in Comparison to Other People?',
      title2: 'Standard Deviations From the Sample Mean'
    },
    {
      qID: 19,
      cID: 2,
      title:
        'In the Past Month, What Percentage of Household Members Were Sick?',
      title2: '% Household Members Sick in Last Month'
    },
    {
      qID: 20,
      cID: 2,
      title:
        'How Many Normal Daily Activities Are Women, Ages 20 to 45, Not Able to Do?',
      title2: '% Normal Daily Activities'
    },
    {
      qID: 21,
      cID: 2,
      title:
        'How Many Normal Daily Activities Are Men, Ages 20 to 45, Not Able to Do?',
      title2: '% Normal Daily Activities'
    },
    {
      qID: 22,
      cID: 2,
      title:
        'How Many Normal Daily Activities Are Women Over 45 Not Able to Do?',
      title2: '% Normal Daily Activities'
    },
    {
      qID: 23,
      cID: 2,
      title: 'How Many Normal Daily Activities Are Men Over 45 Not Able to Do?',
      title2: '% Normal Daily Activities'
    },
    {
      qID: 24,
      cID: 2,
      title:
        'In the Past Month, How Many Medical Consultations Did the Poor Have (on Average)?',
      title2: 'Medical Consultations in Past Month per Person'
    },
    {
      qID: 25,
      cID: 2,
      title:
        'In the Past Month, What Percentage of Households Met With a Public Health Care Provider at Least Once?',
      title2: '% Households Meeting Public Health Care Provider'
    },
    {
      qID: 26,
      cID: 2,
      title:
        'In the Past Month, What Percentage of Households Met With a Private Health Care Provider at Least Once?',
      title2: '% Households Meeting Private Health Care Provider'
    },
    {
      qID: 27,
      cID: 2,
      title:
        'What Is the Average Number of Children Ever Born (Including Mortalities)?',
      title2: 'Average Number of Children Ever Born (Including Mortalities)'
    },
    {
      qID: 28,
      cID: 2,
      title: 'What Percentage of Pregnancies Fail?',
      title2: '% Failed Pregnancies'
    },
    {
      qID: 29,
      cID: 2,
      title: 'How Many Children Are Immunized Against Measles?',
      title2: '% Children Immunized Against Measles'
    },
    {
      qID: 30,
      cID: 2,
      title: 'How Many Children Are Immunized Against Polio?',
      title2: '% Children Immunized Against Polio'
    },
    {
      qID: 31,
      cID: 2,
      title: 'How Many Children Die Before One Year of Age?',
      title2: '% Children Deceased Before One Year'
    },
    {
      qID: 32,
      cID: 2,
      title: 'How Many Children Die Before the Age of 5?',
      title2: '% Children Deceased Before Age 5'
    },
    {
      qID: 33,
      cID: 2,
      title: 'Height-for-Age Scores for the Poor',
      title2: 'Standard Deviations From the Sample Mean'
    },
    {
      qID: 34,
      cID: 2,
      title: 'How Many Live in a Household With Treated Water?',
      title2: '% Households With Treated Water'
    },
    {
      qID: 35,
      cID: 2,
      title: 'How Many People Drink Alcohol?',
      title2: '% People Who Drink Alcohol'
    },
    {
      qID: 36,
      cID: 2,
      title: 'How Many People Smoke?',
      title2: '% People Who Smoke'
    },
    {
      qID: 37,
      cID: 2,
      title: 'What Is the Body Mass Index (BMI) of Men Over Age 15?',
      title2: 'Body Mass Index (BMI), Men Over 15'
    },
    {
      qID: 38,
      cID: 2,
      title: 'What Is the Body Mass Index (BMI) of Women Over Age 15?',
      title2: 'Body Mass Index (BMI), Women Over 15'
    },
    {
      qID: 39,
      cID: 3,
      title: 'What Is the Literacy Rate?',
      title2: 'Literacy Rate'
    },
    {
      qID: 40,
      cID: 3,
      title: 'How Many Girls, Ages 7 to 12, Are in School?',
      title2: '% Girls, Ages 7 to 12, in School'
    },
    {
      qID: 41,
      cID: 3,
      title: 'How Many Boys, Ages 7 to 12, Are in School?',
      title2: '% Boys, Ages 7 to 12, in School'
    },
    {
      qID: 42,
      cID: 3,
      title: 'How Many Girls, Ages 13 to 18, Are in School?',
      title2: '% Girls, Ages 13 to 18, in School'
    },
    {
      qID: 43,
      cID: 3,
      title: 'How Many Boys, Ages 13 to 18, Are in School?',
      title2: '% Boys, Ages 13 to 18, in School'
    },
    {
      qID: 44,
      cID: 3,
      title: 'How Many Children, Ages 7 to 12, Are in Private Schools? ',
      title2: '% Children, Ages 7 to 12, in Private Schools'
    },
    {
      qID: 45,
      cID: 3,
      title: 'How Many Children, Ages 13 to 18, Are in Private Schools?',
      title2: '% Children, Ages 13 to 18, in Private Schools'
    },
    {
      qID: 46,
      cID: 4,
      title: 'How Many People Live in the Household?',
      title2: 'Average Number of People per Household'
    },
    {
      qID: 47,
      cID: 4,
      title: 'What Is the Average Number of Children Born?',
      title2: 'Average Number of Children Born'
    },
    {
      qID: 48,
      cID: 4,
      title: 'What Percentage of Pregnancies Fail?',
      title2: '% Failed Pregnancies'
    },
    {
      qID: 49,
      cID: 4,
      title: 'How Many Children Do Women Have?',
      title2: 'Average Number of Children per Woman'
    },
    {
      qID: 50,
      cID: 4,
      title: 'What Is the Ratio of Boys to Girls Born?',
      title2: 'Ratio of Boys to Girls Born'
    },
    {
      qID: 51,
      cID: 4,
      title:
        'What Is the Average Number of Children, Ages 0 to 12, per Household?',
      title2: 'Average Number of Children Ages 0 to 12'
    },
    {
      qID: 52,
      cID: 4,
      title:
        'What Is the Average Number Of Children, Ages 13 to 18, per Household?',
      title2: 'Average Number of Children Ages 13 to 18'
    },
    {
      qID: 53,
      cID: 5,
      title: 'How Many Households Have Any Kind of Insurance?',
      title2: '% Households With Insurance'
    },
    {
      qID: 54,
      cID: 5,
      title: 'How Many Households Have Health Insurance?',
      title2: '% Households With Health Insurance'
    },
    {
      qID: 55,
      cID: 5,
      title: 'How Many Households Have Life Insurance?',
      title2: '% Households With Life Insurance'
    },
    {
      qID: 56,
      cID: 6,
      title: 'How Many Households Have at Least One Loan?',
      title2: '% Households With at Least One Loan'
    },
    {
      qID: 57,
      cID: 6,
      title: 'How Much Are People Borrowing From Banks?',
      title2: '% Total Household Loans From Banks'
    },
    {
      qID: 58,
      cID: 6,
      title: 'How Much Are People Borrowing From Microcredit Institutions?',
      title2: '% Total Household Loans From Microcredit'
    },
    {
      qID: 59,
      cID: 6,
      title: 'How Much Are People Borrowing From Moneylenders?',
      title2: '% Total Household Loans From Moneylenders'
    },
    {
      qID: 60,
      cID: 6,
      title: 'How Much Are People Borrowing From Credit Unions?',
      title2: '% Total Household Loans From Credit Unions'
    },
    {
      qID: 61,
      cID: 6,
      title: 'How Much Are People Borrowing From Savings Groups?',
      title2: '% Total Household Loans From Savings Groups'
    },
    {
      qID: 62,
      cID: 6,
      title: 'How Much Are People Borrowing From Shopkeepers?',
      title2: '% Total Household Loans From Shopkeepers'
    },
    {
      qID: 63,
      cID: 6,
      title: 'How Much Are People Borrowing From Fellow Villagers?',
      title2: '% Total Household Loans From Villagers'
    },
    {
      qID: 64,
      cID: 6,
      title: 'How Much Are People Borrowing From Relatives?',
      title2: '% Total Household Loans From Relatives'
    },
    {
      qID: 65,
      cID: 6,
      title: 'How Much Are People Borrowing From Friends?',
      title2: '% Total Household Loans From Friends'
    },
    {
      qID: 66,
      cID: 6,
      title: 'How Much Are People Borrowing From Other Sources?',
      title2: '% Total Household Loans From Other Sources'
    },
    {
      qID: 67,
      cID: 7,
      title: 'How Many Households Have a Savings Account?',
      title2: '% Households With a Savings Account'
    },
    {
      qID: 68,
      cID: 8,
      title: 'How Many Households Have a Wage Earner?',
      title2: '% Households With a Wage Earner'
    },
    {
      qID: 69,
      cID: 8,
      title: 'How Many Households Have Someone Working in Agriculture?',
      title2: '% Households With Someone Working in Agriculture'
    },
    {
      qID: 70,
      cID: 8,
      title:
        'How Many Households Have at Least One Person Self-Employed in Agriculture?',
      title2: '% Households With 1+ Person Self-Employed in Agriculture'
    },
    {
      qID: 71,
      cID: 8,
      title:
        'How Many Households Have at Least One Person Self-Employed in Non-Agricultural Work?',
      title2:
        '% Households With 1+ Person Self-Employed in Non-Agricultural Work'
    },
    {
      qID: 72,
      cID: 8,
      title: 'How Many Hours Do Adults Ages 18 to 50 Work per Week?',
      title2: 'Hours Worked per Week, Adults Ages 18 to 50'
    },
    {
      qID: 73,
      cID: 8,
      title: 'How Many Hours Do Workers of All Ages Work per Week?',
      title2: 'Hours Worked per Week, Workers of All Ages'
    },
    {
      qID: 74,
      cID: 8,
      title: 'How Many Hours Do Men Ages 18 to 50 Work per Week?',
      title2: 'Hours Worked per Week, Men Ages 18 to 50'
    },
    {
      qID: 75,
      cID: 8,
      title: 'How Many Hours Do Men of All Ages Work per Week?',
      title2: 'Hours Worked per Week, Men of All Ages'
    },
    {
      qID: 76,
      cID: 8,
      title: 'How Many Hours Do Women Ages 18 to 50 Work per Week?',
      title2: 'Hours Worked per Week, Women Ages 18 to 50'
    },
    {
      qID: 77,
      cID: 8,
      title: 'How Many Hours Do Women of All Ages Work per Week?',
      title2: 'Hours Worked per Week, Women of All Ages'
    },
    {
      qID: 78,
      cID: 8,
      title: 'How Many of the Poor Are Paid Casually (Hourly or Daily)?',
      title2: ' % Poor Paid Casually (Hourly or Daily)'
    },
    {
      qID: 79,
      cID: 8,
      title: 'How Many Households Receive Income From Multiple Sectors?',
      title2: '% Households With Income From Multiple Sectors'
    },
    {
      qID: 80,
      cID: 8,
      title: 'How Many of the Poor Are Paid Weekly or Monthly?',
      title2: '% Poor Paid Weekly or Monthly'
    },
    {
      qID: 81,
      cID: 8,
      title: 'How Many Households Have at Least One Non-Agricultural Business?',
      title2: '% Households With at Least One Non-Agricultural Business'
    },
    {
      qID: 82,
      cID: 8,
      title: 'How Many Paid Employees Do These Businesses Have?',
      title2: 'Number of Paid Employees'
    },
    {
      qID: 83,
      cID: 8,
      title: 'How Many Total Employees Do These Businesses Have?',
      title2: 'Number of Total Employees'
    },
    {
      qID: 84,
      cID: 8,
      title: 'What Percentage of Businesses Own a Vehicle?',
      title2: '% Businesses Owning Vehicle'
    },
    {
      qID: 85,
      cID: 8,
      title: 'What Percentage of Businesses Own Machines? ',
      title2: '% Businesses Owning Machines'
    },
    {
      qID: 86,
      cID: 8,
      title: 'How Many of the Poor Have Migrated for Work?',
      title2: '% Poor Who Have Migrated for Work'
    },
    {
      qID: 87,
      cID: 8,
      title: 'How Many of the Poor Have Migrated Since Birth?',
      title2: '% Poor Who Have Migrated Since Birth'
    }
  ],
  /**
   * Values are first grouped into "Living on":
   * - $1 / day
   * - $2 / day
   * - $2-4 / day
   * - $6-10 / day
   *
   * Then for each group, the next grouping are division by:
   * - Rural
   * - Urban
   *
   * For example, for the answer for qID = 0 and cntryID = 1,
   *
   * - 41.6 is the value for those living on $2 / day and in Rural area
   * 
   * 
   * Zero means that data is not available for that group/country
   */
  answers: [
    {
      qID: 0,
      cntryID: 0,
      values: [
        [89.1, 0],
        [91.8, 0],
        [95.1, 0],
        [89.9, 0]
      ]
    },
    {
      qID: 0,
      cntryID: 1,
      values: [
        [43, 3.6],
        [41.6, 3.9],
        [34.3, 3.1],
        [27.4, 2.2]
      ]
    },
    {
      qID: 0,
      cntryID: 2,
      values: [
        [15.6, 28.5],
        [5.1, 28.5],
        [7.4, 32.2],
        [4.6, 29.4]
      ]
    },
    {
      qID: 0,
      cntryID: 3,
      values: [
        [20.8, 13.5],
        [28.5, 19.2],
        [40.9, 20.1],
        [29.3, 26.5]
      ]
    },
    {
      qID: 0,
      cntryID: 4,
      values: [
        [41.5, 0],
        [46.8, 0],
        [59.3, 0],
        [59.5, 0]
      ]
    },
    {
      qID: 0,
      cntryID: 5,
      values: [
        [0, 15],
        [0, 19.8],
        [0, 29.5],
        [0, 23.5]
      ]
    },
    {
      qID: 0,
      cntryID: 6,
      values: [
        [99, 0],
        [98.4, 0],
        [92.2, 0],
        [0, 0]
      ]
    },
    {
      qID: 0,
      cntryID: 7,
      values: [
        [50, 11.9],
        [52.8, 12.4],
        [49.7, 13.8],
        [45.1, 20.5]
      ]
    },
    {
      qID: 0,
      cntryID: 8,
      values: [
        [48.3, 31.7],
        [57.1, 30.7],
        [55, 16.6],
        [48.5, 7.9]
      ]
    },
    {
      qID: 0,
      cntryID: 9,
      values: [
        [46.5, 15.7],
        [44.8, 13.8],
        [43.4, 6.8],
        [33.5, 5]
      ]
    },
    {
      qID: 0,
      cntryID: 10,
      values: [
        [56.3, 0],
        [68.2, 0],
        [79.7, 0],
        [89.3, 0]
      ]
    },
    {
      qID: 0,
      cntryID: 11,
      values: [
        [49.5, 11.6],
        [48.2, 11],
        [43.8, 5.5],
        [32.1, 7.6]
      ]
    },
    {
      qID: 0,
      cntryID: 12,
      values: [
        [30.3, 1.3],
        [34.7, 1.6],
        [46.4, 7.3],
        [0, 4.5]
      ]
    },
    {
      qID: 0,
      cntryID: 13,
      values: [
        [79.4, 0],
        [63.4, 0],
        [39.1, 1.5],
        [28.1, 2.8]
      ]
    },
    {
      qID: 0,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 0,
      cntryID: 15,
      values: [
        [64.8, 0],
        [67.1, 8],
        [70.9, 6.9],
        [82.4, 1.4]
      ]
    },
    {
      qID: 0,
      cntryID: 16,
      values: [
        [2.4, 1],
        [6.1, 2],
        [10.8, 0.8],
        [11.5, 0.5]
      ]
    },
    {
      qID: 0,
      cntryID: 17,
      values: [
        [91.7, 77.9],
        [91.5, 65.1],
        [91.6, 48.9],
        [87.9, 37.9]
      ]
    },
    {
      qID: 0,
      cntryID: 18,
      values: [
        [96.8, 91.9],
        [93.8, 71.2],
        [89.8, 42.8],
        [0, 21.6]
      ]
    },
    {
      qID: 1,
      cntryID: 0,
      values: [
        [2.6, 0],
        [3.2, 0],
        [3.7, 0],
        [4.2, 0]
      ]
    },
    {
      qID: 1,
      cntryID: 1,
      values: [
        [5, 4.3],
        [5.3, 5],
        [6, 5.2],
        [6.6, 6.4]
      ]
    },
    {
      qID: 1,
      cntryID: 2,
      values: [
        [0, 0],
        [3.3, 4.4],
        [4.2, 4.7],
        [5.6, 5.8]
      ]
    },
    {
      qID: 1,
      cntryID: 3,
      values: [
        [2.4, 2.3],
        [2.3, 2.1],
        [1.9, 1.7],
        [2, 1.9]
      ]
    },
    {
      qID: 1,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 1,
      cntryID: 5,
      values: [
        [0, 1.9],
        [0, 2.2],
        [0, 2.7],
        [0, 3.4]
      ]
    },
    {
      qID: 1,
      cntryID: 6,
      values: [
        [1.8, 0],
        [2, 0],
        [3.5, 0],
        [0, 0]
      ]
    },
    {
      qID: 1,
      cntryID: 7,
      values: [
        [4.8, 5.5],
        [5, 5.6],
        [5.6, 6.3],
        [6.6, 7.6]
      ]
    },
    {
      qID: 1,
      cntryID: 8,
      values: [
        [6.7, 5.3],
        [5.5, 5.1],
        [5.2, 4.9],
        [5.2, 4.6]
      ]
    },
    {
      qID: 1,
      cntryID: 9,
      values: [
        [1.9, 2.1],
        [1.9, 2.1],
        [2.1, 2.2],
        [2.2, 2.4]
      ]
    },
    {
      qID: 1,
      cntryID: 10,
      values: [
        [4.1, 0],
        [4.1, 0],
        [4, 0],
        [4.8, 0]
      ]
    },
    {
      qID: 1,
      cntryID: 11,
      values: [
        [1.7, 1.5],
        [1.8, 2],
        [2.3, 2.6],
        [3.2, 3.2]
      ]
    },
    {
      qID: 1,
      cntryID: 12,
      values: [
        [2.2, 2.4],
        [2.4, 2.5],
        [2.9, 3],
        [0, 4.3]
      ]
    },
    {
      qID: 1,
      cntryID: 13,
      values: [
        [2.1, 0],
        [2.3, 0],
        [2.9, 3],
        [3.6, 3.5]
      ]
    },
    {
      qID: 1,
      cntryID: 14,
      values: [
        [3.2, 3.4],
        [3.3, 3.6],
        [4.1, 3.4],
        [0, 0]
      ]
    },
    {
      qID: 1,
      cntryID: 15,
      values: [
        [2.5, 0],
        [2.6, 2.9],
        [3.2, 3.3],
        [3.1, 4.1]
      ]
    },
    {
      qID: 1,
      cntryID: 16,
      values: [
        [3.9, 3.1],
        [4.3, 3.7],
        [4.5, 4],
        [3.7, 4.6]
      ]
    },
    {
      qID: 1,
      cntryID: 17,
      values: [
        [4.3, 3.7],
        [4.5, 4],
        [4.7, 3.9],
        [5, 3.8]
      ]
    },
    {
      qID: 1,
      cntryID: 18,
      values: [
        [2.9, 3],
        [3.1, 3.6],
        [3.4, 4.2],
        [0, 4.6]
      ]
    },
    {
      qID: 2,
      cntryID: 0,
      values: [
        [7.3, 0],
        [13.8, 0],
        [30.8, 0],
        [47.3, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 1,
      values: [
        [242, 90.8],
        [300, 90.8],
        [600.1, 1],
        [6485.6, 2500]
      ]
    },
    {
      qID: 2,
      cntryID: 2,
      values: [
        [70.6, 17.6],
        [141.1, 200],
        [38, 141.1],
        [200, 150]
      ]
    },
    {
      qID: 2,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 4,
      values: [
        [35.2, 0],
        [39.5, 0],
        [52.7, 0],
        [92.3, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 5,
      values: [
        [0, 60.7],
        [0, 41.1],
        [0, 40.5],
        [0, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 6,
      values: [
        [60, 0],
        [66.7, 0],
        [100, 0],
        [0, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 7,
      values: [
        [50, 25],
        [50, 25],
        [50, 50],
        [100, 95]
      ]
    },
    {
      qID: 2,
      cntryID: 8,
      values: [
        [400, 0],
        [500, 300],
        [500, 500],
        [700, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 10,
      values: [
        [0, 0],
        [300, 0],
        [400, 0],
        [500, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 11,
      values: [
        [280, 0],
        [420, 560],
        [840, 700],
        [0, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 12,
      values: [
        [161.9, 0],
        [161.9, 0],
        [242.8, 0],
        [0, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 13,
      values: [
        [300, 0],
        [300, 0],
        [400, 0],
        [700, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 15,
      values: [
        [150, 0],
        [150, 0],
        [200, 300],
        [300, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 2,
      cntryID: 17,
      values: [
        [172, 161.9],
        [182.1, 121.4],
        [182.1, 101.2],
        [121.4, 121.4]
      ]
    },
    {
      qID: 2,
      cntryID: 18,
      values: [
        [100, 100],
        [100, 100],
        [100, 100],
        [0, 0]
      ]
    },
    {
      qID: 3,
      cntryID: 0,
      values: [
        [0.6, 0],
        [3.6, 0],
        [5.8, 0],
        [25.4, 0]
      ]
    },
    {
      qID: 3,
      cntryID: 1,
      values: [
        [0.9, 22.4],
        [3.9, 43.6],
        [27.1, 71.3],
        [47.3, 89.9]
      ]
    },
    {
      qID: 3,
      cntryID: 2,
      values: [
        [0, 0],
        [42.9, 53.7],
        [73.3, 57],
        [95.3, 86.1]
      ]
    },
    {
      qID: 3,
      cntryID: 3,
      values: [
        [38.4, 27.3],
        [46.7, 26.2],
        [45, 35.8],
        [42.7, 47.3]
      ]
    },
    {
      qID: 3,
      cntryID: 4,
      values: [
        [51.5, 0],
        [51.5, 0],
        [60.7, 0],
        [73.2, 0]
      ]
    },
    {
      qID: 3,
      cntryID: 5,
      values: [
        [0, 69.3],
        [0, 72.4],
        [0, 75.9],
        [0, 75.2]
      ]
    },
    {
      qID: 3,
      cntryID: 6,
      values: [
        [0.4, 0],
        [1, 0],
        [19.4, 0],
        [0, 0]
      ]
    },
    {
      qID: 3,
      cntryID: 7,
      values: [
        [38.1, 53.6],
        [45.3, 65.4],
        [59, 84.8],
        [74.5, 92.1]
      ]
    },
    {
      qID: 3,
      cntryID: 8,
      values: [
        [10.5, 25.6],
        [13.7, 22.4],
        [20.6, 47.1],
        [30.3, 68.6]
      ]
    },
    {
      qID: 3,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 3,
      cntryID: 10,
      values: [
        [4.2, 0],
        [3.7, 0],
        [7.8, 0],
        [21.1, 0]
      ]
    },
    {
      qID: 3,
      cntryID: 11,
      values: [
        [0.4, 0],
        [0.9, 53.6],
        [7.4, 88.3],
        [0, 98.7]
      ]
    },
    {
      qID: 3,
      cntryID: 12,
      values: [
        [27.7, 82.3],
        [32.4, 86],
        [44.4, 92.9],
        [0, 94]
      ]
    },
    {
      qID: 3,
      cntryID: 13,
      values: [
        [45.1, 0],
        [61.6, 0],
        [90.7, 94.8],
        [98.4, 99.3]
      ]
    },
    {
      qID: 3,
      cntryID: 14,
      values: [
        [88.7, 0],
        [87.7, 86.8],
        [92.9, 83.1],
        [0, 0]
      ]
    },
    {
      qID: 3,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 3,
      cntryID: 16,
      values: [
        [59.6, 57.2],
        [67.1, 72.1],
        [78.8, 86],
        [85.7, 95.9]
      ]
    },
    {
      qID: 3,
      cntryID: 17,
      values: [
        [91.1, 94.6],
        [92.4, 97.1],
        [94.6, 97.8],
        [95.7, 97.5]
      ]
    },
    {
      qID: 3,
      cntryID: 18,
      values: [
        [26.7, 39.6],
        [25.1, 36.8],
        [20.5, 27.4],
        [0, 25.2]
      ]
    },
    {
      qID: 4,
      cntryID: 0,
      values: [
        [0, 0],
        [0.1, 0],
        [0.3, 0],
        [8.7, 0]
      ]
    },
    {
      qID: 4,
      cntryID: 1,
      values: [
        [7.5, 52.7],
        [17, 72.1],
        [57.5, 90.1],
        [76.9, 98.3]
      ]
    },
    {
      qID: 4,
      cntryID: 2,
      values: [
        [0, 0],
        [14.7, 1.1],
        [37.4, 15.6],
        [70.7, 54.9]
      ]
    },
    {
      qID: 4,
      cntryID: 3,
      values: [
        [1.5, 32.5],
        [3.9, 35.8],
        [15.6, 55.7],
        [39.5, 78.1]
      ]
    },
    {
      qID: 4,
      cntryID: 4,
      values: [
        [36.4, 0],
        [35.5, 0],
        [40.5, 0],
        [53.3, 0]
      ]
    },
    {
      qID: 4,
      cntryID: 5,
      values: [
        [0, 32.7],
        [0, 35.2],
        [0, 36.4],
        [0, 49.1]
      ]
    },
    {
      qID: 4,
      cntryID: 6,
      values: [
        [0, 0],
        [0.3, 0],
        [4.7, 0],
        [0, 0]
      ]
    },
    {
      qID: 4,
      cntryID: 7,
      values: [
        [7.6, 19.5],
        [9.8, 25],
        [13.9, 36.5],
        [25.8, 45.5]
      ]
    },
    {
      qID: 4,
      cntryID: 8,
      values: [
        [0.9, 9.5],
        [3.1, 9.1],
        [10.7, 23.6],
        [21, 56.5]
      ]
    },
    {
      qID: 4,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 4,
      cntryID: 10,
      values: [
        [4.4, 0],
        [14.5, 0],
        [11.2, 0],
        [23.4, 0]
      ]
    },
    {
      qID: 4,
      cntryID: 11,
      values: [
        [13.2, 47.8],
        [18.5, 68.1],
        [38.8, 85.7],
        [46.9, 95.9]
      ]
    },
    {
      qID: 4,
      cntryID: 12,
      values: [
        [9, 47.8],
        [12.6, 55],
        [17, 59.7],
        [0, 72.5]
      ]
    },
    {
      qID: 4,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 4,
      cntryID: 14,
      values: [
        [0.9, 29.9],
        [1.4, 53],
        [5.1, 78.1],
        [0, 0]
      ]
    },
    {
      qID: 4,
      cntryID: 15,
      values: [
        [28.7, 0],
        [26.1, 67],
        [24.6, 76.5],
        [32.3, 91.4]
      ]
    },
    {
      qID: 4,
      cntryID: 16,
      values: [
        [5.7, 40],
        [8.2, 60.3],
        [13, 81.9],
        [44.3, 95.7]
      ]
    },
    {
      qID: 4,
      cntryID: 17,
      values: [
        [0.5, 7.9],
        [1.2, 16.6],
        [3.6, 38.6],
        [7.2, 65.5]
      ]
    },
    {
      qID: 4,
      cntryID: 18,
      values: [
        [2, 9.9],
        [4.4, 22.3],
        [9.4, 40.2],
        [0, 0]
      ]
    },
    {
      qID: 5,
      cntryID: 0,
      values: [
        [3.7, 0],
        [8.3, 0],
        [21.8, 0],
        [32, 0]
      ]
    },
    {
      qID: 5,
      cntryID: 1,
      values: [
        [37.1, 95.6],
        [46.3, 97.5],
        [83.9, 99.1],
        [94.5, 99.9]
      ]
    },
    {
      qID: 5,
      cntryID: 2,
      values: [
        [0, 0],
        [99.6, 94.6],
        [99.3, 98.6],
        [100, 99.1]
      ]
    },
    {
      qID: 5,
      cntryID: 3,
      values: [
        [7.8, 41.5],
        [13, 59.4],
        [35.9, 89],
        [53.2, 93.4]
      ]
    },
    {
      qID: 5,
      cntryID: 4,
      values: [
        [30.2, 0],
        [29.4, 0],
        [34.7, 0],
        [50.7, 0]
      ]
    },
    {
      qID: 5,
      cntryID: 5,
      values: [
        [0, 82.9],
        [0, 87.1],
        [0, 86.9],
        [0, 85]
      ]
    },
    {
      qID: 5,
      cntryID: 6,
      values: [
        [10.3, 0],
        [17.8, 0],
        [76.7, 0],
        [0, 0]
      ]
    },
    {
      qID: 5,
      cntryID: 7,
      values: [
        [77.7, 95.5],
        [82.8, 97.4],
        [88.8, 98.7],
        [93.1, 99.8]
      ]
    },
    {
      qID: 5,
      cntryID: 8,
      values: [
        [8, 48.7],
        [17.3, 59.3],
        [29.4, 81.3],
        [43.4, 85.3]
      ]
    },
    {
      qID: 5,
      cntryID: 9,
      values: [
        [94.1, 98.1],
        [94.7, 99],
        [98.1, 99.5],
        [98.2, 99.6]
      ]
    },
    {
      qID: 5,
      cntryID: 10,
      values: [
        [31.2, 0],
        [39.9, 0],
        [44.7, 0],
        [41.2, 0]
      ]
    },
    {
      qID: 5,
      cntryID: 11,
      values: [
        [19.2, 50.6],
        [30.1, 76.6],
        [57, 95.7],
        [82, 99.7]
      ]
    },
    {
      qID: 5,
      cntryID: 12,
      values: [
        [54.1, 95.5],
        [60.8, 95.1],
        [65.7, 98],
        [0, 100]
      ]
    },
    {
      qID: 5,
      cntryID: 13,
      values: [
        [3.3, 0],
        [14.9, 0],
        [47.4, 95.4],
        [82, 99.2]
      ]
    },
    {
      qID: 5,
      cntryID: 14,
      values: [
        [1.6, 29.9],
        [2.6, 40.3],
        [6.7, 94.2],
        [0, 0]
      ]
    },
    {
      qID: 5,
      cntryID: 15,
      values: [
        [10.5, 0],
        [17.2, 73.2],
        [29.2, 93.4],
        [39.3, 98.7]
      ]
    },
    {
      qID: 5,
      cntryID: 16,
      values: [
        [6.9, 11.8],
        [11.3, 38.8],
        [20.3, 59.6],
        [50.7, 87.3]
      ]
    },
    {
      qID: 5,
      cntryID: 17,
      values: [
        [0.8, 11.3],
        [1, 17.8],
        [2.7, 41.4],
        [6.5, 74.1]
      ]
    },
    {
      qID: 5,
      cntryID: 18,
      values: [
        [5.7, 40.6],
        [8.4, 56.2],
        [16.8, 85.3],
        [0, 99.3]
      ]
    },
    {
      qID: 6,
      cntryID: 0,
      values: [
        [13.5, 0],
        [21.1, 0],
        [32.9, 0],
        [59.7, 0]
      ]
    },
    {
      qID: 6,
      cntryID: 1,
      values: [
        [68.9, 43.4],
        [68.2, 57.5],
        [73.3, 73],
        [65.8, 81.8]
      ]
    },
    {
      qID: 6,
      cntryID: 2,
      values: [
        [0, 0],
        [41.9, 53.4],
        [53.8, 56.6],
        [65.7, 48.9]
      ]
    },
    {
      qID: 6,
      cntryID: 3,
      values: [
        [13.7, 18.7],
        [16, 15.2],
        [13.1, 13.6],
        [16.1, 15.5]
      ]
    },
    {
      qID: 6,
      cntryID: 4,
      values: [
        [61.3, 0],
        [62.6, 0],
        [77.2, 0],
        [87.8, 0]
      ]
    },
    {
      qID: 6,
      cntryID: 5,
      values: [
        [0, 1],
        [0, 17.3],
        [0, 26.4],
        [0, 22.6]
      ]
    },
    {
      qID: 6,
      cntryID: 6,
      values: [
        [13.3, 0],
        [17, 0],
        [39.1, 0],
        [0, 0]
      ]
    },
    {
      qID: 6,
      cntryID: 7,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 6,
      cntryID: 8,
      values: [
        [38.3, 32],
        [47.7, 60.8],
        [59.3, 74.7],
        [70.1, 86.7]
      ]
    },
    {
      qID: 6,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 6,
      cntryID: 10,
      values: [
        [58.7, 0],
        [68.5, 0],
        [72.7, 0],
        [84.1, 0]
      ]
    },
    {
      qID: 6,
      cntryID: 11,
      values: [
        [57.8, 46.7],
        [55.7, 34.4],
        [42.3, 27.2],
        [34.3, 29]
      ]
    },
    {
      qID: 6,
      cntryID: 12,
      values: [
        [21, 34.9],
        [29.5, 41.8],
        [51, 60.6],
        [0, 84.7]
      ]
    },
    {
      qID: 6,
      cntryID: 13,
      values: [
        [49.4, 0],
        [57.5, 0],
        [67.7, 52.2],
        [72.3, 61.5]
      ]
    },
    {
      qID: 6,
      cntryID: 14,
      values: [
        [30.1, 39.1],
        [33.8, 49.5],
        [70.2, 85.6],
        [0, 0]
      ]
    },
    {
      qID: 6,
      cntryID: 15,
      values: [
        [73.5, 0],
        [77.6, 82.7],
        [86.3, 88.5],
        [90.4, 92.5]
      ]
    },
    {
      qID: 6,
      cntryID: 16,
      values: [
        [74.1, 71.2],
        [79.2, 77.7],
        [86.2, 81.1],
        [83.2, 90]
      ]
    },
    {
      qID: 6,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 6,
      cntryID: 18,
      values: [
        [9.8, 7.8],
        [9.8, 9.4],
        [13.5, 20.2],
        [0, 18.9]
      ]
    },
    {
      qID: 7,
      cntryID: 0,
      values: [
        [1.5, 0],
        [3, 0],
        [8.1, 0],
        [10.5, 0]
      ]
    },
    {
      qID: 7,
      cntryID: 1,
      values: [
        [47.9, 31.3],
        [46.2, 42.2],
        [54.9, 51.7],
        [58.1, 56]
      ]
    },
    {
      qID: 7,
      cntryID: 2,
      values: [
        [0, 0],
        [34.6, 40.7],
        [51, 54.1],
        [57.6, 73.5]
      ]
    },
    {
      qID: 7,
      cntryID: 3,
      values: [
        [35.8, 22.2],
        [30.7, 20.8],
        [22.9, 12.9],
        [19.2, 12.8]
      ]
    },
    {
      qID: 7,
      cntryID: 4,
      values: [
        [25.5, 0],
        [24.9, 0],
        [29, 0],
        [35.7, 0]
      ]
    },
    {
      qID: 7,
      cntryID: 5,
      values: [
        [0, 32.7],
        [0, 40.7],
        [0, 42.8],
        [0, 32.3]
      ]
    },
    {
      qID: 7,
      cntryID: 6,
      values: [
        [14, 0],
        [16.8, 0],
        [28.3, 0],
        [0, 0]
      ]
    },
    {
      qID: 7,
      cntryID: 7,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 7,
      cntryID: 8,
      values: [
        [54.6, 22],
        [44, 19.3],
        [37.1, 16.6],
        [23, 6.5]
      ]
    },
    {
      qID: 7,
      cntryID: 9,
      values: [
        [29.3, 48.1],
        [32.5, 53.5],
        [40.2, 54.3],
        [46.1, 50]
      ]
    },
    {
      qID: 7,
      cntryID: 10,
      values: [
        [6.1, 0],
        [8.5, 0],
        [10.8, 0],
        [16, 0]
      ]
    },
    {
      qID: 7,
      cntryID: 11,
      values: [
        [10.4, 19.3],
        [21.7, 36.3],
        [43.2, 37.5],
        [43.4, 43.5]
      ]
    },
    {
      qID: 7,
      cntryID: 12,
      values: [
        [26.4, 40.2],
        [30.3, 38.2],
        [33.2, 39.9],
        [0, 35.5]
      ]
    },
    {
      qID: 7,
      cntryID: 13,
      values: [
        [0.5, 0],
        [6.4, 0],
        [29.9, 34.4],
        [43, 39]
      ]
    },
    {
      qID: 7,
      cntryID: 14,
      values: [
        [7.4, 3.9],
        [8, 9.1],
        [15.8, 24.9],
        [0, 0]
      ]
    },
    {
      qID: 7,
      cntryID: 15,
      values: [
        [9.1, 0],
        [10.4, 14.3],
        [19.9, 19.5],
        [37.8, 34.3]
      ]
    },
    {
      qID: 7,
      cntryID: 16,
      values: [
        [18.9, 4.3],
        [19.2, 14.6],
        [21.5, 15.9],
        [24.7, 28.9]
      ]
    },
    {
      qID: 7,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 7,
      cntryID: 18,
      values: [
        [0, 0],
        [0.7, 1.9],
        [1.2, 0.8],
        [0, 0]
      ]
    },
    {
      qID: 8,
      cntryID: 0,
      values: [
        [0.1, 0],
        [1.2, 0],
        [6.8, 0],
        [24.6, 0]
      ]
    },
    {
      qID: 8,
      cntryID: 1,
      values: [
        [24, 69.6],
        [33.8, 81.4],
        [75, 91.1],
        [90.5, 97.8]
      ]
    },
    {
      qID: 8,
      cntryID: 2,
      values: [
        [0, 0],
        [20.3, 8.7],
        [21.2, 13.4],
        [30, 30.3]
      ]
    },
    {
      qID: 8,
      cntryID: 3,
      values: [
        [20.8, 13.5],
        [28.5, 19.2],
        [40.9, 20.1],
        [29.3, 26.5]
      ]
    },
    {
      qID: 8,
      cntryID: 4,
      values: [
        [19.4, 0],
        [20.9, 0],
        [28.9, 0],
        [54.2, 0]
      ]
    },
    {
      qID: 8,
      cntryID: 5,
      values: [
        [0, 62.8],
        [0, 75.2],
        [0, 87.3],
        [0, 88.9]
      ]
    },
    {
      qID: 8,
      cntryID: 6,
      values: [
        [0.5, 0],
        [3, 0],
        [19.8, 0],
        [0, 0]
      ]
    },
    {
      qID: 8,
      cntryID: 7,
      values: [
        [31.4, 57.2],
        [40.7, 67.8],
        [57.8, 81.9],
        [72.4, 89.9]
      ]
    },
    {
      qID: 8,
      cntryID: 8,
      values: [
        [3.6, 11.8],
        [9.3, 30.8],
        [22.7, 59.2],
        [40.5, 82]
      ]
    },
    {
      qID: 8,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 8,
      cntryID: 10,
      values: [
        [45.6, 0],
        [55.7, 0],
        [70.6, 0],
        [79.4, 0]
      ]
    },
    {
      qID: 8,
      cntryID: 11,
      values: [
        [11.3, 35.4],
        [21.2, 59.6],
        [47.8, 82.7],
        [75.4, 95.2]
      ]
    },
    {
      qID: 8,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 8,
      cntryID: 13,
      values: [
        [5.7, 0],
        [15.2, 0],
        [51.1, 89.7],
        [80.4, 96.5]
      ]
    },
    {
      qID: 8,
      cntryID: 14,
      values: [
        [1.2, 5.9],
        [1.8, 22.7],
        [6.1, 79.8],
        [0, 0]
      ]
    },
    {
      qID: 8,
      cntryID: 15,
      values: [
        [9.7, 0],
        [22.1, 65.3],
        [48.3, 86.5],
        [51.3, 94.3]
      ]
    },
    {
      qID: 8,
      cntryID: 16,
      values: [
        [10.6, 25.8],
        [16.9, 41.9],
        [34.1, 64.2],
        [54.2, 83.7]
      ]
    },
    {
      qID: 8,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0.9],
        [0.3, 2.9],
        [0, 4.6]
      ]
    },
    {
      qID: 8,
      cntryID: 18,
      values: [
        [0.8, 0],
        [0.5, 0.4],
        [0.7, 3.2],
        [0, 8]
      ]
    },
    {
      qID: 9,
      cntryID: 0,
      values: [
        [undefined, 23.7],
        [undefined, 45.7],
        [undefined, 24.3],
        [undefined, 3.8],
        [undefined, 1]
      ]
    },
    {
      qID: 9,
      cntryID: 1,
      values: [
        [undefined, 10.7],
        [undefined, 18.8],
        [undefined, 26.3],
        [undefined, 13.9],
        [undefined, 13.7]
      ]
    },
    {
      qID: 9,
      cntryID: 2,
      values: [
        [undefined, 1.4],
        [undefined, 13.4],
        [undefined, 29.9],
        [undefined, 20.2],
        [undefined, 17]
      ]
    },
    {
      qID: 9,
      cntryID: 3,
      values: [
        [undefined, 33.9],
        [undefined, 33.8],
        [undefined, 24.1],
        [undefined, 4.9],
        [undefined, 2.9]
      ]
    },
    {
      qID: 9,
      cntryID: 4,
      values: [
        [undefined, 39.7],
        [undefined, 25.1],
        [undefined, 18.2],
        [undefined, 6.2],
        [undefined, 5]
      ]
    },
    {
      qID: 9,
      cntryID: 5,
      values: [
        [undefined, 14.3],
        [undefined, 55.6],
        [undefined, 24.3],
        [undefined, 3.2],
        [undefined, 1.7]
      ]
    },
    {
      qID: 9,
      cntryID: 6,
      values: [
        [undefined, 66.8],
        [undefined, 27.2],
        [undefined, 5.1],
        [undefined, 0.5],
        [undefined, 0.3]
      ]
    },
    {
      qID: 9,
      cntryID: 7,
      values: [
        [undefined, 18.1],
        [undefined, 36.9],
        [undefined, 29.5],
        [undefined, 8.2],
        [undefined, 4.8]
      ]
    },
    {
      qID: 9,
      cntryID: 8,
      values: [
        [undefined, 16.1],
        [undefined, 34],
        [undefined, 33.7],
        [undefined, 9.3],
        [undefined, 4.5]
      ]
    },
    {
      qID: 9,
      cntryID: 9,
      values: [
        [undefined, 12.9],
        [undefined, 21.6],
        [undefined, 31.2],
        [undefined, 13.6],
        [undefined, 11]
      ]
    },
    {
      qID: 9,
      cntryID: 10,
      values: [
        [undefined, 4],
        [undefined, 24.8],
        [undefined, 47.6],
        [undefined, 13.2],
        [undefined, 7.7]
      ]
    },
    {
      qID: 9,
      cntryID: 11,
      values: [
        [undefined, 14.3],
        [undefined, 32.9],
        [undefined, 33.3],
        [undefined, 11.8],
        [undefined, 5]
      ]
    },
    {
      qID: 9,
      cntryID: 12,
      values: [
        [undefined, 34],
        [undefined, 44.9],
        [undefined, 17.1],
        [undefined, 2.3],
        [undefined, 1.2]
      ]
    },
    {
      qID: 9,
      cntryID: 13,
      values: [
        [undefined, 5.5],
        [undefined, 10.3],
        [undefined, 21.1],
        [undefined, 17],
        [undefined, 20.7]
      ]
    },
    {
      qID: 9,
      cntryID: 14,
      values: [
        [undefined, 16.1],
        [undefined, 25.6],
        [undefined, 26.9],
        [undefined, 13.2],
        [undefined, 9.9]
      ]
    },
    {
      qID: 9,
      cntryID: 15,
      values: [
        [undefined, 7.3],
        [undefined, 19.9],
        [undefined, 29.8],
        [undefined, 17.8],
        [undefined, 13.9]
      ]
    },
    {
      qID: 9,
      cntryID: 16,
      values: [
        [undefined, 11.5],
        [undefined, 24.1],
        [undefined, 25.4],
        [undefined, 10.9],
        [undefined, 8]
      ]
    },
    {
      qID: 9,
      cntryID: 17,
      values: [
        [undefined, 21.7],
        [undefined, 37.6],
        [undefined, 27.5],
        [undefined, 7.7],
        [undefined, 3.7]
      ]
    },
    {
      qID: 9,
      cntryID: 18,
      values: [
        [undefined, 18.1],
        [undefined, 38.7],
        [undefined, 27.6],
        [undefined, 9.5],
        [undefined, 4.1]
      ]
    },
    {
      qID: 10,
      cntryID: 0,
      values: [
        [136.51, 45.56],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 1,
      values: [
        [194.03, 104.17],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 2,
      values: [
        [208.67, 132.28],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 3,
      values: [
        [56.04, 41],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 4,
      values: [
        [114.84, 39.07],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 5,
      values: [
        [60.8, 47.32],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 6,
      values: [
        [29.38, 23.3],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 7,
      values: [
        [80.38, 54.82],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 8,
      values: [
        [89.8, 65.23],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 9,
      values: [
        [168.66, 84.04],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 10,
      values: [
        [104.13, 80.49],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 11,
      values: [
        [88.86, 62.86],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 12,
      values: [
        [48.94, 37.69],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 13,
      values: [
        [244.92, 165.38],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 14,
      values: [
        [133.38, 81.89],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 15,
      values: [
        [156.17, 102.73],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 16,
      values: [
        [155.66, 77.7],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 17,
      values: [
        [72.26, 50.39],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 10,
      cntryID: 18,
      values: [
        [87.57, 52.97],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 11,
      cntryID: 0,
      values: [
        [45, 0],
        [43, 0],
        [38, 0],
        [26, 0]
      ]
    },
    {
      qID: 11,
      cntryID: 1,
      values: [
        [68, 61],
        [66, 60],
        [54, 51],
        [35, 33]
      ]
    },
    {
      qID: 11,
      cntryID: 2,
      values: [
        [0, 0],
        [39, 49],
        [35, 42],
        [28, 33]
      ]
    },
    {
      qID: 11,
      cntryID: 3,
      values: [
        [63, 58],
        [62, 55],
        [58, 50],
        [51, 45]
      ]
    },
    {
      qID: 11,
      cntryID: 4,
      values: [
        [50, 0],
        [40, 0],
        [16, 0],
        [12, 0]
      ]
    },
    {
      qID: 11,
      cntryID: 5,
      values: [
        [0, 58],
        [0, 52],
        [0, 39],
        [0, 17]
      ]
    },
    {
      qID: 11,
      cntryID: 6,
      values: [
        [55, 0],
        [54, 0],
        [35, 0],
        [0, 0]
      ]
    },
    {
      qID: 11,
      cntryID: 7,
      values: [
        [66, 61],
        [65, 59],
        [59, 54],
        [46, 46]
      ]
    },
    {
      qID: 11,
      cntryID: 8,
      values: [
        [67, 52],
        [67, 60],
        [66, 60],
        [60, 50]
      ]
    },
    {
      qID: 11,
      cntryID: 9,
      values: [
        [62, 53],
        [59, 50],
        [49, 44],
        [36, 37]
      ]
    },
    {
      qID: 11,
      cntryID: 10,
      values: [
        [52, 0],
        [56, 0],
        [57, 0],
        [57, 0]
      ]
    },
    {
      qID: 11,
      cntryID: 11,
      values: [
        [59, 58],
        [60, 59],
        [57, 55],
        [45, 43]
      ]
    },
    {
      qID: 11,
      cntryID: 12,
      values: [
        [67, 64],
        [66, 61],
        [55, 48],
        [0, 24]
      ]
    },
    {
      qID: 11,
      cntryID: 13,
      values: [
        [67, 0],
        [65, 0],
        [57, 50],
        [46, 41]
      ]
    },
    {
      qID: 11,
      cntryID: 14,
      values: [
        [65, 62],
        [63, 53],
        [52, 39],
        [0, 0]
      ]
    },
    {
      qID: 11,
      cntryID: 15,
      values: [
        [72, 0],
        [71, 56],
        [65, 51],
        [62, 44]
      ]
    },
    {
      qID: 11,
      cntryID: 16,
      values: [
        [71, 61],
        [67, 56],
        [60, 52],
        [41, 38]
      ]
    },
    {
      qID: 11,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 11,
      cntryID: 18,
      values: [
        [77, 74],
        [76, 68],
        [70, 50],
        [0, 35]
      ]
    },
    {
      qID: 12,
      cntryID: 0,
      values: [
        [5.7, 0],
        [5.5, 0],
        [7.2, 0],
        [14.1, 0]
      ]
    },
    {
      qID: 12,
      cntryID: 1,
      values: [
        [5.3, 10],
        [6.6, 6.4],
        [8.2, 7.4],
        [11.5, 8.3]
      ]
    },
    {
      qID: 12,
      cntryID: 2,
      values: [
        [0, 0],
        [6.8, 5.9],
        [9.6, 8.9],
        [10.2, 12.3]
      ]
    },
    {
      qID: 12,
      cntryID: 3,
      values: [
        [3.4, 3.4],
        [3.7, 3.6],
        [4, 3.7],
        [2.8, 3.7]
      ]
    },
    {
      qID: 12,
      cntryID: 4,
      values: [
        [0.6, 0],
        [0.8, 0],
        [1.2, 0],
        [1.2, 0]
      ]
    },
    {
      qID: 12,
      cntryID: 5,
      values: [
        [0, 6.1],
        [0, 7],
        [0, 10.2],
        [0, 20.2]
      ]
    },
    {
      qID: 12,
      cntryID: 6,
      values: [
        [5.7, 0],
        [6.8, 0],
        [17.7, 0],
        [0, 0]
      ]
    },
    {
      qID: 12,
      cntryID: 7,
      values: [
        [1.5, 1.7],
        [1.5, 1.7],
        [2.3, 2.3],
        [2.1, 4]
      ]
    },
    {
      qID: 12,
      cntryID: 8,
      values: [
        [1.5, 1.9],
        [1.8, 2.3],
        [1.8, 2.3],
        [2, 2.8]
      ]
    },
    {
      qID: 12,
      cntryID: 9,
      values: [
        [2.2, 1.1],
        [2.3, 2.1],
        [3.3, 3.3],
        [6.5, 4.2]
      ]
    },
    {
      qID: 12,
      cntryID: 10,
      values: [
        [2.9, 0],
        [4.2, 0],
        [6.5, 0],
        [10.3, 0]
      ]
    },
    {
      qID: 12,
      cntryID: 11,
      values: [
        [3.9, 6.6],
        [4.5, 4.6],
        [7.6, 5.8],
        [11.4, 6.9]
      ]
    },
    {
      qID: 12,
      cntryID: 12,
      values: [
        [3.4, 3.8],
        [3.6, 4.2],
        [3.5, 4],
        [0, 3.8]
      ]
    },
    {
      qID: 12,
      cntryID: 13,
      values: [
        [4.5, 0],
        [4.4, 0],
        [4, 5.1],
        [7.5, 3.3]
      ]
    },
    {
      qID: 12,
      cntryID: 14,
      values: [
        [0.4, 0.6],
        [0.4, 0.8],
        [0.8, 1.1],
        [0, 0]
      ]
    },
    {
      qID: 12,
      cntryID: 15,
      values: [
        [0.3, 0],
        [0.5, 0.5],
        [0.7, 0.9],
        [1.6, 1]
      ]
    },
    {
      qID: 12,
      cntryID: 16,
      values: [
        [0, 0],
        [0.1, 0.2],
        [0.2, 0.3],
        [0.9, 0.9]
      ]
    },
    {
      qID: 12,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 12,
      cntryID: 18,
      values: [
        [0.8, 1.2],
        [0.8, 0.7],
        [0.7, 0.7],
        [0, 0.7]
      ]
    },
    {
      qID: 13,
      cntryID: 0,
      values: [
        [1.5, 0],
        [1.5, 0],
        [2.4, 0],
        [7.1, 0]
      ]
    },
    {
      qID: 13,
      cntryID: 1,
      values: [
        [0.2, 0],
        [0.2, 0.1],
        [1.2, 0.7],
        [2.3, 1.3]
      ]
    },
    {
      qID: 13,
      cntryID: 2,
      values: [
        [0, 0],
        [0.3, 0.7],
        [0.5, 0.8],
        [0.9, 1.3]
      ]
    },
    {
      qID: 13,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 13,
      cntryID: 4,
      values: [
        [0.2, 0],
        [0.3, 0],
        [0.5, 0],
        [0.7, 0]
      ]
    },
    {
      qID: 13,
      cntryID: 5,
      values: [
        [0, 5],
        [0, 6],
        [0, 9.8],
        [0, 41.5]
      ]
    },
    {
      qID: 13,
      cntryID: 6,
      values: [
        [13.8, 0],
        [15.7, 0],
        [24.7, 0],
        [0, 0]
      ]
    },
    {
      qID: 13,
      cntryID: 7,
      values: [
        [3, 2.5],
        [3, 2.4],
        [3.6, 2.8],
        [3.7, 3.1]
      ]
    },
    {
      qID: 13,
      cntryID: 8,
      values: [
        [2.3, 0.7],
        [2.4, 1.6],
        [2.9, 2.3],
        [3.5, 4]
      ]
    },
    {
      qID: 13,
      cntryID: 9,
      values: [
        [0.2, 0],
        [0.3, 0.3],
        [0.7, 0.7],
        [1.9, 1.9]
      ]
    },
    {
      qID: 13,
      cntryID: 10,
      values: [
        [10, 0],
        [10.3, 0],
        [9.8, 0],
        [9.4, 0]
      ]
    },
    {
      qID: 13,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0.1],
        [0.2, 0.1],
        [0.1, 0.3]
      ]
    },
    {
      qID: 13,
      cntryID: 12,
      values: [
        [2.3, 2.2],
        [3.1, 2.7],
        [7.3, 7.9],
        [0, 11.9]
      ]
    },
    {
      qID: 13,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0.1, 0.3],
        [0.4, 0.7]
      ]
    },
    {
      qID: 13,
      cntryID: 14,
      values: [
        [3.1, 2.3],
        [3, 1.7],
        [7.1, 2.6],
        [0, 0]
      ]
    },
    {
      qID: 13,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 13,
      cntryID: 16,
      values: [
        [3.1, 3.6],
        [3.1, 3],
        [2.4, 3.3],
        [3.5, 3.2]
      ]
    },
    {
      qID: 13,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 13,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 14,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 14,
      cntryID: 1,
      values: [
        [0.4, 0.1],
        [0.6, 0.5],
        [1.1, 0.7],
        [1.8, 1.9]
      ]
    },
    {
      qID: 14,
      cntryID: 2,
      values: [
        [0, 0],
        [1.1, 0.6],
        [1.7, 1.3],
        [2.6, 2.2]
      ]
    },
    {
      qID: 14,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 14,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 14,
      cntryID: 5,
      values: [
        [0, 5.1],
        [0, 4.5],
        [0, 4.1],
        [0, 2.6]
      ]
    },
    {
      qID: 14,
      cntryID: 6,
      values: [
        [0, 0],
        [0.1, 0],
        [0.2, 0],
        [0, 0]
      ]
    },
    {
      qID: 14,
      cntryID: 7,
      values: [
        [0.2, 0.2],
        [0.3, 0.3],
        [0.6, 1],
        [1.4, 2.5]
      ]
    },
    {
      qID: 14,
      cntryID: 8,
      values: [
        [0, 0],
        [0.1, 0.1],
        [0.2, 0.3],
        [0.4, 0.9]
      ]
    },
    {
      qID: 14,
      cntryID: 9,
      values: [
        [0.1, 0.3],
        [0.1, 0.3],
        [0.5, 0.6],
        [0.9, 1.9]
      ]
    },
    {
      qID: 14,
      cntryID: 10,
      values: [
        [0, 0],
        [0.1, 0],
        [0.5, 0],
        [0.3, 0]
      ]
    },
    {
      qID: 14,
      cntryID: 11,
      values: [
        [0, 0.1],
        [0.1, 0.3],
        [0.3, 0.7],
        [1.1, 1.7]
      ]
    },
    {
      qID: 14,
      cntryID: 12,
      values: [
        [0.4, 0.3],
        [0.3, 0.4],
        [0.4, 0.8],
        [0, 3.1]
      ]
    },
    {
      qID: 14,
      cntryID: 13,
      values: [
        [0.7, 0],
        [1.4, 0],
        [3.4, 4.1],
        [8.1, 5.8]
      ]
    },
    {
      qID: 14,
      cntryID: 14,
      values: [
        [0.4, 2.2],
        [0.6, 3],
        [1.3, 2.9],
        [0, 0]
      ]
    },
    {
      qID: 14,
      cntryID: 15,
      values: [
        [0, 0],
        [0.1, 0.1],
        [0.4, 0.5],
        [1.2, 0.8]
      ]
    },
    {
      qID: 14,
      cntryID: 16,
      values: [
        [0.2, 0.1],
        [0.3, 0.4],
        [0.4, 0.9],
        [1.1, 1.6]
      ]
    },
    {
      qID: 14,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 14,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 15,
      cntryID: 0,
      values: [
        [4.8, 0],
        [3.5, 0],
        [2.4, 0],
        [1.1, 0]
      ]
    },
    {
      qID: 15,
      cntryID: 1,
      values: [
        [4.3, 3.4],
        [4.5, 4.7],
        [4.3, 4.7],
        [3.5, 4.8]
      ]
    },
    {
      qID: 15,
      cntryID: 2,
      values: [
        [0, 0],
        [1.3, 1.6],
        [1.2, 1.2],
        [0.8, 0.9]
      ]
    },
    {
      qID: 15,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 15,
      cntryID: 4,
      values: [
        [0.4, 0],
        [0.4, 0],
        [0.4, 0],
        [0.5, 0]
      ]
    },
    {
      qID: 15,
      cntryID: 5,
      values: [
        [0, 7.9],
        [0, 7.3],
        [0, 7.5],
        [0, 0]
      ]
    },
    {
      qID: 15,
      cntryID: 6,
      values: [
        [5.1, 0],
        [5, 0],
        [2.8, 0],
        [0, 0]
      ]
    },
    {
      qID: 15,
      cntryID: 7,
      values: [
        [6.5, 6],
        [7.2, 6.8],
        [6.7, 6.2],
        [4.7, 2.7]
      ]
    },
    {
      qID: 15,
      cntryID: 8,
      values: [
        [3.2, 1.3],
        [3.2, 2.1],
        [3.5, 2.6],
        [4.1, 2.4]
      ]
    },
    {
      qID: 15,
      cntryID: 9,
      values: [
        [2.4, 6.7],
        [3, 5.8],
        [3.9, 5.6],
        [2.8, 2.4]
      ]
    },
    {
      qID: 15,
      cntryID: 10,
      values: [
        [0.6, 0],
        [0.4, 0],
        [0.4, 0],
        [0.3, 0]
      ]
    },
    {
      qID: 15,
      cntryID: 11,
      values: [
        [0.3, 0.8],
        [0.7, 0.7],
        [0.8, 1],
        [0.8, 1.4]
      ]
    },
    {
      qID: 15,
      cntryID: 12,
      values: [
        [3.2, 3],
        [2.9, 2.9],
        [2.1, 2.1],
        [0, 1]
      ]
    },
    {
      qID: 15,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 15,
      cntryID: 14,
      values: [
        [5.8, 4.6],
        [6.6, 5.7],
        [13.4, 7.9],
        [0, 0]
      ]
    },
    {
      qID: 15,
      cntryID: 15,
      values: [
        [1.1, 0],
        [1.3, 1],
        [1.9, 1.2],
        [3.7, 1.7]
      ]
    },
    {
      qID: 15,
      cntryID: 16,
      values: [
        [2.9, 4.6],
        [3.4, 5.2],
        [3.3, 3.9],
        [4.4, 3.5]
      ]
    },
    {
      qID: 15,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 15,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 16,
      cntryID: 0,
      values: [
        [38.2, 0],
        [44, 0],
        [52, 0],
        [67.6, 0]
      ]
    },
    {
      qID: 16,
      cntryID: 1,
      values: [
        [3.6, 0],
        [6, 9.2],
        [25.6, 21.8],
        [46.1, 43.8]
      ]
    },
    {
      qID: 16,
      cntryID: 2,
      values: [
        [0, 0],
        [10.5, 22.7],
        [28.2, 31.6],
        [48.5, 58.6]
      ]
    },
    {
      qID: 16,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 16,
      cntryID: 4,
      values: [
        [17, 0],
        [24.2, 0],
        [47.9, 0],
        [57.1, 0]
      ]
    },
    {
      qID: 16,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 16,
      cntryID: 6,
      values: [
        [99.4, 0],
        [99.6, 0],
        [100, 0],
        [0, 0]
      ]
    },
    {
      qID: 16,
      cntryID: 7,
      values: [
        [88.3, 89.3],
        [91.5, 92.1],
        [93.4, 95.1],
        [91.6, 94.5]
      ]
    },
    {
      qID: 16,
      cntryID: 8,
      values: [
        [66.1, 35.7],
        [72.4, 64.9],
        [79.5, 74.4],
        [82.3, 79.4]
      ]
    },
    {
      qID: 16,
      cntryID: 9,
      values: [
        [2.1, 1.5],
        [4, 4.4],
        [11.6, 12.8],
        [24.8, 38.6]
      ]
    },
    {
      qID: 16,
      cntryID: 10,
      values: [
        [90.1, 0],
        [97, 0],
        [99, 0],
        [97.8, 0]
      ]
    },
    {
      qID: 16,
      cntryID: 11,
      values: [
        [1.9, 3.7],
        [5.3, 8.2],
        [14.8, 13.5],
        [14.9, 30.9]
      ]
    },
    {
      qID: 16,
      cntryID: 12,
      values: [
        [63.6, 58.7],
        [67.2, 66.1],
        [79.2, 76.3],
        [0, 84.4]
      ]
    },
    {
      qID: 16,
      cntryID: 13,
      values: [
        [0, 0],
        [2.6, 0],
        [10.7, 29.7],
        [37, 53.2]
      ]
    },
    {
      qID: 16,
      cntryID: 14,
      values: [
        [44.9, 34.6],
        [47.4, 36],
        [70.3, 65.8],
        [0, 0]
      ]
    },
    {
      qID: 16,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 16,
      cntryID: 16,
      values: [
        [88.9, 90.8],
        [90.9, 89.7],
        [84.5, 83.3],
        [52.1, 67.4]
      ]
    },
    {
      qID: 16,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 16,
      cntryID: 18,
      values: [
        [42.8, 45.5],
        [51.4, 48.1],
        [63, 60.2],
        [0, 64.2]
      ]
    },
    {
      qID: 17,
      cntryID: 0,
      values: [
        [18, 0],
        [25.5, 0],
        [29, 0],
        [17.6, 0]
      ]
    },
    {
      qID: 17,
      cntryID: 1,
      values: [
        [1.5, 2.2],
        [1.4, 2.4],
        [2.4, 3.4],
        [4.5, 6.9]
      ]
    },
    {
      qID: 17,
      cntryID: 2,
      values: [
        [0, 0],
        [10.1, 6.4],
        [6.6, 4.9],
        [5.8, 4.4]
      ]
    },
    {
      qID: 17,
      cntryID: 3,
      values: [
        [4, 6.6],
        [4, 6.4],
        [3.2, 7.7],
        [1.6, 4.5]
      ]
    },
    {
      qID: 17,
      cntryID: 4,
      values: [
        [0.1, 0],
        [0.1, 0],
        [0.2, 0],
        [0.2, 0]
      ]
    },
    {
      qID: 17,
      cntryID: 5,
      values: [
        [0, 7.3],
        [0, 10.1],
        [0, 12.1],
        [0, 0]
      ]
    },
    {
      qID: 17,
      cntryID: 6,
      values: [
        [1.7, 0],
        [1.9, 0],
        [3, 0],
        [0, 0]
      ]
    },
    {
      qID: 17,
      cntryID: 7,
      values: [
        [5.8, 7.8],
        [5.4, 7.6],
        [4.8, 7.7],
        [6.1, 8.1]
      ]
    },
    {
      qID: 17,
      cntryID: 8,
      values: [
        [5, 27.4],
        [4.5, 12],
        [4.9, 7.8],
        [3.6, 6.7]
      ]
    },
    {
      qID: 17,
      cntryID: 9,
      values: [
        [5.3, 6],
        [4.8, 6.1],
        [4.9, 6.2],
        [9.1, 8.2]
      ]
    },
    {
      qID: 17,
      cntryID: 10,
      values: [
        [2.8, 0],
        [1.8, 0],
        [1.2, 0],
        [0.7, 0]
      ]
    },
    {
      qID: 17,
      cntryID: 11,
      values: [
        [2.4, 3.7],
        [2.9, 5.6],
        [4.3, 6.9],
        [2.9, 8.3]
      ]
    },
    {
      qID: 17,
      cntryID: 12,
      values: [
        [3.4, 6.1],
        [3.2, 6.3],
        [3.7, 6.7],
        [0, 6]
      ]
    },
    {
      qID: 17,
      cntryID: 13,
      values: [
        [3.3, 0],
        [4.4, 0],
        [5.2, 10.9],
        [8.2, 23]
      ]
    },
    {
      qID: 17,
      cntryID: 14,
      values: [
        [2.3, 1.3],
        [2.1, 2.6],
        [0.6, 3.4],
        [0, 0]
      ]
    },
    {
      qID: 17,
      cntryID: 15,
      values: [
        [1.7, 0],
        [2.2, 3.6],
        [2.2, 4.2],
        [1.8, 5]
      ]
    },
    {
      qID: 17,
      cntryID: 16,
      values: [
        [0.9, 1],
        [1, 0.8],
        [0.9, 0.8],
        [1.2, 1.1]
      ]
    },
    {
      qID: 17,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 17,
      cntryID: 18,
      values: [
        [0.8, 0.7],
        [0.7, 1.2],
        [0.7, 0.8],
        [0, 0.7]
      ]
    },
    {
      qID: 18,
      cntryID: 0,
      values: [
        [-0.78, 0],
        [-0.69, 0],
        [-0.64, 0],
        [-0.76, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 6,
      values: [
        [0.01, 0],
        [0, 0],
        [-0.1, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 7,
      values: [
        [-0.14, -0.1],
        [-0.12, -0.09],
        [-0.1, -0.07],
        [-0.1, -0.09]
      ]
    },
    {
      qID: 18,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 9,
      values: [
        [-0.15, -0.08],
        [-0.16, -0.02],
        [-0.16, -0.07],
        [-0.14, -0.26]
      ]
    },
    {
      qID: 18,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 18,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 19,
      cntryID: 0,
      values: [
        [91.1, 0],
        [91.8, 0],
        [93.2, 0],
        [92.5, 0]
      ]
    },
    {
      qID: 19,
      cntryID: 1,
      values: [
        [27.9, 35.3],
        [30, 28.8],
        [39.3, 31.8],
        [40.9, 28.7]
      ]
    },
    {
      qID: 19,
      cntryID: 2,
      values: [
        [0, 0],
        [79.5, 77.4],
        [69, 68.6],
        [52.4, 26]
      ]
    },
    {
      qID: 19,
      cntryID: 3,
      values: [
        [25, 22.9],
        [26.2, 22.6],
        [33.4, 22.6],
        [41.4, 26]
      ]
    },
    {
      qID: 19,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 19,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 19,
      cntryID: 6,
      values: [
        [46.2, 0],
        [46.4, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 19,
      cntryID: 7,
      values: [
        [22.7, 28.7],
        [23, 27.1],
        [24.3, 26.2],
        [25.2, 23.6]
      ]
    },
    {
      qID: 19,
      cntryID: 8,
      values: [
        [25.8, 19.1],
        [25.3, 22.4],
        [23.9, 26.7],
        [30.8, 31.6]
      ]
    },
    {
      qID: 19,
      cntryID: 9,
      values: [
        [50.8, 47.7],
        [49.3, 46.2],
        [41.1, 41.2],
        [34.5, 37.7]
      ]
    },
    {
      qID: 19,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 19,
      cntryID: 11,
      values: [
        [33.9, 33.1],
        [35.4, 31.3],
        [38.2, 36.2],
        [42.4, 36.5]
      ]
    },
    {
      qID: 19,
      cntryID: 12,
      values: [
        [27.5, 24.8],
        [28.4, 26.2],
        [30.8, 28.2],
        [0, 26.8]
      ]
    },
    {
      qID: 19,
      cntryID: 13,
      values: [
        [14.2, 0],
        [13.7, 0],
        [12.6, 11.5],
        [13.8, 11.2]
      ]
    },
    {
      qID: 19,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 19,
      cntryID: 15,
      values: [
        [10.4, 0],
        [12.4, 11.3],
        [14, 10.6],
        [13.5, 8.5]
      ]
    },
    {
      qID: 19,
      cntryID: 16,
      values: [
        [12.6, 12.4],
        [14.2, 13.9],
        [21.3, 18.5],
        [38.7, 29.2]
      ]
    },
    {
      qID: 19,
      cntryID: 17,
      values: [
        [12.7, 14.9],
        [14.2, 15.1],
        [18.1, 18.1],
        [30.4, 23.8]
      ]
    },
    {
      qID: 19,
      cntryID: 18,
      values: [
        [11, 11.8],
        [11.4, 11.7],
        [17.3, 13],
        [0, 12.6]
      ]
    },
    {
      qID: 20,
      cntryID: 0,
      values: [
        [0.07, 0],
        [0.05, 0],
        [0.05, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 6,
      values: [
        [0.15, 0],
        [0.15, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 7,
      values: [
        [0.03, 0.03],
        [0.03, 0.04],
        [0.04, 0.05],
        [0.04, 0.04]
      ]
    },
    {
      qID: 20,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 20,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 0,
      values: [
        [2.5, 0],
        [1.3, 0],
        [1.7, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 6,
      values: [
        [4.9, 0],
        [5, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 7,
      values: [
        [1, 1],
        [0.9, 1],
        [1.1, 0.7],
        [1.2, 1.8]
      ]
    },
    {
      qID: 21,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 21,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 0,
      values: [
        [33.9, 0],
        [33.1, 0],
        [30.2, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 6,
      values: [
        [37.4, 0],
        [38.3, 0],
        [0, 0],
        [0, 0]
      ]
    },
    { qID: 22, cntryID: 7, values: [[8.8, 0], [8.8, 0], [9, 0], [10.4]] },
    {
      qID: 22,
      cntryID: 8,
      values: [
        [0, 10.4],
        [0, 9.5],
        [0, 10.9],
        [0, 8.5]
      ]
    },
    {
      qID: 22,
      cntryID: 9,
      values: [
        [31.7, 0],
        [33, 0],
        [33.4, 0],
        [29.9, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 10,
      values: [
        [0, 35.7],
        [0, 34.5],
        [0, 32.6],
        [0, 25]
      ]
    },
    {
      qID: 22,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 22,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 0,
      values: [
        [14.7, 0],
        [14.3, 0],
        [14.9, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 6,
      values: [
        [29.2, 0],
        [30.3, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 7,
      values: [
        [6.6, 6.2],
        [6.1, 4.4],
        [4.9, 5.7],
        [7.9, 5.1]
      ]
    },
    {
      qID: 23,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 9,
      values: [
        [22.6, 29.3],
        [21.1, 21],
        [17.5, 20.9],
        [18.3, 21]
      ]
    },
    {
      qID: 23,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 23,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 24,
      cntryID: 0,
      values: [
        [0.2, 0],
        [0.2, 0],
        [0.3, 0],
        [0.3, 0]
      ]
    },
    {
      qID: 24,
      cntryID: 1,
      values: [
        [0.1, 0.1],
        [0.1, 0.1],
        [0.1, 0.2],
        [0.3, 0.2]
      ]
    },
    {
      qID: 24,
      cntryID: 2,
      values: [
        [0, 0],
        [0.2, 0.2],
        [0.2, 0.2],
        [0.3, 0.3]
      ]
    },
    {
      qID: 24,
      cntryID: 3,
      values: [
        [0.6, 0.6],
        [0.6, 0.7],
        [0.7, 0.7],
        [0.8, 0.5]
      ]
    },
    {
      qID: 24,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 24,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 24,
      cntryID: 6,
      values: [
        [0.1, 0],
        [0.1, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 24,
      cntryID: 7,
      values: [
        [0.8, 1],
        [0.9, 1],
        [1, 1.3],
        [1, 1.2]
      ]
    },
    {
      qID: 24,
      cntryID: 8,
      values: [
        [0.8, 1.1],
        [0.9, 1.2],
        [1, 1.7],
        [1.5, 1.4]
      ]
    },
    {
      qID: 24,
      cntryID: 9,
      values: [
        [1, 1],
        [1, 1.1],
        [1.1, 1.2],
        [1.4, 1.1]
      ]
    },
    {
      qID: 24,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 24,
      cntryID: 11,
      values: [
        [0.2, 0.2],
        [0.2, 0.2],
        [0.3, 0.2],
        [0.3, 0.3]
      ]
    },
    {
      qID: 24,
      cntryID: 12,
      values: [
        [0.5, 0.4],
        [0.4, 0.3],
        [0.3, 0.2],
        [0, 0.3]
      ]
    },
    {
      qID: 24,
      cntryID: 13,
      values: [
        [0.2, 0],
        [0.3, 0],
        [0.4, 0.5],
        [0.6, 0.6]
      ]
    },
    {
      qID: 24,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 24,
      cntryID: 15,
      values: [
        [0.1, 0],
        [0.1, 0.1],
        [0.3, 0.2],
        [0.4, 0.3]
      ]
    },
    {
      qID: 24,
      cntryID: 16,
      values: [
        [0.1, 0.1],
        [0.1, 0.1],
        [0.2, 0.2],
        [0.4, 0.3]
      ]
    },
    {
      qID: 24,
      cntryID: 17,
      values: [
        [0.1, 0.1],
        [0.1, 0.1],
        [0.1, 0.2],
        [0.3, 0.2]
      ]
    },
    {
      qID: 24,
      cntryID: 18,
      values: [
        [0.2, 0.2],
        [0.3, 0.3],
        [0.5, 0.4],
        [0, 0.4]
      ]
    },
    {
      qID: 25,
      cntryID: 0,
      values: [
        [36.5, 0],
        [37.7, 0],
        [34.9, 0],
        [18, 0]
      ]
    },
    {
      qID: 25,
      cntryID: 1,
      values: [
        [36.8, 64.5],
        [41.3, 51.6],
        [46.5, 45.9],
        [42.3, 27.9]
      ]
    },
    {
      qID: 25,
      cntryID: 2,
      values: [
        [0, 0],
        [53, 51.3],
        [38, 41.9],
        [37.4, 34.2]
      ]
    },
    {
      qID: 25,
      cntryID: 3,
      values: [
        [19, 26.4],
        [22.3, 26.3],
        [27.7, 25.7],
        [34.4, 16.6]
      ]
    },
    {
      qID: 25,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 25,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 25,
      cntryID: 6,
      values: [
        [20, 0],
        [21.3, 0],
        [39.1, 0],
        [0, 0]
      ]
    },
    {
      qID: 25,
      cntryID: 7,
      values: [
        [19.8, 28.8],
        [20.8, 26.5],
        [19.9, 25.2],
        [20.4, 16.4]
      ]
    },
    {
      qID: 25,
      cntryID: 8,
      values: [
        [34.9, 53.6],
        [42.2, 56.9],
        [44.6, 64.9],
        [51.2, 51.9]
      ]
    },
    {
      qID: 25,
      cntryID: 9,
      values: [
        [46.5, 45],
        [50.7, 48.4],
        [58.2, 59.1],
        [60.8, 52.6]
      ]
    },
    {
      qID: 25,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 25,
      cntryID: 11,
      values: [
        [44.1, 53],
        [47.2, 47.1],
        [51.4, 45.2],
        [13.7, 24.7]
      ]
    },
    {
      qID: 25,
      cntryID: 12,
      values: [
        [23.7, 21.1],
        [24.3, 21.2],
        [21.7, 17.7],
        [0, 7.6]
      ]
    },
    {
      qID: 25,
      cntryID: 13,
      values: [
        [37.2, 0],
        [45.8, 0],
        [61.6, 67.6],
        [59.9, 66.7]
      ]
    },
    {
      qID: 25,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 25,
      cntryID: 15,
      values: [
        [21.4, 0],
        [24.6, 35],
        [32, 40.4],
        [30.6, 36]
      ]
    },
    {
      qID: 25,
      cntryID: 16,
      values: [
        [14.7, 17.4],
        [18.1, 19.9],
        [19, 19.6],
        [11.5, 8]
      ]
    },
    {
      qID: 25,
      cntryID: 17,
      values: [
        [21.3, 25.5],
        [24.4, 27.2],
        [26.4, 32.9],
        [37, 18.1]
      ]
    },
    {
      qID: 25,
      cntryID: 18,
      values: [
        [27.3, 33.2],
        [25.1, 29.6],
        [24, 33.1],
        [0, 33.1]
      ]
    },
    {
      qID: 26,
      cntryID: 0,
      values: [
        [63.8, 0],
        [66.6, 0],
        [69, 0],
        [70.2, 0]
      ]
    },
    {
      qID: 26,
      cntryID: 1,
      values: [
        [7.8, 10.1],
        [9.8, 8.4],
        [15.2, 13.5],
        [45.6, 36.1]
      ]
    },
    {
      qID: 26,
      cntryID: 2,
      values: [
        [0, 0],
        [66.5, 43.8],
        [62.2, 52.6],
        [64.3, 77.2]
      ]
    },
    {
      qID: 26,
      cntryID: 3,
      values: [
        [21.1, 20],
        [21.5, 20],
        [25.6, 25.3],
        [30.3, 19.7]
      ]
    },
    {
      qID: 26,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 26,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 26,
      cntryID: 6,
      values: [
        [5.9, 0],
        [11, 0],
        [63.6, 0],
        [0, 0]
      ]
    },
    {
      qID: 26,
      cntryID: 7,
      values: [
        [24.9, 30],
        [27.2, 29],
        [31.3, 39.1],
        [35, 46.3]
      ]
    },
    {
      qID: 26,
      cntryID: 8,
      values: [
        [3.2, 0],
        [3.4, 9.1],
        [5, 12.1],
        [5.6, 21.1]
      ]
    },
    {
      qID: 26,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 26,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 26,
      cntryID: 11,
      values: [
        [4.1, 10.7],
        [7.4, 11.1],
        [25.3, 25.6],
        [20.9, 32.9]
      ]
    },
    {
      qID: 26,
      cntryID: 12,
      values: [
        [49.4, 46.5],
        [45.5, 39.1],
        [36.1, 30.9],
        [0, 26.9]
      ]
    },
    {
      qID: 26,
      cntryID: 13,
      values: [
        [2, 0],
        [5.6, 0],
        [12.3, 17.7],
        [28, 30]
      ]
    },
    {
      qID: 26,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 26,
      cntryID: 15,
      values: [
        [6.9, 0],
        [11.6, 16.5],
        [17, 19.8],
        [17.1, 27]
      ]
    },
    {
      qID: 26,
      cntryID: 16,
      values: [
        [8.4, 6.3],
        [12.2, 12.1],
        [15.6, 16.8],
        [11.1, 24.2]
      ]
    },
    {
      qID: 26,
      cntryID: 17,
      values: [
        [12.6, 16.1],
        [15.4, 15.9],
        [24, 38.2],
        [19.3, 43.7]
      ]
    },
    {
      qID: 26,
      cntryID: 18,
      values: [
        [0.8, 5.2],
        [2, 11.4],
        [4.3, 12.6],
        [0, 10.8]
      ]
    },
    {
      qID: 27,
      cntryID: 0,
      values: [
        [6.2, 0],
        [6.4, 0],
        [6.2, 0],
        [5.9, 0]
      ]
    },
    {
      qID: 27,
      cntryID: 1,
      values: [
        [6.6, 0],
        [5.5, 5.1],
        [3.8, 3.3],
        [0, 2]
      ]
    },
    {
      qID: 27,
      cntryID: 2,
      values: [
        [0, 0],
        [5.9, 6.4],
        [4.7, 4.9],
        [3.5, 3.3]
      ]
    },
    {
      qID: 27,
      cntryID: 3,
      values: [
        [3.6, 3.2],
        [3.3, 3],
        [2.4, 2.4],
        [0, 2]
      ]
    },
    {
      qID: 27,
      cntryID: 4,
      values: [
        [7.7, 0],
        [7.4, 0],
        [6.6, 6.9],
        [4.6, 3.9]
      ]
    },
    {
      qID: 27,
      cntryID: 5,
      values: [
        [4.3, 0],
        [4.2, 3.6],
        [2.9, 3.8],
        [0, 0]
      ]
    },
    {
      qID: 27,
      cntryID: 6,
      values: [
        [5.5, 5.2],
        [5.3, 5],
        [0, 3.9],
        [0, 0]
      ]
    },
    {
      qID: 27,
      cntryID: 7,
      values: [
        [5, 6.4],
        [5.1, 5.8],
        [5.1, 5.8],
        [5, 5.2]
      ]
    },
    {
      qID: 27,
      cntryID: 8,
      values: [
        [5.8, 0],
        [6.1, 6.9],
        [6, 5.6],
        [5.5, 5.3]
      ]
    },
    {
      qID: 27,
      cntryID: 9,
      values: [
        [5.5, 4.2],
        [5.2, 3.9],
        [4.1, 3.4],
        [3.1, 2.4]
      ]
    },
    {
      qID: 27,
      cntryID: 10,
      values: [
        [0, 0],
        [7.7, 0],
        [7, 5.9],
        [5.9, 5.5]
      ]
    },
    {
      qID: 27,
      cntryID: 11,
      values: [
        [7.9, 7.9],
        [7.7, 7],
        [6, 5.1],
        [0, 3.5]
      ]
    },
    {
      qID: 27,
      cntryID: 12,
      values: [
        [7.1, 7.1],
        [6.8, 6.8],
        [6, 6.2],
        [0, 5.3]
      ]
    },
    {
      qID: 27,
      cntryID: 13,
      values: [
        [7.2, 0],
        [6.6, 0],
        [5, 4.6],
        [3, 2.9]
      ]
    },
    {
      qID: 27,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 27,
      cntryID: 15,
      values: [
        [5.6, 0],
        [5.7, 5.7],
        [5.6, 5.6],
        [0, 5.6]
      ]
    },
    {
      qID: 27,
      cntryID: 16,
      values: [
        [5.1, 0],
        [4.8, 3.6],
        [4, 3.4],
        [3.5, 3]
      ]
    },
    {
      qID: 27,
      cntryID: 17,
      values: [
        [6.4, 7.4],
        [6.5, 6.6],
        [5.9, 5.5],
        [6.4, 5.1]
      ]
    },
    {
      qID: 27,
      cntryID: 18,
      values: [
        [5.7, 5.8],
        [5.6, 5.5],
        [4.2, 4.5],
        [0, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 0,
      values: [
        [6.6, 0],
        [7, 0],
        [8.4, 0],
        [6.3, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 1,
      values: [
        [9.9, 0],
        [11.4, 10.6],
        [8.1, 11.4],
        [0, 9.7]
      ]
    },
    {
      qID: 28,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 3,
      values: [
        [3.6, 3.4],
        [4.3, 3.7],
        [7.8, 6.9],
        [0, 8.2]
      ]
    },
    {
      qID: 28,
      cntryID: 4,
      values: [
        [8.2, 0],
        [8.9, 0],
        [11.1, 0],
        [8.7, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 5,
      values: [
        [6.2, 8.3],
        [5.9, 6.7],
        [8, 6.7],
        [0, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 6,
      values: [
        [6.4, 8.1],
        [6.6, 8.1],
        [0, 7.4],
        [0, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 7,
      values: [
        [4, 4.7],
        [5.7, 6.9],
        [4.4, 6.2],
        [7.7, 7.3]
      ]
    },
    {
      qID: 28,
      cntryID: 8,
      values: [
        [11.5, 0],
        [11.2, 10.9],
        [12.6, 11],
        [18.3, 15.4]
      ]
    },
    {
      qID: 28,
      cntryID: 9,
      values: [
        [5.1, 7.2],
        [5.8, 7.6],
        [5.7, 9.4],
        [11.4, 9.4]
      ]
    },
    {
      qID: 28,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 12,
      values: [
        [4, 3.3],
        [4.1, 4.2],
        [4.3, 6.3],
        [0, 6.9]
      ]
    },
    {
      qID: 28,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 16,
      values: [
        [4.7, 3.8],
        [4.4, 3.8],
        [5.7, 4.8],
        [3.9, 6.5]
      ]
    },
    {
      qID: 28,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 28,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 29,
      cntryID: 0,
      values: [
        [62.6, 64.8],
        [68.1, 73.7],
        [85.9, 93.2],
        [0, 0]
      ]
    },
    {
      qID: 29,
      cntryID: 1,
      values: [
        [73.1, 0],
        [73.7, 84.2],
        [0, 88],
        [0, 91]
      ]
    },
    {
      qID: 29,
      cntryID: 2,
      values: [
        [0, 0],
        [78.4, 80.7],
        [87.6, 85.2],
        [92.7, 0]
      ]
    },
    {
      qID: 29,
      cntryID: 3,
      values: [
        [63.5, 0],
        [68.6, 69.6],
        [89.8, 91.5],
        [0, 0]
      ]
    },
    {
      qID: 29,
      cntryID: 4,
      values: [
        [75.4, 0],
        [80.2, 0],
        [78.8, 74.7],
        [0, 89.7]
      ]
    },
    {
      qID: 29,
      cntryID: 5,
      values: [
        [58.5, 0],
        [59.8, 73.8],
        [0, 81.2],
        [0, 0]
      ]
    },
    {
      qID: 29,
      cntryID: 6,
      values: [
        [21.7, 0],
        [27.2, 32.8],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 29,
      cntryID: 7,
      values: [
        [58.6, 0],
        [63.2, 69.2],
        [76.1, 77.9],
        [0, 92.9]
      ]
    },
    {
      qID: 29,
      cntryID: 8,
      values: [
        [29.2, 0],
        [40.7, 44.4],
        [60.9, 63],
        [0, 0]
      ]
    },
    {
      qID: 29,
      cntryID: 9,
      values: [
        [0, 74.7],
        [0, 67.6],
        [72, 60.2],
        [0, 65.3]
      ]
    },
    {
      qID: 29,
      cntryID: 10,
      values: [
        [0, 0],
        [63.3, 0],
        [68.6, 0],
        [0, 96.2]
      ]
    },
    {
      qID: 29,
      cntryID: 11,
      values: [
        [75.4, 87.5],
        [75.4, 79.6],
        [0, 75.8],
        [0, 0]
      ]
    },
    {
      qID: 29,
      cntryID: 12,
      values: [
        [40.8, 53.5],
        [44, 63.7],
        [0, 73.6],
        [0, 0]
      ]
    },
    {
      qID: 29,
      cntryID: 13,
      values: [
        [20.5, 0],
        [21.4, 0],
        [26.4, 22.8],
        [28.7, 27.8]
      ]
    },
    {
      qID: 29,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 29,
      cntryID: 15,
      values: [
        [68, 0],
        [73.8, 81.5],
        [75, 80.5],
        [0, 80.3]
      ]
    },
    {
      qID: 29,
      cntryID: 16,
      values: [
        [67.8, 0],
        [77, 87.2],
        [85.7, 89.7],
        [0, 90.1]
      ]
    },
    {
      qID: 29,
      cntryID: 17,
      values: [
        [75.4, 96.5],
        [77.9, 93.3],
        [0, 97.3],
        [0, 0]
      ]
    },
    {
      qID: 29,
      cntryID: 18,
      values: [
        [24.1, 0],
        [16, 26.9],
        [11.8, 23.9],
        [0, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 0,
      values: [
        [64.5, 63.4],
        [68.4, 76.1],
        [81.3, 90],
        [0, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 1,
      values: [
        [54.9, 0],
        [61.4, 75.1],
        [0, 83.2],
        [0, 87.9]
      ]
    },
    {
      qID: 30,
      cntryID: 2,
      values: [
        [0, 0],
        [65.1, 87],
        [80.6, 80.8],
        [89.3, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 3,
      values: [
        [62.5, 0],
        [65.3, 71.6],
        [87.4, 92.7],
        [0, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 4,
      values: [
        [58.3, 0],
        [68.7, 0],
        [65.4, 52.8],
        [0, 65.4]
      ]
    },
    {
      qID: 30,
      cntryID: 5,
      values: [
        [74.9, 0],
        [73.9, 76.3],
        [0, 75.1],
        [0, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 6,
      values: [
        [34.7, 0],
        [40.6, 45],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 7,
      values: [
        [53, 0],
        [65.7, 77.2],
        [73.4, 84.6],
        [0, 81.5]
      ]
    },
    {
      qID: 30,
      cntryID: 8,
      values: [
        [25.1, 0],
        [34.1, 49.5],
        [56.9, 67.9],
        [0, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 9,
      values: [
        [0, 63.5],
        [0, 65.7],
        [57, 57.2],
        [0, 79.4]
      ]
    },
    {
      qID: 30,
      cntryID: 10,
      values: [
        [0, 0],
        [56.1, 0],
        [65.9, 0],
        [0, 96.9]
      ]
    },
    {
      qID: 30,
      cntryID: 11,
      values: [
        [76.9, 90.8],
        [78.9, 88.6],
        [0, 91.3],
        [0, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 12,
      values: [
        [31.2, 37.9],
        [36.3, 54.5],
        [0, 58.2],
        [0, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 15,
      values: [
        [73.2, 0],
        [75.5, 61.7],
        [78.1, 75.9],
        [0, 78.3]
      ]
    },
    {
      qID: 30,
      cntryID: 16,
      values: [
        [55.7, 0],
        [64.6, 67.4],
        [74.3, 74.4],
        [0, 74.2]
      ]
    },
    {
      qID: 30,
      cntryID: 17,
      values: [
        [76.9, 82.1],
        [78.5, 84.9],
        [0, 80.2],
        [0, 0]
      ]
    },
    {
      qID: 30,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 31,
      cntryID: 0,
      values: [
        [8.9, 0],
        [8.7, 0],
        [9.1, 0],
        [7.6, 0]
      ]
    },
    {
      qID: 31,
      cntryID: 1,
      values: [
        [3.5, 1.8],
        [3.2, 2.8],
        [0.8, 1.8],
        [0, 0.8]
      ]
    },
    {
      qID: 31,
      cntryID: 2,
      values: [
        [9.9, 9.2],
        [9.3, 6.8],
        [7.7, 4.6],
        [0, 0]
      ]
    },
    {
      qID: 31,
      cntryID: 3,
      values: [
        [6.9, 3.3],
        [6.7, 6.5],
        [5.8, 3.6],
        [0, 2.4]
      ]
    },
    {
      qID: 31,
      cntryID: 4,
      values: [
        [5.4, 0],
        [5.6, 0],
        [4.3, 0],
        [5.3, 0]
      ]
    },
    {
      qID: 31,
      cntryID: 5,
      values: [
        [9.6, 10.7],
        [8, 6.2],
        [5.4, 4.2],
        [0, 0]
      ]
    },
    {
      qID: 31,
      cntryID: 6,
      values: [
        [10.3, 9.3],
        [9.4, 7.9],
        [0, 3.4],
        [0, 0]
      ]
    },
    {
      qID: 31,
      cntryID: 7,
      values: [
        [4, 2.6],
        [5.3, 2.2],
        [5.9, 2.1],
        [4.4, 4]
      ]
    },
    {
      qID: 31,
      cntryID: 8,
      values: [
        [9.7, 0],
        [10.9, 8.2],
        [11.3, 9.3],
        [10.5, 8]
      ]
    },
    {
      qID: 31,
      cntryID: 9,
      values: [
        [3.1, 3.2],
        [3.1, 2.7],
        [3.2, 3.8],
        [4.7, 3.4]
      ]
    },
    {
      qID: 31,
      cntryID: 10,
      values: [
        [0, 0],
        [9.9, 0],
        [8.3, 7.7],
        [7.2, 6.2]
      ]
    },
    {
      qID: 31,
      cntryID: 11,
      values: [
        [5, 5.6],
        [4.8, 4.4],
        [0, 2.9],
        [0, 2.2]
      ]
    },
    {
      qID: 31,
      cntryID: 12,
      values: [
        [9.8, 7.8],
        [9.5, 7.5],
        [3.4, 4.5],
        [0, 1.6]
      ]
    },
    {
      qID: 31,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 31,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 31,
      cntryID: 15,
      values: [
        [3.9, 1.6],
        [3.5, 3.4],
        [3.7, 3.3],
        [0, 3.6]
      ]
    },
    {
      qID: 31,
      cntryID: 16,
      values: [
        [7.1, 8],
        [6.6, 6.1],
        [7.8, 4],
        [5.3, 4.7]
      ]
    },
    {
      qID: 31,
      cntryID: 17,
      values: [
        [9.4, 10.7],
        [9.3, 8.6],
        [4.2, 6.2],
        [0, 0]
      ]
    },
    {
      qID: 31,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 32,
      cntryID: 0,
      values: [
        [14.1, 0],
        [13.5, 0],
        [13.4, 0],
        [10.1, 0]
      ]
    },
    {
      qID: 32,
      cntryID: 1,
      values: [
        [3.9, 1.8],
        [3.8, 2.8],
        [0.8, 1.8],
        [0, 1.9]
      ]
    },
    {
      qID: 32,
      cntryID: 2,
      values: [
        [12.2, 10.6],
        [11.5, 8.3],
        [8.7, 5.6],
        [0, 0]
      ]
    },
    {
      qID: 32,
      cntryID: 3,
      values: [
        [11, 12.5],
        [10.5, 10.3],
        [7.5, 6.1],
        [0, 2.8]
      ]
    },
    {
      qID: 32,
      cntryID: 4,
      values: [
        [6.9, 0],
        [7, 0],
        [5.7, 0],
        [6.4, 0]
      ]
    },
    {
      qID: 32,
      cntryID: 5,
      values: [
        [12, 12.9],
        [10.2, 7.8],
        [6.2, 4.9],
        [0, 0]
      ]
    },
    {
      qID: 32,
      cntryID: 6,
      values: [
        [12.7, 12.1],
        [11.5, 9.7],
        [0, 3.9],
        [0, 0]
      ]
    },
    {
      qID: 32,
      cntryID: 7,
      values: [
        [5.6, 3.2],
        [7, 3.7],
        [6.7, 2.4],
        [4.8, 4.6]
      ]
    },
    {
      qID: 32,
      cntryID: 8,
      values: [
        [13.7, 0],
        [15.2, 10.9],
        [15.5, 11.5],
        [16.9, 10.9]
      ]
    },
    {
      qID: 32,
      cntryID: 9,
      values: [
        [3.2, 3.6],
        [3.3, 3],
        [3.2, 3.9],
        [4.7, 3.4]
      ]
    },
    {
      qID: 32,
      cntryID: 10,
      values: [
        [0, 0],
        [12.3, 0],
        [11.1, 8.7],
        [8.1, 7.1]
      ]
    },
    {
      qID: 32,
      cntryID: 11,
      values: [
        [6.2, 6.6],
        [5.9, 5.1],
        [0, 3.4],
        [0, 2.2]
      ]
    },
    {
      qID: 32,
      cntryID: 12,
      values: [
        [11.5, 9.8],
        [11, 9.1],
        [3.8, 5.1],
        [0, 1.7]
      ]
    },
    {
      qID: 32,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 32,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 32,
      cntryID: 15,
      values: [
        [5.8, 3.3],
        [5.2, 4.7],
        [5.4, 5],
        [0, 5.5]
      ]
    },
    {
      qID: 32,
      cntryID: 16,
      values: [
        [3.3, 6.1],
        [3.2, 2.4],
        [3.1, 2.2],
        [7.5, 1.9]
      ]
    },
    {
      qID: 32,
      cntryID: 17,
      values: [
        [12.8, 13.3],
        [12.6, 10.7],
        [8.2, 8.5],
        [0, 0]
      ]
    },
    {
      qID: 32,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 0,
      values: [
        [-2.07, -2.1],
        [-1.92, -1.9],
        [-1.4, -1],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 1,
      values: [
        [-1.45, -1.4],
        [-1.13, -1.1],
        [-0.46, -0.5],
        [0, -0.1]
      ]
    },
    {
      qID: 33,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 3,
      values: [
        [-1.32, 0],
        [-1.33, -1],
        [-0.77, -0.7],
        [0, -0.1]
      ]
    },
    {
      qID: 33,
      cntryID: 4,
      values: [
        [-2.45, 0],
        [-2.49, 0],
        [-2.3, -2.4],
        [-1.29, -1.3]
      ]
    },
    {
      qID: 33,
      cntryID: 5,
      values: [
        [-1.88, 0],
        [-1.8, -1.4],
        [0, -1.4],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 6,
      values: [
        [-2.3, -2.5],
        [-2.21, -2],
        [0, -1.1],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 7,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 8,
      values: [
        [-1.33, 0],
        [-1.28, -1.1],
        [-1.14, -0.8],
        [0, -0.6]
      ]
    },
    {
      qID: 33,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 10,
      values: [
        [0, 0],
        [-1.9, 0],
        [-1.39, -1.1],
        [-0.62, -0.7]
      ]
    },
    {
      qID: 33,
      cntryID: 11,
      values: [
        [-1.39, -1.1],
        [-1.32, -0.8],
        [0, -0.2],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 12,
      values: [
        [-2.28, -2.4],
        [-2.18, -1.8],
        [0, -1.2],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 15,
      values: [
        [-1.29, 0],
        [-1.31, -1.2],
        [-1.19, -1.2],
        [0, -1.3]
      ]
    },
    {
      qID: 33,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 17,
      values: [
        [-1.87, -1.8],
        [-1.82, -1.5],
        [-1.01, -1.1],
        [0, 0]
      ]
    },
    {
      qID: 33,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 0,
      values: [
        [1.1, 1.2],
        [1.6, 3.1],
        [2.1, 29.6],
        [0, 67.9]
      ]
    },
    {
      qID: 34,
      cntryID: 1,
      values: [
        [31.1, 33.2],
        [37.2, 45.9],
        [49.4, 58.2],
        [60, 66.1]
      ]
    },
    {
      qID: 34,
      cntryID: 2,
      values: [
        [0, 0],
        [70.8, 75.8],
        [80.1, 76.4],
        [80.6, 81.5]
      ]
    },
    {
      qID: 34,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 5,
      values: [
        [25, 26.4],
        [31, 37.3],
        [57, 64.5],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 6,
      values: [
        [43.1, 48.4],
        [44.6, 59.2],
        [0, 79.8],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 7,
      values: [
        [91.4, 93.2],
        [93.3, 95.7],
        [95.5, 96.9],
        [98.5, 97]
      ]
    },
    {
      qID: 34,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 11,
      values: [
        [38.7, 38.4],
        [39.6, 38.4],
        [0, 38.5],
        [0, 42.6]
      ]
    },
    {
      qID: 34,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 13,
      values: [
        [6.5, 0],
        [9.9, 0],
        [13.2, 5.4],
        [12.6, 4.4]
      ]
    },
    {
      qID: 34,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 34,
      cntryID: 18,
      values: [
        [67.1, 82.5],
        [72.3, 87.8],
        [85.3, 96.7],
        [0, 93.8]
      ]
    },
    {
      qID: 35,
      cntryID: 0,
      values: [
        [91.2, 0],
        [91.5, 0],
        [93.2, 0],
        [85, 0]
      ]
    },
    {
      qID: 35,
      cntryID: 1,
      values: [
        [67.4, 51.7],
        [65.8, 63.7],
        [65.1, 74.4],
        [85.8, 86.1]
      ]
    },
    {
      qID: 35,
      cntryID: 2,
      values: [
        [0, 0],
        [39.6, 44.1],
        [47.3, 48.4],
        [44.5, 54.4]
      ]
    },
    {
      qID: 35,
      cntryID: 3,
      values: [
        [56.8, 33.6],
        [57.5, 50.3],
        [76, 76.3],
        [87.7, 90.6]
      ]
    },
    { qID: 35, cntryID: 4, values: [[4.8, 0], [9.3, 0], [12.2, 0], [12.4]] },
    {
      qID: 35,
      cntryID: 5,
      values: [
        [0, 23.9],
        [0, 36.7],
        [0, 45.8],
        [0, 36.1]
      ]
    },
    {
      qID: 35,
      cntryID: 6,
      values: [
        [75, 0],
        [75.2, 0],
        [67.3, 0],
        [0, 0]
      ]
    },
    {
      qID: 35,
      cntryID: 7,
      values: [
        [69.1, 58.2],
        [73.9, 64.5],
        [76.6, 65.1],
        [61.5, 55]
      ]
    },
    {
      qID: 35,
      cntryID: 8,
      values: [
        [75.1, 29],
        [77.2, 59.3],
        [79, 67.5],
        [76.5, 65.2]
      ]
    },
    {
      qID: 35,
      cntryID: 9,
      values: [
        [34.5, 56.4],
        [47.6, 66],
        [66.3, 81.2],
        [69.9, 88.6]
      ]
    },
    {
      qID: 35,
      cntryID: 10,
      values: [
        [15.2, 0],
        [19, 0],
        [26.1, 0],
        [37, 0]
      ]
    },
    {
      qID: 35,
      cntryID: 11,
      values: [
        [7.7, 13.5],
        [14.6, 14.3],
        [18.5, 19.3],
        [0, 30.7]
      ]
    },
    {
      qID: 35,
      cntryID: 12,
      values: [
        [68.7, 59.8],
        [71, 60.4],
        [67.5, 58.4],
        [0, 48.3]
      ]
    },
    {
      qID: 35,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 35,
      cntryID: 14,
      values: [
        [77.2, 82.4],
        [78.9, 81.3],
        [90.2, 81.3],
        [0, 0]
      ]
    },
    {
      qID: 35,
      cntryID: 15,
      values: [
        [19.2, 0],
        [20.9, 17],
        [26.9, 21.7],
        [54.8, 36.4]
      ]
    },
    {
      qID: 35,
      cntryID: 16,
      values: [
        [35.8, 54.4],
        [42.5, 61.2],
        [47.5, 53.6],
        [53, 62.3]
      ]
    },
    {
      qID: 35,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 35,
      cntryID: 18,
      values: [
        [90.8, 81.9],
        [92.4, 80],
        [89.7, 69.9],
        [0, 68.8]
      ]
    },
    {
      qID: 36,
      cntryID: 0,
      values: [
        [23.8, 0],
        [21.3, 0],
        [18.2, 0],
        [7.3, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 2,
      values: [
        [0, 0],
        [6.3, 9.6],
        [9.5, 8.5],
        [11.6, 8.7]
      ]
    },
    {
      qID: 36,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 5,
      values: [
        [16.6, 17.5],
        [14, 12.1],
        [8.5, 6.5],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 6,
      values: [
        [14.9, 12.9],
        [13.7, 8.1],
        [0, 4],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 7,
      values: [
        [38.2, 30],
        [37.5, 31.8],
        [37.4, 30.4],
        [39.2, 26.3]
      ]
    },
    {
      qID: 36,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 9,
      values: [
        [8.7, 14.2],
        [10.3, 14.5],
        [13.5, 17.7],
        [16.2, 25.3]
      ]
    },
    {
      qID: 36,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 11,
      values: [
        [2.2, 5.4],
        [2.2, 5.9],
        [0, 8.4],
        [0, 13.4]
      ]
    },
    {
      qID: 36,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 16,
      values: [
        [21.6, 0],
        [25.3, 36.8],
        [25.4, 35.1],
        [0, 32.3]
      ]
    },
    {
      qID: 36,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 36,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 0,
      values: [
        [17.7, 0],
        [17.7, 0],
        [18.4, 0],
        [19.5, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 1,
      values: [
        [21.4, 21.1],
        [21.9, 22.4],
        [22.7, 23.8],
        [24, 24.7]
      ]
    },
    {
      qID: 37,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 7,
      values: [
        [20.1, 20.2],
        [20.1, 20.9],
        [20.8, 21.6],
        [21.3, 22.1]
      ]
    },
    {
      qID: 37,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 16,
      values: [
        [23.3, 0],
        [22.3, 24.7],
        [22.1, 23.1],
        [0, 23.9]
      ]
    },
    {
      qID: 37,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 37,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 38,
      cntryID: 0,
      values: [
        [18.1, 0],
        [18.5, 0],
        [18.7, 0],
        [21.2, 0]
      ]
    },
    {
      qID: 38,
      cntryID: 1,
      values: [
        [22.9, 23.1],
        [23.2, 24.1],
        [24, 24.3],
        [24.5, 24.3]
      ]
    },
    {
      qID: 38,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 38,
      cntryID: 3,
      values: [
        [21, 0],
        [21.3, 22.7],
        [23.9, 24],
        [0, 25.7]
      ]
    },
    {
      qID: 38,
      cntryID: 4,
      values: [
        [23.7, 0],
        [23.9, 24.2],
        [24.6, 24.5],
        [26.5, 25.7]
      ]
    },
    {
      qID: 38,
      cntryID: 5,
      values: [
        [18.9, 19.6],
        [19.4, 20.7],
        [23.1, 23],
        [0, 0]
      ]
    },
    {
      qID: 38,
      cntryID: 6,
      values: [
        [19.3, 19.2],
        [19.5, 20.7],
        [0, 23.3],
        [0, 0]
      ]
    },
    {
      qID: 38,
      cntryID: 7,
      values: [
        [20.9, 21.7],
        [21.1, 22.4],
        [21.6, 22.7],
        [22, 22.9]
      ]
    },
    {
      qID: 38,
      cntryID: 8,
      values: [
        [21.2, 0],
        [21.4, 22.2],
        [21.8, 23],
        [0, 24.4]
      ]
    },
    {
      qID: 38,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 38,
      cntryID: 10,
      values: [
        [0, 0],
        [22.5, 0],
        [23.1, 24],
        [25.6, 25.8]
      ]
    },
    {
      qID: 38,
      cntryID: 11,
      values: [
        [24.6, 25.2],
        [25, 26.2],
        [0, 26.6],
        [0, 26.4]
      ]
    },
    {
      qID: 38,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 38,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 38,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 38,
      cntryID: 15,
      values: [
        [24.3, 0],
        [24.4, 24.6],
        [24.5, 24.6],
        [0, 24.5]
      ]
    },
    {
      qID: 38,
      cntryID: 16,
      values: [
        [25.5, 0],
        [26.1, 27.8],
        [26.9, 27.5],
        [0, 28.2]
      ]
    },
    {
      qID: 38,
      cntryID: 17,
      values: [
        [21.6, 22],
        [21.8, 22.7],
        [25, 24.6],
        [0, 0]
      ]
    },
    {
      qID: 38,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 39,
      cntryID: 0,
      values: [
        [16.1, 0],
        [32.3, 0],
        [59.7, 0],
        [72.7, 0]
      ]
    },
    {
      qID: 39,
      cntryID: 1,
      values: [
        [33.1, 38.8],
        [39.2, 52.7],
        [61.1, 72.1],
        [79, 84.3]
      ]
    },
    {
      qID: 39,
      cntryID: 2,
      values: [
        [0, 0],
        [91, 83.1],
        [93.7, 90.9],
        [97.5, 96.6]
      ]
    },
    {
      qID: 39,
      cntryID: 3,
      values: [
        [32.7, 43.8],
        [40.4, 57.4],
        [56.1, 75.5],
        [75.8, 91]
      ]
    },
    {
      qID: 39,
      cntryID: 4,
      values: [
        [54.3, 0],
        [58.5, 0],
        [73.2, 0],
        [81.1, 0]
      ]
    },
    {
      qID: 39,
      cntryID: 5,
      values: [
        [0, 53],
        [0, 61.9],
        [0, 70.9],
        [0, 67.2]
      ]
    },
    {
      qID: 39,
      cntryID: 6,
      values: [
        [20.1, 0],
        [24, 0],
        [55.3, 0],
        [0, 0]
      ]
    },
    {
      qID: 39,
      cntryID: 7,
      values: [
        [67.1, 80.8],
        [71.5, 86.2],
        [80.3, 93],
        [90.2, 97.6]
      ]
    },
    {
      qID: 39,
      cntryID: 8,
      values: [
        [9.8, 27.4],
        [18.8, 33.3],
        [30.7, 51.6],
        [40.6, 75.3]
      ]
    },
    {
      qID: 39,
      cntryID: 9,
      values: [
        [67.8, 81.6],
        [72.9, 86.6],
        [83.8, 92.4],
        [86, 97.7]
      ]
    },
    {
      qID: 39,
      cntryID: 10,
      values: [
        [0, 0],
        [2.2, 0],
        [6.2, 15.7],
        [32.6, 52.8]
      ]
    },
    {
      qID: 39,
      cntryID: 11,
      values: [
        [52.5, 57.3],
        [61.1, 77.4],
        [74.9, 88],
        [76.7, 97.5]
      ]
    },
    {
      qID: 39,
      cntryID: 12,
      values: [
        [22.6, 42.9],
        [26.4, 49.8],
        [39.2, 66.1],
        [0, 74.6]
      ]
    },
    {
      qID: 39,
      cntryID: 13,
      values: [
        [48.3, 0],
        [56.5, 0],
        [72.3, 77.7],
        [84.1, 87.4]
      ]
    },
    {
      qID: 39,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 39,
      cntryID: 15,
      values: [
        [67.4, 0],
        [73.4, 86.2],
        [82.3, 89.9],
        [90.2, 94.6]
      ]
    },
    {
      qID: 39,
      cntryID: 16,
      values: [
        [66.6, 0],
        [68.1, 73.1],
        [76.4, 77.8],
        [94.1, 93.5]
      ]
    },
    {
      qID: 39,
      cntryID: 17,
      values: [
        [59.7, 48.9],
        [66.1, 67.8],
        [76.6, 82.5],
        [82.9, 88.7]
      ]
    },
    {
      qID: 39,
      cntryID: 18,
      values: [
        [36.4, 50.8],
        [39.3, 56.5],
        [46.3, 74.3],
        [0, 87.2]
      ]
    },
    {
      qID: 40,
      cntryID: 0,
      values: [
        [74.3, 0],
        [82.6, 0],
        [96.4, 0],
        [0, 0]
      ]
    },
    {
      qID: 40,
      cntryID: 1,
      values: [
        [80.6, 77.5],
        [82.9, 87.7],
        [93.7, 97.2],
        [0, 100]
      ]
    },
    {
      qID: 40,
      cntryID: 2,
      values: [
        [0, 0],
        [98.2, 92.3],
        [96.8, 92.6],
        [100, 0]
      ]
    },
    {
      qID: 40,
      cntryID: 3,
      values: [
        [69.4, 81.9],
        [76.5, 83.9],
        [86, 86],
        [0, 0]
      ]
    },
    {
      qID: 40,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 40,
      cntryID: 5,
      values: [
        [0, 88.7],
        [0, 90.3],
        [0, 96.5],
        [0, 0]
      ]
    },
    {
      qID: 40,
      cntryID: 6,
      values: [
        [61, 0],
        [63.7, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 40,
      cntryID: 7,
      values: [
        [91.6, 92.4],
        [92.2, 94.7],
        [96.6, 98.9],
        [0, 100]
      ]
    },
    {
      qID: 40,
      cntryID: 8,
      values: [
        [16.9, 0],
        [34.3, 44.2],
        [49.8, 61.3],
        [71.3, 59.9]
      ]
    },
    {
      qID: 40,
      cntryID: 9,
      values: [
        [97.1, 95.4],
        [96.7, 97.6],
        [98.8, 96.3],
        [96.4, 99.1]
      ]
    },
    {
      qID: 40,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 40,
      cntryID: 11,
      values: [
        [72.2, 73],
        [79.2, 87.9],
        [94.3, 96],
        [0, 97.7]
      ]
    },
    {
      qID: 40,
      cntryID: 12,
      values: [
        [28.5, 65.1],
        [36.7, 69.5],
        [56.2, 84.6],
        [0, 0]
      ]
    },
    {
      qID: 40,
      cntryID: 13,
      values: [
        [84.9, 0],
        [91.4, 0],
        [96.8, 97.7],
        [99.1, 100]
      ]
    },
    {
      qID: 40,
      cntryID: 14,
      values: [
        [70.8, 0],
        [71.7, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 40,
      cntryID: 15,
      values: [
        [92.6, 0],
        [95.4, 97.4],
        [97.5, 98.9],
        [0, 100]
      ]
    },
    {
      qID: 40,
      cntryID: 16,
      values: [
        [87.2, 83.6],
        [89.1, 92.7],
        [86.6, 93.5],
        [0, 94.1]
      ]
    },
    {
      qID: 40,
      cntryID: 17,
      values: [
        [45.3, 62.3],
        [52.1, 64.2],
        [60.5, 70],
        [0, 68.1]
      ]
    },
    {
      qID: 40,
      cntryID: 18,
      values: [
        [75.4, 0],
        [80.2, 87.8],
        [93.2, 97.7],
        [0, 0]
      ]
    },
    {
      qID: 41,
      cntryID: 0,
      values: [
        [83.8, 0],
        [88.5, 0],
        [93.1, 0],
        [0, 0]
      ]
    },
    {
      qID: 41,
      cntryID: 1,
      values: [
        [78.2, 85.8],
        [82.1, 90.8],
        [93.3, 95.9],
        [0, 97.9]
      ]
    },
    {
      qID: 41,
      cntryID: 2,
      values: [
        [0, 0],
        [90, 85.3],
        [95.2, 99.9],
        [100, 0]
      ]
    },
    {
      qID: 41,
      cntryID: 3,
      values: [
        [74.8, 86.7],
        [79.1, 89],
        [88.3, 93.4],
        [0, 0]
      ]
    },
    {
      qID: 41,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 41,
      cntryID: 5,
      values: [
        [0, 89.5],
        [0, 91.6],
        [0, 95.5],
        [0, 0]
      ]
    },
    {
      qID: 41,
      cntryID: 6,
      values: [
        [85.2, 0],
        [86.2, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 41,
      cntryID: 7,
      values: [
        [87.9, 91.7],
        [90.7, 95.7],
        [90.4, 97.4],
        [0, 100]
      ]
    },
    {
      qID: 41,
      cntryID: 8,
      values: [
        [29.3, 0],
        [48.4, 55],
        [67.9, 77.5],
        [73.3, 71.8]
      ]
    },
    {
      qID: 41,
      cntryID: 9,
      values: [
        [96, 94.8],
        [97.2, 96.7],
        [97.2, 97.6],
        [100, 97.3]
      ]
    },
    {
      qID: 41,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 41,
      cntryID: 11,
      values: [
        [69, 72.8],
        [76.3, 86.8],
        [91.2, 95.7],
        [0, 100]
      ]
    },
    {
      qID: 41,
      cntryID: 12,
      values: [
        [63.6, 76.3],
        [69, 77.1],
        [86.3, 90.9],
        [0, 0]
      ]
    },
    {
      qID: 41,
      cntryID: 13,
      values: [
        [86.7, 0],
        [92.8, 0],
        [96.2, 98.5],
        [100, 100]
      ]
    },
    {
      qID: 41,
      cntryID: 14,
      values: [
        [68.3, 0],
        [70.5, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 41,
      cntryID: 15,
      values: [
        [91.5, 0],
        [94.1, 98.4],
        [96.8, 98.7],
        [0, 100]
      ]
    },
    {
      qID: 41,
      cntryID: 16,
      values: [
        [82.5, 85.9],
        [84.4, 89.2],
        [85.6, 91.2],
        [0, 92.7]
      ]
    },
    {
      qID: 41,
      cntryID: 17,
      values: [
        [46.4, 53.1],
        [47.8, 49.4],
        [62.1, 63.9],
        [0, 75.6]
      ]
    },
    {
      qID: 41,
      cntryID: 18,
      values: [
        [79.8, 87.9],
        [81.6, 87.7],
        [83.2, 89.1],
        [0, 0]
      ]
    },
    {
      qID: 42,
      cntryID: 0,
      values: [
        [58.9, 0],
        [69.4, 0],
        [74.3, 0],
        [0, 0]
      ]
    },
    {
      qID: 42,
      cntryID: 1,
      values: [
        [59.1, 0],
        [61, 64.2],
        [78.6, 75],
        [0, 81.3]
      ]
    },
    {
      qID: 42,
      cntryID: 2,
      values: [
        [0, 0],
        [51.8, 41.1],
        [66.5, 56.2],
        [87.7, 0]
      ]
    },
    {
      qID: 42,
      cntryID: 3,
      values: [
        [45.8, 58],
        [50.8, 62.2],
        [58.4, 60.5],
        [0, 0]
      ]
    },
    {
      qID: 42,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 42,
      cntryID: 5,
      values: [
        [0, 42.8],
        [0, 51.9],
        [0, 66],
        [0, 0]
      ]
    },
    {
      qID: 42,
      cntryID: 6,
      values: [
        [14.7, 0],
        [16.7, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 42,
      cntryID: 7,
      values: [
        [46.1, 59.9],
        [53.8, 67.2],
        [58.5, 77.8],
        [58.3, 82.2]
      ]
    },
    {
      qID: 42,
      cntryID: 8,
      values: [
        [10, 0],
        [14.5, 21.4],
        [25.2, 41.7],
        [27.3, 46.9]
      ]
    },
    {
      qID: 42,
      cntryID: 9,
      values: [
        [48.7, 43.6],
        [54.1, 53.4],
        [57.4, 67.1],
        [79.8, 80.4]
      ]
    },
    {
      qID: 42,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 42,
      cntryID: 11,
      values: [
        [40.5, 59.9],
        [48.8, 70.9],
        [57.8, 77.7],
        [0, 74]
      ]
    },
    {
      qID: 42,
      cntryID: 12,
      values: [
        [9.7, 26.2],
        [16.2, 34.9],
        [23.4, 60.5],
        [0, 0]
      ]
    },
    {
      qID: 42,
      cntryID: 13,
      values: [
        [21.9, 0],
        [35.2, 0],
        [61.4, 69.4],
        [90.4, 89]
      ]
    },
    {
      qID: 42,
      cntryID: 14,
      values: [
        [48.2, 0],
        [50.8, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 42,
      cntryID: 15,
      values: [
        [65.5, 0],
        [62.6, 76.6],
        [69.2, 79.9],
        [0, 79.2]
      ]
    },
    {
      qID: 42,
      cntryID: 16,
      values: [
        [85.6, 0],
        [84.7, 91.4],
        [84.5, 89.5],
        [0, 94.5]
      ]
    },
    {
      qID: 42,
      cntryID: 17,
      values: [
        [47.6, 45.8],
        [55.6, 54.6],
        [65.8, 69.4],
        [0, 76.3]
      ]
    },
    {
      qID: 42,
      cntryID: 18,
      values: [
        [88.6, 0],
        [90.4, 89.5],
        [0, 90.4],
        [0, 0]
      ]
    },
    {
      qID: 43,
      cntryID: 0,
      values: [
        [46.8, 0],
        [60.7, 0],
        [74.7, 0],
        [0, 0]
      ]
    },
    {
      qID: 43,
      cntryID: 1,
      values: [
        [44.6, 0],
        [48.5, 68.1],
        [63.8, 84.2],
        [0, 88.7]
      ]
    },
    {
      qID: 43,
      cntryID: 2,
      values: [
        [0, 0],
        [71, 44.3],
        [62.3, 55.5],
        [0, 0]
      ]
    },
    {
      qID: 43,
      cntryID: 3,
      values: [
        [62.4, 67.5],
        [62.6, 68.6],
        [62, 76.7],
        [0, 0]
      ]
    },
    {
      qID: 43,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 43,
      cntryID: 5,
      values: [
        [0, 53.8],
        [0, 58],
        [0, 67.5],
        [0, 0]
      ]
    },
    {
      qID: 43,
      cntryID: 6,
      values: [
        [28.6, 0],
        [31.5, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 43,
      cntryID: 7,
      values: [
        [48.8, 57.2],
        [55.4, 70.3],
        [68.9, 74.4],
        [0, 83.5]
      ]
    },
    {
      qID: 43,
      cntryID: 8,
      values: [
        [17.5, 0],
        [28.6, 34.5],
        [51.4, 64.6],
        [53.4, 67.3]
      ]
    },
    {
      qID: 43,
      cntryID: 9,
      values: [
        [59.1, 45.1],
        [62.1, 52.5],
        [60.5, 67.5],
        [71.4, 78.5]
      ]
    },
    {
      qID: 43,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 43,
      cntryID: 11,
      values: [
        [29.2, 35.8],
        [36.7, 58.5],
        [56.5, 76],
        [0, 89.8]
      ]
    },
    {
      qID: 43,
      cntryID: 12,
      values: [
        [40.8, 40.4],
        [46.7, 48.7],
        [60, 71.3],
        [0, 0]
      ]
    },
    {
      qID: 43,
      cntryID: 13,
      values: [
        [30.8, 0],
        [34.8, 0],
        [50.2, 71.6],
        [81.6, 86.4]
      ]
    },
    {
      qID: 43,
      cntryID: 14,
      values: [
        [59.1, 0],
        [61, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 43,
      cntryID: 15,
      values: [
        [72.7, 0],
        [75.5, 82.4],
        [71.7, 83.4],
        [0, 77.2]
      ]
    },
    {
      qID: 43,
      cntryID: 16,
      values: [
        [79, 0],
        [83.4, 89.4],
        [87.2, 89.8],
        [0, 91.8]
      ]
    },
    {
      qID: 43,
      cntryID: 17,
      values: [
        [57.5, 56.4],
        [61.5, 62.1],
        [67.6, 69.2],
        [0, 91.9]
      ]
    },
    {
      qID: 43,
      cntryID: 18,
      values: [
        [83.9, 0],
        [90.1, 94.4],
        [89.4, 89.7],
        [0, 0]
      ]
    },
    {
      qID: 44,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 44,
      cntryID: 1,
      values: [
        [0.6, 2.6],
        [0.5, 2.4],
        [0.4, 8.4],
        [0, 40.3]
      ]
    },
    {
      qID: 44,
      cntryID: 2,
      values: [
        [0, 0],
        [20.4, 17],
        [16.8, 15.5],
        [41.5, 35.1]
      ]
    },
    {
      qID: 44,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 44,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 44,
      cntryID: 5,
      values: [
        [0, 33.9],
        [0, 55.5],
        [0, 80.5],
        [0, 0]
      ]
    },
    {
      qID: 44,
      cntryID: 6,
      values: [
        [1.5, 0],
        [3.2, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 44,
      cntryID: 7,
      values: [
        [17.3, 19.4],
        [17.1, 21.1],
        [16.4, 30.4],
        [26.4, 41.1]
      ]
    },
    {
      qID: 44,
      cntryID: 8,
      values: [
        [11.9, 0],
        [7.2, 35.9],
        [7.7, 28],
        [10.4, 34.5]
      ]
    },
    {
      qID: 44,
      cntryID: 9,
      values: [
        [0.6, 0],
        [0.4, 1.7],
        [1.5, 4.2],
        [1.1, 24.1]
      ]
    },
    {
      qID: 44,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 44,
      cntryID: 11,
      values: [
        [0.4, 1.1],
        [0.6, 3.3],
        [3.1, 15.6],
        [0, 41.4]
      ]
    },
    {
      qID: 44,
      cntryID: 12,
      values: [
        [4.2, 21.2],
        [4.1, 23.3],
        [7.4, 40.5],
        [0, 0]
      ]
    },
    {
      qID: 44,
      cntryID: 13,
      values: [
        [1.3, 0],
        [1, 0],
        [1.3, 0],
        [3.7, 10.3]
      ]
    },
    {
      qID: 44,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 44,
      cntryID: 15,
      values: [
        [0, 0],
        [0.3, 0],
        [4.7, 4.6],
        [0, 29.2]
      ]
    },
    {
      qID: 44,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 44,
      cntryID: 17,
      values: [
        [1.2, 0],
        [0.8, 0.3],
        [2.1, 1.2],
        [0, 3.2]
      ]
    },
    {
      qID: 44,
      cntryID: 18,
      values: [
        [8.2, 30.7],
        [9.7, 24.6],
        [19.4, 17.9],
        [0, 0]
      ]
    },
    {
      qID: 45,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 45,
      cntryID: 1,
      values: [
        [0, 1.9],
        [1.3, 0.4],
        [0, 4.1],
        [0, 17.8]
      ]
    },
    {
      qID: 45,
      cntryID: 2,
      values: [
        [0, 0],
        [22.8, 7.6],
        [21.3, 14.8],
        [35.6, 18.5]
      ]
    },
    {
      qID: 45,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 45,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 45,
      cntryID: 5,
      values: [
        [0, 30.1],
        [0, 53.8],
        [0, 76.9],
        [0, 0]
      ]
    },
    {
      qID: 45,
      cntryID: 6,
      values: [
        [0.9, 0],
        [0.7, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 45,
      cntryID: 7,
      values: [
        [22.8, 32],
        [24.2, 31.8],
        [24.7, 30.2],
        [0, 29.5]
      ]
    },
    {
      qID: 45,
      cntryID: 8,
      values: [
        [0, 0],
        [19.3, 0],
        [15.7, 70.3],
        [0, 42.6]
      ]
    },
    {
      qID: 45,
      cntryID: 9,
      values: [
        [0, 4.6],
        [0.2, 4.3],
        [3.5, 8.4],
        [5.8, 21.5]
      ]
    },
    {
      qID: 45,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 45,
      cntryID: 11,
      values: [
        [1.1, 2.8],
        [5.4, 11.2],
        [12, 24.5],
        [0, 58.1]
      ]
    },
    {
      qID: 45,
      cntryID: 12,
      values: [
        [0.7, 8.3],
        [2.4, 11],
        [6.5, 22.2],
        [0, 0]
      ]
    },
    {
      qID: 45,
      cntryID: 13,
      values: [
        [4.4, 0],
        [3.9, 0],
        [2.6, 2.7],
        [4.9, 10.9]
      ]
    },
    {
      qID: 45,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 45,
      cntryID: 15,
      values: [
        [0, 0],
        [0.4, 5.4],
        [2, 6.5],
        [0, 26.5]
      ]
    },
    {
      qID: 45,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 45,
      cntryID: 17,
      values: [
        [1.6, 0],
        [1.8, 1.5],
        [6.5, 10.6],
        [0, 17.7]
      ]
    },
    {
      qID: 45,
      cntryID: 18,
      values: [
        [8.3, 16.7],
        [11.1, 22.9],
        [17.6, 23.1],
        [0, 0]
      ]
    },
    {
      qID: 46,
      cntryID: 0,
      values: [
        [6.73, 0],
        [6.67, 0],
        [5.85, 0],
        [4.56, 0]
      ]
    },
    {
      qID: 46,
      cntryID: 1,
      values: [
        [7.08, 6.79],
        [6.22, 6.23],
        [4.5, 4.8],
        [3.79, 4.19]
      ]
    },
    {
      qID: 46,
      cntryID: 2,
      values: [
        [0, 0],
        [7.39, 7.06],
        [5.99, 5.88],
        [4.73, 5.23]
      ]
    },
    {
      qID: 46,
      cntryID: 3,
      values: [
        [6.88, 6.87],
        [6.52, 6.42],
        [4.93, 5.29],
        [3.29, 3.42]
      ]
    },
    {
      qID: 46,
      cntryID: 4,
      values: [
        [7.78, 0],
        [7.63, 0],
        [6.88, 0],
        [6.13, 0]
      ]
    },
    {
      qID: 46,
      cntryID: 5,
      values: [
        [0, 6.38],
        [0, 5.76],
        [0, 5.03],
        [0, 5.06]
      ]
    },
    {
      qID: 46,
      cntryID: 6,
      values: [
        [5.99, 0],
        [5.66, 0],
        [4.96, 0],
        [0, 0]
      ]
    },
    {
      qID: 46,
      cntryID: 7,
      values: [
        [7.28, 8.88],
        [7.08, 8.51],
        [6.65, 8.66],
        [5.8, 8.79]
      ]
    },
    {
      qID: 46,
      cntryID: 8,
      values: [
        [12.3, 11.64],
        [10.81, 11.24],
        [9.25, 10.62],
        [8.44, 7.66]
      ]
    },
    {
      qID: 46,
      cntryID: 9,
      values: [
        [7.09, 6.65],
        [6.59, 6.43],
        [5.43, 5.68],
        [4.67, 4.53]
      ]
    },
    {
      qID: 46,
      cntryID: 10,
      values: [
        [8.93, 0],
        [8.41, 0],
        [7.24, 0],
        [6.36, 0]
      ]
    },
    {
      qID: 46,
      cntryID: 11,
      values: [
        [8.48, 8.93],
        [7.77, 7.94],
        [6.06, 6.13],
        [3.96, 4.25]
      ]
    },
    {
      qID: 46,
      cntryID: 12,
      values: [
        [9.74, 9.98],
        [9.33, 9.25],
        [8.27, 8.1],
        [0, 6.95]
      ]
    },
    {
      qID: 46,
      cntryID: 13,
      values: [
        [7.58, 0],
        [6.63, 0],
        [4.84, 5.91],
        [3.1, 4.32]
      ]
    },
    {
      qID: 46,
      cntryID: 14,
      values: [
        [7.6, 9.22],
        [7.47, 8.77],
        [6.85, 8.28],
        [0, 0]
      ]
    },
    {
      qID: 46,
      cntryID: 15,
      values: [
        [7.06, 0],
        [6.17, 7.35],
        [4.9, 6.05],
        [3.67, 4.81]
      ]
    },
    {
      qID: 46,
      cntryID: 16,
      values: [
        [8.59, 8.23],
        [7.74, 7.36],
        [5.65, 5.49],
        [2.65, 3.47]
      ]
    },
    {
      qID: 46,
      cntryID: 17,
      values: [
        [7.3, 7.12],
        [6.7, 6.6],
        [5.5, 5.57],
        [3.16, 4.13]
      ]
    },
    {
      qID: 46,
      cntryID: 18,
      values: [
        [6.02, 6.66],
        [5.4, 5.97],
        [3.72, 5.27],
        [0, 4.15]
      ]
    },
    {
      qID: 47,
      cntryID: 0,
      values: [
        [6.2, 0],
        [6.4, 0],
        [6.2, 0],
        [5.9, 0]
      ]
    },
    {
      qID: 47,
      cntryID: 1,
      values: [
        [6.6, 0],
        [5.5, 5.1],
        [3.8, 3.3],
        [0, 2]
      ]
    },
    {
      qID: 47,
      cntryID: 2,
      values: [
        [0, 0],
        [5.9, 6.4],
        [4.7, 4.9],
        [3.5, 3.3]
      ]
    },
    {
      qID: 47,
      cntryID: 3,
      values: [
        [3.6, 3.2],
        [3.3, 3],
        [2.4, 2.4],
        [0, 2]
      ]
    },
    {
      qID: 47,
      cntryID: 4,
      values: [
        [7.7, 0],
        [7.4, 0],
        [6.6, 6.9],
        [4.6, 3.9]
      ]
    },
    {
      qID: 47,
      cntryID: 5,
      values: [
        [4.3, 0],
        [4.2, 3.6],
        [2.9, 3.8],
        [0, 0]
      ]
    },
    {
      qID: 47,
      cntryID: 6,
      values: [
        [5.5, 5.2],
        [5.3, 5],
        [0, 3.9],
        [0, 0]
      ]
    },
    {
      qID: 47,
      cntryID: 7,
      values: [
        [5, 6.4],
        [5.1, 5.8],
        [5.1, 5.8],
        [5, 5.2]
      ]
    },
    {
      qID: 47,
      cntryID: 8,
      values: [
        [5.8, 0],
        [6.1, 6.9],
        [6, 5.6],
        [5.5, 5.3]
      ]
    },
    {
      qID: 47,
      cntryID: 9,
      values: [
        [5.5, 4.2],
        [5.2, 3.9],
        [4.1, 3.4],
        [3.1, 2.4]
      ]
    },
    {
      qID: 47,
      cntryID: 10,
      values: [
        [0, 0],
        [7.7, 0],
        [7, 5.9],
        [5.9, 5.5]
      ]
    },
    {
      qID: 47,
      cntryID: 11,
      values: [
        [7.9, 7.9],
        [7.7, 7],
        [6, 5.1],
        [0, 3.5]
      ]
    },
    {
      qID: 47,
      cntryID: 12,
      values: [
        [7.1, 7.1],
        [6.8, 6.8],
        [6, 6.2],
        [0, 5.3]
      ]
    },
    {
      qID: 47,
      cntryID: 13,
      values: [
        [7.2, 0],
        [6.6, 0],
        [5, 4.6],
        [3, 2.9]
      ]
    },
    {
      qID: 47,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 47,
      cntryID: 15,
      values: [
        [5.6, 0],
        [5.7, 5.7],
        [5.6, 5.6],
        [0, 5.6]
      ]
    },
    {
      qID: 47,
      cntryID: 16,
      values: [
        [5.1, 0],
        [4.8, 3.6],
        [4, 3.4],
        [3.5, 3]
      ]
    },
    {
      qID: 47,
      cntryID: 17,
      values: [
        [6.4, 7.4],
        [6.5, 6.6],
        [5.9, 5.5],
        [6.4, 5.1]
      ]
    },
    {
      qID: 47,
      cntryID: 18,
      values: [
        [5.7, 5.8],
        [5.6, 5.5],
        [4.2, 4.5],
        [0, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 0,
      values: [
        [6.6, 0],
        [7, 0],
        [8.4, 0],
        [6.3, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 1,
      values: [
        [9.9, 0],
        [11.4, 10.6],
        [8.1, 11.4],
        [0, 9.7]
      ]
    },
    {
      qID: 48,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 3,
      values: [
        [3.6, 3.4],
        [4.3, 3.7],
        [7.8, 6.9],
        [0, 8.2]
      ]
    },
    {
      qID: 48,
      cntryID: 4,
      values: [
        [8.2, 0],
        [8.9, 0],
        [11.1, 0],
        [8.7, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 5,
      values: [
        [6.2, 8.3],
        [5.9, 6.7],
        [8, 6.7],
        [0, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 6,
      values: [
        [6.4, 8.1],
        [6.6, 8.1],
        [0, 7.4],
        [0, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 7,
      values: [
        [4, 4.7],
        [5.7, 6.9],
        [4.4, 6.2],
        [7.7, 7.3]
      ]
    },
    {
      qID: 48,
      cntryID: 8,
      values: [
        [11.5, 0],
        [11.2, 10.9],
        [12.6, 11],
        [18.3, 15.4]
      ]
    },
    {
      qID: 48,
      cntryID: 9,
      values: [
        [5.1, 7.2],
        [5.8, 7.6],
        [5.7, 9.4],
        [11.4, 9.4]
      ]
    },
    {
      qID: 48,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 12,
      values: [
        [4, 3.3],
        [4.1, 4.2],
        [4.3, 6.3],
        [0, 6.9]
      ]
    },
    {
      qID: 48,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 16,
      values: [
        [4.7, 3.8],
        [4.4, 3.8],
        [5.7, 4.8],
        [3.9, 6.5]
      ]
    },
    {
      qID: 48,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 48,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 49,
      cntryID: 0,
      values: [
        [2.61, 0],
        [2.42, 0],
        [1.78, 0],
        [0, 0]
      ]
    },
    {
      qID: 49,
      cntryID: 1,
      values: [
        [3.8, 3.78],
        [3.14, 2.65],
        [1.55, 1.79],
        [1.06, 1.19]
      ]
    },
    {
      qID: 49,
      cntryID: 2,
      values: [
        [0, 0],
        [3.28, 3.24],
        [2.23, 2.22],
        [1.42, 1.85]
      ]
    },
    {
      qID: 49,
      cntryID: 3,
      values: [
        [3.18, 3.14],
        [3.01, 2.76],
        [2.23, 2.1],
        [0, 1.65]
      ]
    },
    {
      qID: 49,
      cntryID: 4,
      values: [
        [3.64, 0],
        [3.49, 0],
        [2.97, 0],
        [2.7, 0]
      ]
    },
    {
      qID: 49,
      cntryID: 5,
      values: [
        [0, 2.15],
        [0, 1.72],
        [0, 1.19],
        [0, 1.22]
      ]
    },
    {
      qID: 49,
      cntryID: 6,
      values: [
        [3.04, 0],
        [2.72, 0],
        [1.81, 0],
        [0, 0]
      ]
    },
    {
      qID: 49,
      cntryID: 7,
      values: [
        [2.48, 2.14],
        [2.25, 1.8],
        [1.55, 1.47],
        [1.23, 0.85]
      ]
    },
    {
      qID: 49,
      cntryID: 8,
      values: [
        [1.84, 1.91],
        [1.82, 1.82],
        [1.66, 1.65],
        [1.25, 1.41]
      ]
    },
    {
      qID: 49,
      cntryID: 9,
      values: [
        [3.13, 2.56],
        [2.78, 2.2],
        [1.89, 1.76],
        [1.37, 1.38]
      ]
    },
    {
      qID: 49,
      cntryID: 10,
      values: [
        [2.93, 0],
        [2.43, 0],
        [1.99, 0],
        [1.21, 0]
      ]
    },
    {
      qID: 49,
      cntryID: 11,
      values: [
        [2.79, 2.46],
        [2.48, 2.23],
        [1.77, 1.52],
        [0, 0.96]
      ]
    },
    {
      qID: 49,
      cntryID: 12,
      values: [
        [2.15, 2.1],
        [1.97, 1.87],
        [1.42, 1.31],
        [0, 1.16]
      ]
    },
    {
      qID: 49,
      cntryID: 13,
      values: [
        [3.74, 0],
        [3.35, 0],
        [2.3, 2.32],
        [1.2, 1.31]
      ]
    },
    {
      qID: 49,
      cntryID: 14,
      values: [
        [2.78, 2.43],
        [2.7, 2.38],
        [2, 2.21],
        [0, 0]
      ]
    },
    {
      qID: 49,
      cntryID: 15,
      values: [
        [3.66, 0],
        [3.11, 3.19],
        [2.07, 2.03],
        [1.78, 1.2]
      ]
    },
    {
      qID: 49,
      cntryID: 16,
      values: [
        [2.84, 2.77],
        [2.53, 2.1],
        [1.78, 1.56],
        [0.99, 1.07]
      ]
    },
    {
      qID: 49,
      cntryID: 17,
      values: [
        [2.31, 1.89],
        [2.21, 2.08],
        [1.7, 1.66],
        [0, 1.33]
      ]
    },
    {
      qID: 49,
      cntryID: 18,
      values: [
        [3.37, 3.22],
        [2.92, 2.86],
        [1.91, 2.1],
        [0, 1.67]
      ]
    },
    {
      qID: 50,
      cntryID: 0,
      values: [
        [1.3, 0],
        [1.3, 0],
        [1.2, 0],
        [1.3, 0]
      ]
    },
    {
      qID: 50,
      cntryID: 1,
      values: [
        [1.5, 0],
        [1.5, 1.5],
        [1.4, 1.2],
        [0, 1]
      ]
    },
    {
      qID: 50,
      cntryID: 2,
      values: [
        [1.3, 1],
        [1.2, 1.1],
        [1.2, 1],
        [0, 0]
      ]
    },
    {
      qID: 50,
      cntryID: 3,
      values: [
        [1, 1.1],
        [1, 1],
        [1, 0.9],
        [0, 0.9]
      ]
    },
    {
      qID: 50,
      cntryID: 4,
      values: [
        [1, 0],
        [0.9, 0],
        [1, 0],
        [1, 0]
      ]
    },
    {
      qID: 50,
      cntryID: 5,
      values: [
        [1.1, 1],
        [1, 1.1],
        [1, 1],
        [0, 0]
      ]
    },
    {
      qID: 50,
      cntryID: 6,
      values: [
        [1.2, 1.3],
        [1.2, 1.2],
        [0, 1],
        [0, 0]
      ]
    },
    {
      qID: 50,
      cntryID: 7,
      values: [
        [1.2, 1.2],
        [1.2, 1.2],
        [1.3, 1.2],
        [0, 1.3]
      ]
    },
    {
      qID: 50,
      cntryID: 8,
      values: [
        [1.2, 0],
        [1.2, 1.4],
        [1.2, 1],
        [1, 1]
      ]
    },
    {
      qID: 50,
      cntryID: 9,
      values: [
        [1.2, 1],
        [1.1, 1],
        [1, 1],
        [0.9, 0.8]
      ]
    },
    {
      qID: 50,
      cntryID: 10,
      values: [
        [0, 0],
        [1.2, 0],
        [1.2, 1.4],
        [1.4, 1.2]
      ]
    },
    {
      qID: 50,
      cntryID: 11,
      values: [
        [1.3, 1.4],
        [1.2, 1.2],
        [1.3, 1.3],
        [0, 1.2]
      ]
    },
    {
      qID: 50,
      cntryID: 12,
      values: [
        [1.3, 1.3],
        [1.3, 1.3],
        [1.3, 1.2],
        [0, 1.4]
      ]
    },
    {
      qID: 50,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 50,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 50,
      cntryID: 15,
      values: [
        [1.1, 0],
        [1.1, 1.1],
        [1.1, 1.1],
        [0, 1.1]
      ]
    },
    {
      qID: 50,
      cntryID: 16,
      values: [
        [1.1, 0],
        [1, 1],
        [0.9, 0.8],
        [0.9, 0.8]
      ]
    },
    {
      qID: 50,
      cntryID: 17,
      values: [
        [1.1, 1],
        [1.1, 1],
        [1.3, 1],
        [0, 0]
      ]
    },
    {
      qID: 50,
      cntryID: 18,
      values: [
        [1.3, 1.4],
        [1.3, 1.2],
        [1, 1.1],
        [0, 0]
      ]
    },
    {
      qID: 51,
      cntryID: 0,
      values: [
        [2.58, 0],
        [2.38, 0],
        [1.63, 0],
        [0.85, 0]
      ]
    },
    {
      qID: 51,
      cntryID: 1,
      values: [
        [3.14, 3.23],
        [2.48, 2.34],
        [1.19, 1.44],
        [0.63, 0.93]
      ]
    },
    {
      qID: 51,
      cntryID: 2,
      values: [
        [0, 0],
        [3.47, 2.86],
        [2.14, 1.91],
        [1.27, 1.44]
      ]
    },
    {
      qID: 51,
      cntryID: 3,
      values: [
        [3.16, 2.9],
        [2.9, 2.51],
        [1.92, 1.82],
        [0.94, 0.92]
      ]
    },
    {
      qID: 51,
      cntryID: 4,
      values: [
        [3.73, 0],
        [3.57, 0],
        [2.99, 0],
        [2.66, 0]
      ]
    },
    {
      qID: 51,
      cntryID: 5,
      values: [
        [0, 2.17],
        [0, 1.68],
        [0, 1.07],
        [0, 1.12]
      ]
    },
    {
      qID: 51,
      cntryID: 6,
      values: [
        [2.65, 0],
        [2.31, 0],
        [1.4, 0],
        [0, 0]
      ]
    },
    {
      qID: 51,
      cntryID: 7,
      values: [
        [2.07, 2.21],
        [1.87, 1.83],
        [1.29, 1.56],
        [0.91, 1.03]
      ]
    },
    {
      qID: 51,
      cntryID: 8,
      values: [
        [5.99, 5.59],
        [5.15, 5.17],
        [4.04, 4.55],
        [3.32, 2.75]
      ]
    },
    {
      qID: 51,
      cntryID: 9,
      values: [
        [2.82, 2.23],
        [2.5, 2.1],
        [1.58, 1.63],
        [1.01, 1.24]
      ]
    },
    {
      qID: 51,
      cntryID: 10,
      values: [
        [2.94, 0],
        [2.57, 0],
        [1.9, 0],
        [1.24, 0]
      ]
    },
    {
      qID: 51,
      cntryID: 11,
      values: [
        [2.67, 2.67],
        [2.35, 2.33],
        [1.57, 1.54],
        [0.7, 0.79]
      ]
    },
    {
      qID: 51,
      cntryID: 12,
      values: [
        [4.68, 4.49],
        [4.19, 3.91],
        [3.02, 2.89],
        [0, 1.92]
      ]
    },
    {
      qID: 51,
      cntryID: 13,
      values: [
        [3.57, 0],
        [2.88, 0],
        [1.65, 2.11],
        [0.64, 1.07]
      ]
    },
    {
      qID: 51,
      cntryID: 14,
      values: [
        [3.12, 3.42],
        [3.01, 3.11],
        [2.09, 3.02],
        [0, 0]
      ]
    },
    {
      qID: 51,
      cntryID: 15,
      values: [
        [3.47, 0],
        [2.69, 3.14],
        [1.59, 1.89],
        [1.08, 1]
      ]
    },
    {
      qID: 51,
      cntryID: 16,
      values: [
        [3.32, 3.33],
        [2.85, 2.42],
        [1.66, 1.63],
        [0.51, 0.74]
      ]
    },
    {
      qID: 51,
      cntryID: 17,
      values: [
        [2.33, 1.81],
        [2.15, 1.94],
        [1.63, 1.5],
        [0.56, 1.05]
      ]
    },
    {
      qID: 51,
      cntryID: 18,
      values: [
        [2.89, 2.9],
        [2.44, 2.46],
        [1.28, 1.81],
        [0, 1.23]
      ]
    },
    {
      qID: 52,
      cntryID: 0,
      values: [
        [0.89, 0],
        [0.93, 0],
        [0.89, 0],
        [1.03, 0]
      ]
    },
    {
      qID: 52,
      cntryID: 1,
      values: [
        [1.2, 1.05],
        [1.08, 1.05],
        [0.69, 0.76],
        [0.7, 0.53]
      ]
    },
    {
      qID: 52,
      cntryID: 2,
      values: [
        [0, 0],
        [1.02, 1.14],
        [0.88, 0.95],
        [0.68, 0.98]
      ]
    },
    {
      qID: 52,
      cntryID: 3,
      values: [
        [1, 1.14],
        [0.99, 1.16],
        [0.74, 0.96],
        [0.32, 0.47]
      ]
    },
    {
      qID: 52,
      cntryID: 4,
      values: [
        [0.96, 0],
        [0.93, 0],
        [0.9, 0],
        [0.62, 0]
      ]
    },
    {
      qID: 52,
      cntryID: 5,
      values: [
        [0, 0.91],
        [0, 0.83],
        [0, 0.81],
        [0, 0.61]
      ]
    },
    {
      qID: 52,
      cntryID: 6,
      values: [
        [0.7, 0],
        [0.68, 0],
        [0.79, 0],
        [0, 0]
      ]
    },
    {
      qID: 52,
      cntryID: 7,
      values: [
        [1.38, 1.62],
        [1.4, 1.57],
        [1.21, 1.49],
        [0.82, 1.17]
      ]
    },
    {
      qID: 52,
      cntryID: 8,
      values: [
        [1.5, 1.62],
        [1.35, 1.73],
        [1.36, 1.84],
        [1.27, 1.62]
      ]
    },
    {
      qID: 52,
      cntryID: 9,
      values: [
        [1.2, 1.08],
        [1.05, 0.89],
        [0.82, 0.78],
        [0.62, 0.46]
      ]
    },
    {
      qID: 52,
      cntryID: 10,
      values: [
        [1.75, 0],
        [1.38, 0],
        [1.19, 0],
        [0.83, 0]
      ]
    },
    {
      qID: 52,
      cntryID: 11,
      values: [
        [1.17, 1.14],
        [1.05, 1],
        [0.83, 0.81],
        [0.35, 0.54]
      ]
    },
    {
      qID: 52,
      cntryID: 12,
      values: [
        [1.19, 1.44],
        [1.21, 1.35],
        [1.25, 1.15],
        [0, 1.31]
      ]
    },
    {
      qID: 52,
      cntryID: 13,
      values: [
        [1.08, 0],
        [0.97, 0],
        [0.67, 0.79],
        [0.36, 0.56]
      ]
    },
    {
      qID: 52,
      cntryID: 14,
      values: [
        [1.14, 1.3],
        [1.1, 1.12],
        [1.22, 1.07],
        [0, 0]
      ]
    },
    {
      qID: 52,
      cntryID: 15,
      values: [
        [0.78, 0],
        [0.78, 1.14],
        [0.67, 0.88],
        [0.31, 0.71]
      ]
    },
    {
      qID: 52,
      cntryID: 16,
      values: [
        [1.28, 1.09],
        [1.2, 1.13],
        [0.81, 0.75],
        [0.28, 0.37]
      ]
    },
    {
      qID: 52,
      cntryID: 17,
      values: [
        [0.81, 0.64],
        [0.73, 0.76],
        [0.65, 0.68],
        [0.38, 0.48]
      ]
    },
    {
      qID: 52,
      cntryID: 18,
      values: [
        [0.75, 1.02],
        [0.64, 0.83],
        [0.39, 0.73],
        [0, 0.37]
      ]
    },
    {
      qID: 53,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 1,
      values: [
        [26, 49.8],
        [36.4, 64.2],
        [68.8, 80.5],
        [89.3, 92.7]
      ]
    },
    {
      qID: 53,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 5,
      values: [
        [0, 10.8],
        [0, 19.6],
        [0, 33.3],
        [0, 36.3]
      ]
    },
    {
      qID: 53,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 7,
      values: [
        [7.3, 24.1],
        [8.5, 26.7],
        [17.2, 40.1],
        [21.7, 50.9]
      ]
    },
    {
      qID: 53,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 10,
      values: [
        [6.1, 0],
        [1.5, 0],
        [5, 0],
        [8.3, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 11,
      values: [
        [5.6, 9],
        [7.9, 22.1],
        [18.2, 37.3],
        [18, 49]
      ]
    },
    {
      qID: 53,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 16,
      values: [
        [7.3, 4.9],
        [12.5, 17.7],
        [24.9, 32],
        [43.3, 65.3]
      ]
    },
    {
      qID: 53,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 53,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 54,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 54,
      cntryID: 1,
      values: [
        [0.3, 2.9],
        [2.2, 3.7],
        [4.8, 19.4],
        [30.2, 49]
      ]
    },
    {
      qID: 54,
      cntryID: 2,
      values: [
        [0, 0],
        [16.5, 42.9],
        [35.7, 40.1],
        [69.8, 46.4]
      ]
    },
    {
      qID: 54,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 54,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 54,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0.3],
        [0, 0.6],
        [0, 4.4]
      ]
    },
    {
      qID: 54,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 54,
      cntryID: 7,
      values: [
        [5.5, 17.4],
        [6.5, 18.9],
        [14.3, 31.7],
        [20.6, 42.9]
      ]
    },
    {
      qID: 54,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 54,
      cntryID: 9,
      values: [
        [16, 39.8],
        [23.1, 52.6],
        [41.6, 68.8],
        [52.1, 70]
      ]
    },
    {
      qID: 54,
      cntryID: 10,
      values: [
        [6.1, 0],
        [1.5, 0],
        [3.5, 0],
        [5, 0]
      ]
    },
    {
      qID: 54,
      cntryID: 11,
      values: [
        [5.6, 9],
        [7.9, 21.9],
        [18.2, 37.2],
        [15.3, 48.2]
      ]
    },
    {
      qID: 54,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 54,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [1.1, 0],
        [1.6, 4.4]
      ]
    },
    {
      qID: 54,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 54,
      cntryID: 15,
      values: [
        [6.5, 0],
        [9.8, 22.2],
        [21.6, 49.8],
        [37.9, 69.2]
      ]
    },
    {
      qID: 54,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 54,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 54,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 5,
      values: [
        [0, 10.1],
        [0, 18.8],
        [0, 31.8],
        [0, 35]
      ]
    },
    {
      qID: 55,
      cntryID: 6,
      values: [
        [5.4, 0],
        [8.1, 0],
        [36.8, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 7,
      values: [
        [0, 0],
        [0, 0.1],
        [0.1, 0.3],
        [0.2, 1]
      ]
    },
    {
      qID: 55,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 10,
      values: [
        [0, 0],
        [0.2, 0],
        [0.6, 0],
        [1.9, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 13,
      values: [
        [0, 0],
        [0.2, 0],
        [0.3, 0.5],
        [4.2, 6.4]
      ]
    },
    {
      qID: 55,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0.7],
        [0, 1.7]
      ]
    },
    {
      qID: 55,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 55,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 56,
      cntryID: 0,
      values: [
        [57.1, 0],
        [57.8, 0],
        [63.1, 0],
        [64.8, 0]
      ]
    },
    {
      qID: 56,
      cntryID: 1,
      values: [
        [4.1, 9.4],
        [3.9, 8],
        [6.1, 5.1],
        [7.8, 5]
      ]
    },
    {
      qID: 56,
      cntryID: 2,
      values: [
        [0, 0],
        [24.9, 18.5],
        [24.9, 33.3],
        [41, 41.5]
      ]
    },
    {
      qID: 56,
      cntryID: 3,
      values: [
        [29.6, 36.4],
        [35.4, 38],
        [45, 41.8],
        [62.6, 32.5]
      ]
    },
    {
      qID: 56,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 56,
      cntryID: 5,
      values: [
        [0, 67.7],
        [0, 68.9],
        [0, 66.9],
        [0, 88.9]
      ]
    },
    {
      qID: 56,
      cntryID: 6,
      values: [
        [66.5, 0],
        [68.7, 0],
        [72.1, 0],
        [0, 0]
      ]
    },
    {
      qID: 56,
      cntryID: 7,
      values: [
        [11.8, 17.8],
        [15.4, 22.7],
        [17.8, 27.1],
        [23.5, 34.3]
      ]
    },
    {
      qID: 56,
      cntryID: 8,
      values: [
        [39.5, 0],
        [37.1, 37.8],
        [36.3, 35.3],
        [36.6, 47.2]
      ]
    },
    {
      qID: 56,
      cntryID: 9,
      values: [
        [16.2, 20.9],
        [18.8, 21.2],
        [23.6, 20.3],
        [22.8, 25.9]
      ]
    },
    {
      qID: 56,
      cntryID: 10,
      values: [
        [30.4, 0],
        [33.7, 0],
        [35.2, 0],
        [39.8, 0]
      ]
    },
    {
      qID: 56,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 56,
      cntryID: 12,
      values: [
        [92.5, 95],
        [95.3, 94.3],
        [93.7, 97.6],
        [0, 0]
      ]
    },
    {
      qID: 56,
      cntryID: 13,
      values: [
        [2.7, 0],
        [2.7, 0],
        [8.7, 13.1],
        [17.1, 20.9]
      ]
    },
    {
      qID: 56,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 56,
      cntryID: 15,
      values: [
        [12, 0],
        [14.2, 15.6],
        [17.1, 13.9],
        [31.2, 18.3]
      ]
    },
    {
      qID: 56,
      cntryID: 16,
      values: [
        [40.6, 32.4],
        [42.8, 44.9],
        [48.1, 51.1],
        [62.7, 58.1]
      ]
    },
    {
      qID: 56,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 56,
      cntryID: 18,
      values: [
        [11.8, 10.8],
        [13.4, 10.7],
        [10.1, 9.8],
        [0, 4.1]
      ]
    },
    {
      qID: 57,
      cntryID: 0,
      values: [
        [1.2, 0],
        [5.1, 0],
        [9.5, 0],
        [0, 0]
      ]
    },
    {
      qID: 57,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 6.7],
        [0, 16.4]
      ]
    },
    {
      qID: 57,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [8, 0],
        [28.4, 0]
      ]
    },
    {
      qID: 57,
      cntryID: 3,
      values: [
        [3.2, 4.4],
        [6.1, 5.4],
        [8.8, 5.5],
        [9.1, 8.1]
      ]
    },
    {
      qID: 57,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 57,
      cntryID: 5,
      values: [
        [0, 5.6],
        [0, 4.5],
        [0, 5.7],
        [0, 9]
      ]
    },
    {
      qID: 57,
      cntryID: 6,
      values: [
        [5.9, 0],
        [6.7, 0],
        [9.7, 0],
        [0, 0]
      ]
    },
    {
      qID: 57,
      cntryID: 7,
      values: [
        [32.1, 33],
        [42.2, 50.6],
        [53.7, 60.4],
        [81.5, 70.4]
      ]
    },
    {
      qID: 57,
      cntryID: 8,
      values: [
        [2, 0],
        [3.4, 3.4],
        [6.7, 12],
        [8.2, 25.3]
      ]
    },
    {
      qID: 57,
      cntryID: 9,
      values: [
        [1, 0],
        [4, 9.3],
        [9.9, 18.3],
        [22.4, 19.6]
      ]
    },
    {
      qID: 57,
      cntryID: 10,
      values: [
        [0, 0],
        [3.4, 0],
        [6.6, 0],
        [14.3, 0]
      ]
    },
    {
      qID: 57,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 57,
      cntryID: 12,
      values: [
        [1.7, 7],
        [2.5, 5.8],
        [12.9, 6.9],
        [0, 0]
      ]
    },
    {
      qID: 57,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 57,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 57,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 2.4],
        [0, 3.8],
        [0, 9.2]
      ]
    },
    {
      qID: 57,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 57,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 57,
      cntryID: 18,
      values: [
        [0, 0],
        [1.8, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 0,
      values: [
        [16.7, 0],
        [13.1, 0],
        [9.2, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 5,
      values: [
        [0, 0.9],
        [0, 1.1],
        [0, 1.7],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 7,
      values: [
        [6, 6.1],
        [4.9, 5.8],
        [2.5, 5.5],
        [1.3, 4.9]
      ]
    },
    {
      qID: 58,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [3.5, 0],
        [4.7, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 58,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 0,
      values: [
        [4.1, 0],
        [2.3, 0],
        [0.6, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [6.4, 0],
        [12.6, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 3,
      values: [
        [3.5, 2],
        [3.4, 3],
        [7.5, 4.2],
        [4.8, 2.9]
      ]
    },
    {
      qID: 59,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 5,
      values: [
        [0, 61],
        [0, 51.4],
        [0, 47.1],
        [0, 55.4]
      ]
    },
    {
      qID: 59,
      cntryID: 6,
      values: [
        [16.9, 0],
        [18.8, 0],
        [20.9, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 7,
      values: [
        [5.5, 15],
        [7.7, 7],
        [11.9, 3.3],
        [0, 2.3]
      ]
    },
    {
      qID: 59,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 9,
      values: [
        [10.5, 8.2],
        [8.3, 10],
        [8.7, 7.7],
        [8.8, 6.2]
      ]
    },
    {
      qID: 59,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0.3, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 12,
      values: [
        [0.8, 0.5],
        [0.7, 0.4],
        [0.5, 0.5],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 16,
      values: [
        [2.1, 0],
        [1.1, 1.8],
        [2.3, 3.6],
        [7.6, 0.8]
      ]
    },
    {
      qID: 59,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 59,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0.1, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 6,
      values: [
        [1.5, 0],
        [1.9, 0],
        [3.9, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 7,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 60,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [6.3, 0],
        [12.9, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 3,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 5,
      values: [
        [0, 0.3],
        [0, 0.6],
        [0, 0.3],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 6,
      values: [
        [2.2, 0],
        [2.7, 0],
        [6.2, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 7,
      values: [
        [21.7, 19.7],
        [19.2, 16.9],
        [12.8, 11.7],
        [9.7, 3.8]
      ]
    },
    {
      qID: 61,
      cntryID: 8,
      values: [
        [1.5, 0],
        [1.5, 0.8],
        [2.9, 0.6],
        [2, 1.1]
      ]
    },
    {
      qID: 61,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 10,
      values: [
        [0, 0],
        [0.7, 0],
        [1.3, 0],
        [1.7, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 12,
      values: [
        [0, 0],
        [0.1, 0],
        [0.2, 0.1],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 61,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 0,
      values: [
        [0, 0],
        [1.3, 0],
        [1.1, 0],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [36.3, 0],
        [21.1, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 3,
      values: [
        [17.8, 27.4],
        [20.5, 25.1],
        [10.5, 23.5],
        [19.4, 10.5]
      ]
    },
    {
      qID: 62,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 5,
      values: [
        [0, 0.8],
        [0, 0.9],
        [0, 1.1],
        [0, 1.9]
      ]
    },
    {
      qID: 62,
      cntryID: 6,
      values: [
        [37.1, 0],
        [36.6, 0],
        [27.1, 0],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 7,
      values: [
        [1.6, 0],
        [2.2, 1.7],
        [1.4, 1.5],
        [2.4, 1.6]
      ]
    },
    {
      qID: 62,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 10,
      values: [
        [0, 0],
        [4.1, 0],
        [7.1, 0],
        [3.9, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 12,
      values: [
        [15.5, 7.5],
        [16.4, 11.4],
        [14.9, 9],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 15,
      values: [
        [0, 0],
        [6.4, 6.2],
        [4.1, 14.8],
        [0, 12.9]
      ]
    },
    {
      qID: 62,
      cntryID: 16,
      values: [
        [68, 0],
        [59.5, 38],
        [44, 38.6],
        [49.8, 40.5]
      ]
    },
    {
      qID: 62,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 62,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 0,
      values: [
        [1.3, 0],
        [0.5, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 3,
      values: [
        [3.3, 0],
        [2.5, 0.4],
        [2.5, 0.5],
        [1.5, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 5,
      values: [
        [0, 12.2],
        [0, 12.4],
        [0, 8.9],
        [0, 12.1]
      ]
    },
    {
      qID: 63,
      cntryID: 6,
      values: [
        [4.6, 0],
        [4.5, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 7,
      values: [
        [2.3, 0],
        [0.7, 0.2],
        [0.7, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 8,
      values: [
        [93.3, 0],
        [92.4, 93.1],
        [84.3, 79.3],
        [77.9, 59.7]
      ]
    },
    {
      qID: 63,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 10,
      values: [
        [0, 0],
        [5.6, 0],
        [4, 0],
        [4.7, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 12,
      values: [
        [12.1, 4.7],
        [9.5, 3.9],
        [6.5, 1.9],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 63,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 0,
      values: [
        [33.4, 0],
        [34.6, 0],
        [28.2, 0],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 98.9],
        [0, 92.3],
        [0, 76.1]
      ]
    },
    {
      qID: 64,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [35.2, 0],
        [20.9, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 3,
      values: [
        [56.7, 56.7],
        [53.7, 53.4],
        [55.2, 52.4],
        [46.1, 68.7]
      ]
    },
    {
      qID: 64,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 5,
      values: [
        [0, 7.5],
        [0, 12.6],
        [0, 16.1],
        [0, 8.7]
      ]
    },
    {
      qID: 64,
      cntryID: 6,
      values: [
        [21.5, 0],
        [23.1, 0],
        [29.5, 0],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 7,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 9,
      values: [
        [27.5, 43],
        [35.9, 30.6],
        [35.8, 28.3],
        [32.2, 24.8]
      ]
    },
    {
      qID: 64,
      cntryID: 10,
      values: [
        [0, 0],
        [15.6, 0],
        [17.5, 0],
        [18.3, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 12,
      values: [
        [38.8, 42.9],
        [39, 42.8],
        [36.3, 37.7],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 15,
      values: [
        [0, 0],
        [32.7, 37.2],
        [36.5, 30.5],
        [0, 28]
      ]
    },
    {
      qID: 64,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 64,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 0,
      values: [
        [23.2, 0],
        [15.1, 0],
        [11.6, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 3,
      values: [
        [56.7, 56.7],
        [52.7, 53.4],
        [55.2, 52.4],
        [46.1, 68.7]
      ]
    },
    {
      qID: 65,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 5,
      values: [
        [0, 9.9],
        [0, 13.6],
        [0, 15.5],
        [0, 9]
      ]
    },
    {
      qID: 65,
      cntryID: 6,
      values: [
        [2.1, 0],
        [2.3, 0],
        [1.6, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 7,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 9,
      values: [
        [49.3, 33.9],
        [40.3, 29.7],
        [31.7, 20.5],
        [31.7, 17.4]
      ]
    },
    {
      qID: 65,
      cntryID: 10,
      values: [
        [0, 0],
        [15.1, 0],
        [15, 0],
        [17.8, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 12,
      values: [
        [28, 25.3],
        [26.1, 25.5],
        [22.7, 28.8],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 16,
      values: [
        [25.4, 0],
        [22.7, 21.8],
        [21.2, 13.5],
        [16.8, 12.3]
      ]
    },
    {
      qID: 65,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 65,
      cntryID: 18,
      values: [
        [0, 0],
        [92.7, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 66,
      cntryID: 0,
      values: [
        [18, 0],
        [25.3, 0],
        [38.6, 0],
        [0, 0]
      ]
    },
    {
      qID: 66,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 1.1],
        [0, 1],
        [0, 7.4]
      ]
    },
    {
      qID: 66,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [7.9, 0],
        [4, 0]
      ]
    },
    {
      qID: 66,
      cntryID: 3,
      values: [
        [3.1, 3.4],
        [4.8, 8.5],
        [4.6, 7.5],
        [7.1, 9.1]
      ]
    },
    {
      qID: 66,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 66,
      cntryID: 5,
      values: [
        [0, 1.7],
        [0, 2.6],
        [0, 2.9],
        [0, 3.2]
      ]
    },
    {
      qID: 66,
      cntryID: 6,
      values: [
        [3.5, 0],
        [3.2, 0],
        [5, 0],
        [0, 0]
      ]
    },
    {
      qID: 66,
      cntryID: 7,
      values: [
        [30.8, 26.3],
        [22.5, 17.6],
        [17.1, 17.6],
        [5.1, 17.1]
      ]
    },
    {
      qID: 66,
      cntryID: 8,
      values: [
        [3.2, 0],
        [2.7, 2.7],
        [6.1, 8.2],
        [11.9, 13.9]
      ]
    },
    {
      qID: 66,
      cntryID: 9,
      values: [
        [11.7, 14.8],
        [11.4, 20.4],
        [13.9, 25.2],
        [12.8, 32]
      ]
    },
    {
      qID: 66,
      cntryID: 10,
      values: [
        [0, 0],
        [56.3, 0],
        [45, 0],
        [34.7, 0]
      ]
    },
    {
      qID: 66,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 66,
      cntryID: 12,
      values: [
        [3, 12],
        [5.6, 10],
        [5.8, 15.1],
        [0, 0]
      ]
    },
    {
      qID: 66,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 66,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 66,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 66,
      cntryID: 16,
      values: [
        [20, 0],
        [28.6, 50.1],
        [55.9, 67],
        [55.7, 63.9]
      ]
    },
    {
      qID: 66,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 67,
      cntryID: 0,
      values: [
        [3.6, 0],
        [7.3, 0],
        [15.8, 0],
        [48.9, 0]
      ]
    },
    {
      qID: 67,
      cntryID: 1,
      values: [
        [0.1, 0],
        [0.8, 0.5],
        [0.9, 2.1],
        [5.8, 3.8]
      ]
    },
    {
      qID: 67,
      cntryID: 2,
      values: [
        [0, 0],
        [6.1, 2.7],
        [11.7, 14.8],
        [33.7, 3.8]
      ]
    },
    {
      qID: 67,
      cntryID: 3,
      values: [
        [66.2, 96.1],
        [77.1, 95.7],
        [94.4, 95.6],
        [0, 98.9]
      ]
    },
    {
      qID: 67,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 67,
      cntryID: 5,
      values: [
        [0, 17.6],
        [0, 26.3],
        [0, 51.4],
        [0, 58]
      ]
    },
    {
      qID: 67,
      cntryID: 6,
      values: [
        [9.6, 0],
        [13.2, 0],
        [41.1, 0],
        [0, 0]
      ]
    },
    {
      qID: 67,
      cntryID: 7,
      values: [
        [8.6, 11.9],
        [13.5, 21.1],
        [21.4, 33.5],
        [35.7, 53.1]
      ]
    },
    {
      qID: 67,
      cntryID: 8,
      values: [
        [86.6, 0],
        [88, 84.6],
        [89.7, 84.4],
        [91.3, 87.1]
      ]
    },
    {
      qID: 67,
      cntryID: 9,
      values: [
        [2.9, 4.7],
        [2.6, 7.8],
        [9, 15.8],
        [12.9, 30]
      ]
    },
    {
      qID: 67,
      cntryID: 10,
      values: [
        [5.2, 0],
        [3.9, 0],
        [11.9, 0],
        [19, 0]
      ]
    },
    {
      qID: 67,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 67,
      cntryID: 12,
      values: [
        [10.2, 25],
        [15.6, 30.2],
        [37.5, 45.4],
        [0, 54.2]
      ]
    },
    {
      qID: 67,
      cntryID: 13,
      values: [
        [0.8, 0],
        [4.2, 0],
        [13.1, 23],
        [40, 49.5]
      ]
    },
    {
      qID: 67,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 67,
      cntryID: 15,
      values: [
        [0.6, 0],
        [1, 1.6],
        [4, 5],
        [4, 13.5]
      ]
    },
    {
      qID: 67,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 67,
      cntryID: 17,
      values: [
        [7, 9.8],
        [9.9, 20.6],
        [20.7, 39.9],
        [35.5, 71.2]
      ]
    },
    {
      qID: 67,
      cntryID: 18,
      values: [
        [13.4, 9],
        [13.6, 7.1],
        [10, 16],
        [0, 21]
      ]
    },
    {
      qID: 68,
      cntryID: 0,
      values: [
        [38.7, 0],
        [42.6, 0],
        [48.6, 0],
        [50, 0]
      ]
    },
    {
      qID: 68,
      cntryID: 1,
      values: [
        [79.7, 10.7],
        [74.1, 14.9],
        [47.9, 8.7],
        [19.8, 1.9]
      ]
    },
    {
      qID: 68,
      cntryID: 2,
      values: [
        [0, 0],
        [76.3, 49.7],
        [72.3, 46.6],
        [78.3, 59.3]
      ]
    },
    {
      qID: 68,
      cntryID: 3,
      values: [
        [9, 18.8],
        [14.1, 31],
        [30.4, 46.9],
        [27.8, 48.3]
      ]
    },
    {
      qID: 68,
      cntryID: 4,
      values: [
        [83.3, 0],
        [83.7, 0],
        [78.9, 0],
        [77.8, 0]
      ]
    },
    {
      qID: 68,
      cntryID: 5,
      values: [
        [0, 90.5],
        [0, 88.9],
        [0, 86.3],
        [0, 88.1]
      ]
    },
    {
      qID: 68,
      cntryID: 6,
      values: [
        [88.8, 0],
        [85.3, 0],
        [39.9, 0],
        [0, 0]
      ]
    },
    {
      qID: 68,
      cntryID: 7,
      values: [
        [33.9, 71.6],
        [36.4, 71.9],
        [44.3, 69.4],
        [45.1, 74.7]
      ]
    },
    {
      qID: 68,
      cntryID: 8,
      values: [
        [22.7, 78.7],
        [30.6, 83.7],
        [42.7, 88.5],
        [55, 93.3]
      ]
    },
    {
      qID: 68,
      cntryID: 9,
      values: [
        [23.4, 60],
        [29.9, 61.9],
        [44.7, 69.9],
        [46, 64.6]
      ]
    },
    {
      qID: 68,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 68,
      cntryID: 11,
      values: [
        [39.2, 30.5],
        [32.3, 16.9],
        [16.1, 4.9],
        [0, 1]
      ]
    },
    {
      qID: 68,
      cntryID: 12,
      values: [
        [50.6, 66.2],
        [53, 68.6],
        [49.8, 67.6],
        [0, 61]
      ]
    },
    {
      qID: 68,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 68,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 68,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 68,
      cntryID: 16,
      values: [
        [28.5, 52.4],
        [33.7, 40.9],
        [29.3, 32],
        [20.1, 13.4]
      ]
    },
    {
      qID: 68,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 68,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 0,
      values: [
        [36, 0],
        [27, 0],
        [11.6, 0],
        [6.1, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 1,
      values: [
        [54.8, 96.4],
        [57, 96],
        [65.7, 96.2],
        [72.6, 97.8]
      ]
    },
    {
      qID: 69,
      cntryID: 2,
      values: [
        [0, 0],
        [13.8, 29.2],
        [4.8, 17.3],
        [0.8, 3.6]
      ]
    },
    {
      qID: 69,
      cntryID: 3,
      values: [
        [0.6, 1.7],
        [0.7, 2.1],
        [1.6, 4.8],
        [2.5, 4.4]
      ]
    },
    {
      qID: 69,
      cntryID: 4,
      values: [
        [30.3, 0],
        [28.6, 0],
        [21.3, 0],
        [7.1, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 5,
      values: [
        [0, 1.3],
        [0, 0.9],
        [0, 0.6],
        [0, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 6,
      values: [
        [7.5, 0],
        [6.7, 0],
        [2.3, 0],
        [0, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 7,
      values: [
        [33, 19.4],
        [29.3, 15.1],
        [18.3, 7.2],
        [4.5, 3.2]
      ]
    },
    {
      qID: 69,
      cntryID: 8,
      values: [
        [93.4, 56.4],
        [86, 42.4],
        [73.4, 24.7],
        [57.8, 11.3]
      ]
    },
    {
      qID: 69,
      cntryID: 9,
      values: [
        [28.5, 14.7],
        [24.9, 8.5],
        [16.7, 2.6],
        [12.1, 0.3]
      ]
    },
    {
      qID: 69,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 11,
      values: [
        [1.8, 0],
        [1.1, 0.1],
        [2, 0.3],
        [0, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 12,
      values: [
        [34, 4.5],
        [27.2, 3.2],
        [12.4, 0.6],
        [0, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 16,
      values: [
        [25.8, 7.6],
        [17.5, 6.7],
        [10.1, 3.1],
        [3.8, 0.6]
      ]
    },
    {
      qID: 69,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 69,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 70,
      cntryID: 0,
      values: [
        [91.8, 0],
        [94.7, 0],
        [95.4, 0],
        [76.1, 0]
      ]
    },
    {
      qID: 70,
      cntryID: 1,
      values: [
        [45.2, 3.6],
        [43, 4],
        [34.3, 3.8],
        [27.4, 2.2]
      ]
    },
    {
      qID: 70,
      cntryID: 2,
      values: [
        [0, 0],
        [2.5, 34.8],
        [5.3, 32.6],
        [3.5, 19.8]
      ]
    },
    {
      qID: 70,
      cntryID: 3,
      values: [
        [85.4, 54.3],
        [80.4, 41.1],
        [62.1, 14.6],
        [42.2, 15.4]
      ]
    },
    {
      qID: 70,
      cntryID: 4,
      values: [
        [60.2, 0],
        [61.3, 0],
        [58.1, 0],
        [65.5, 0]
      ]
    },
    {
      qID: 70,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0.1],
        [0, 0.1],
        [0, 0]
      ]
    },
    {
      qID: 70,
      cntryID: 6,
      values: [
        [98.6, 0],
        [97.4, 0],
        [92.2, 0],
        [0, 0]
      ]
    },
    {
      qID: 70,
      cntryID: 7,
      values: [
        [55.1, 12.9],
        [54.5, 12.5],
        [50.5, 9],
        [40.3, 6.7]
      ]
    },
    {
      qID: 70,
      cntryID: 8,
      values: [
        [26.4, 43.2],
        [29.5, 31.8],
        [31.2, 13.6],
        [30.8, 9]
      ]
    },
    {
      qID: 70,
      cntryID: 9,
      values: [
        [31.8, 11.8],
        [31.1, 14.5],
        [29, 10.3],
        [22.3, 12]
      ]
    },
    {
      qID: 70,
      cntryID: 10,
      values: [
        [66.4, 0],
        [74, 0],
        [83.8, 0],
        [91.2, 0]
      ]
    },
    {
      qID: 70,
      cntryID: 11,
      values: [
        [56.9, 19],
        [55.6, 12.8],
        [47.5, 7.6],
        [26.6, 4.3]
      ]
    },
    {
      qID: 70,
      cntryID: 12,
      values: [
        [71.6, 17.5],
        [74.9, 17.6],
        [81.9, 24.2],
        [0, 15.4]
      ]
    },
    {
      qID: 70,
      cntryID: 13,
      values: [
        [61.3, 0],
        [51, 0],
        [27.9, 0.7],
        [16.4, 0.4]
      ]
    },
    {
      qID: 70,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 70,
      cntryID: 15,
      values: [
        [72, 0],
        [68.8, 11.5],
        [63.6, 7.4],
        [57.4, 1.2]
      ]
    },
    {
      qID: 70,
      cntryID: 16,
      values: [
        [0, 0],
        [1.1, 0],
        [1.5, 0.1],
        [2.4, 0]
      ]
    },
    {
      qID: 70,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 70,
      cntryID: 18,
      values: [
        [80.4, 81.2],
        [74.2, 61.4],
        [71.7, 26.9],
        [0, 7.6]
      ]
    },
    {
      qID: 71,
      cntryID: 0,
      values: [
        [0.4, 0],
        [0.4, 0],
        [1.5, 0],
        [0.5, 0]
      ]
    },
    {
      qID: 71,
      cntryID: 1,
      values: [
        [66.3, 8.2],
        [59.9, 7.4],
        [40.6, 2.9],
        [33.9, 2.2]
      ]
    },
    {
      qID: 71,
      cntryID: 2,
      values: [
        [0, 0],
        [46.6, 56.8],
        [61.3, 62],
        [57.4, 81.7]
      ]
    },
    {
      qID: 71,
      cntryID: 3,
      values: [
        [53.1, 71],
        [60.2, 79.1],
        [72.4, 78.9],
        [76.8, 69.3]
      ]
    },
    {
      qID: 71,
      cntryID: 4,
      values: [
        [18, 0],
        [20.9, 0],
        [19.3, 0],
        [15.8, 0]
      ]
    },
    {
      qID: 71,
      cntryID: 5,
      values: [
        [0, 16.5],
        [0, 22.9],
        [0, 29.9],
        [0, 38.5]
      ]
    },
    {
      qID: 71,
      cntryID: 6,
      values: [
        [6, 0],
        [7.1, 0],
        [30.2, 0],
        [0, 0]
      ]
    },
    {
      qID: 71,
      cntryID: 7,
      values: [
        [33.2, 47.3],
        [37.4, 50.3],
        [46.2, 51.8],
        [50.3, 52.3]
      ]
    },
    {
      qID: 71,
      cntryID: 8,
      values: [
        [5.5, 24],
        [6, 21],
        [7.6, 11.9],
        [12.6, 6.7]
      ]
    },
    {
      qID: 71,
      cntryID: 9,
      values: [
        [19.9, 26],
        [17.4, 28],
        [22.7, 23.8],
        [18.1, 26.9]
      ]
    },
    {
      qID: 71,
      cntryID: 10,
      values: [
        [76.3, 0],
        [81.7, 0],
        [89, 0],
        [90.2, 0]
      ]
    },
    {
      qID: 71,
      cntryID: 11,
      values: [
        [11.6, 42],
        [14.9, 45],
        [30.8, 47.5],
        [32, 48]
      ]
    },
    {
      qID: 71,
      cntryID: 12,
      values: [
        [34.9, 51.9],
        [32.6, 48.9],
        [25.4, 47.9],
        [0, 36.7]
      ]
    },
    {
      qID: 71,
      cntryID: 13,
      values: [
        [27.3, 0],
        [39.6, 0],
        [47.4, 35.9],
        [39.3, 36.5]
      ]
    },
    {
      qID: 71,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 71,
      cntryID: 15,
      values: [
        [26.2, 0],
        [27, 64.3],
        [35.1, 65.4],
        [39, 63.4]
      ]
    },
    {
      qID: 71,
      cntryID: 16,
      values: [
        [7.8, 7.7],
        [14.9, 13.7],
        [20.6, 16],
        [12.1, 15.2]
      ]
    },
    {
      qID: 71,
      cntryID: 17,
      values: [
        [0.2, 2.2],
        [0.7, 7.8],
        [1.7, 10.6],
        [0, 12.1]
      ]
    },
    {
      qID: 71,
      cntryID: 18,
      values: [
        [9.4, 10.2],
        [9.2, 15.3],
        [8.7, 23.4],
        [0, 23.6]
      ]
    },
    {
      qID: 72,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 72,
      cntryID: 1,
      values: [
        [31.4, 25.6],
        [32.6, 28.6],
        [32.9, 32.8],
        [37.9, 34.3]
      ]
    },
    {
      qID: 72,
      cntryID: 2,
      values: [
        [0, 0],
        [35.4, 29],
        [37.1, 34.9],
        [40.2, 45.6]
      ]
    },
    {
      qID: 72,
      cntryID: 3,
      values: [
        [34.4, 44.8],
        [38, 48],
        [48.4, 57.4],
        [57.5, 58.4]
      ]
    },
    {
      qID: 72,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 72,
      cntryID: 5,
      values: [
        [0, 35.1],
        [0, 36.7],
        [0, 36.4],
        [0, 38.1]
      ]
    },
    {
      qID: 72,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 72,
      cntryID: 7,
      values: [
        [35.6, 37.8],
        [38.7, 37.2],
        [40.9, 38.8],
        [42.8, 39]
      ]
    },
    {
      qID: 72,
      cntryID: 8,
      values: [
        [33.7, 0],
        [33.4, 32],
        [32.2, 30.9],
        [32.6, 29.8]
      ]
    },
    {
      qID: 72,
      cntryID: 9,
      values: [
        [24.7, 28.7],
        [26.5, 30.1],
        [28.6, 30.3],
        [29.8, 33]
      ]
    },
    {
      qID: 72,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 72,
      cntryID: 11,
      values: [
        [30.2, 34.9],
        [32.8, 35.6],
        [34.8, 37.2],
        [0, 38.6]
      ]
    },
    {
      qID: 72,
      cntryID: 12,
      values: [
        [28.1, 27],
        [28.9, 27.4],
        [27.9, 27.6],
        [0, 27.4]
      ]
    },
    {
      qID: 72,
      cntryID: 13,
      values: [
        [22.1, 0],
        [23.3, 0],
        [29, 28.2],
        [32.8, 32.6]
      ]
    },
    {
      qID: 72,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 72,
      cntryID: 15,
      values: [
        [34.1, 29.6],
        [35.3, 30.4],
        [34.7, 30.4],
        [36.8, 35.9]
      ]
    },
    {
      qID: 72,
      cntryID: 16,
      values: [
        [24.9, 0],
        [27.7, 24.8],
        [29, 28.4],
        [42.1, 35.4]
      ]
    },
    {
      qID: 72,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 72,
      cntryID: 18,
      values: [
        [26.1, 26.2],
        [28.6, 26.9],
        [32.1, 27.8],
        [0, 31.3]
      ]
    },
    {
      qID: 73,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 73,
      cntryID: 1,
      values: [
        [35.9, 37.4],
        [37.2, 39.5],
        [39.1, 41.7],
        [43.7, 42.9]
      ]
    },
    {
      qID: 73,
      cntryID: 2,
      values: [
        [0, 0],
        [47.1, 35.9],
        [45.1, 39.5],
        [47.5, 50.6]
      ]
    },
    {
      qID: 73,
      cntryID: 3,
      values: [
        [36.5, 46.1],
        [39.6, 48.7],
        [48.6, 57.8],
        [59.3, 59.7]
      ]
    },
    {
      qID: 73,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 73,
      cntryID: 5,
      values: [
        [0, 51.7],
        [0, 54.1],
        [0, 55],
        [0, 59]
      ]
    },
    {
      qID: 73,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 73,
      cntryID: 7,
      values: [
        [43.4, 49.1],
        [45.5, 48.2],
        [47.8, 49.4],
        [48.6, 49.1]
      ]
    },
    {
      qID: 73,
      cntryID: 8,
      values: [
        [35.3, 0],
        [36.1, 42.9],
        [36.8, 46.1],
        [38.3, 45.2]
      ]
    },
    {
      qID: 73,
      cntryID: 9,
      values: [
        [42.9, 43.4],
        [44.2, 43.6],
        [43.5, 43.9],
        [42.8, 41.5]
      ]
    },
    {
      qID: 73,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 73,
      cntryID: 11,
      values: [
        [42.8, 45.1],
        [43.1, 45.7],
        [44.1, 47.2],
        [0, 47.6]
      ]
    },
    {
      qID: 73,
      cntryID: 12,
      values: [
        [34.4, 43],
        [35, 43.9],
        [35.3, 46.3],
        [0, 47.4]
      ]
    },
    {
      qID: 73,
      cntryID: 13,
      values: [
        [30.1, 0],
        [33.3, 0],
        [38.2, 38.7],
        [41.1, 41.1]
      ]
    },
    {
      qID: 73,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 73,
      cntryID: 15,
      values: [
        [34.3, 0],
        [35.5, 43.7],
        [38, 44.8],
        [39.5, 46.7]
      ]
    },
    {
      qID: 73,
      cntryID: 16,
      values: [
        [52.1, 0],
        [53.6, 52.1],
        [53.1, 51.5],
        [50.5, 50.5]
      ]
    },
    {
      qID: 73,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 73,
      cntryID: 18,
      values: [
        [38.8, 41.6],
        [39.2, 42.9],
        [39.7, 43.7],
        [0, 49.5]
      ]
    },
    {
      qID: 74,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 74,
      cntryID: 1,
      values: [
        [44.5, 35.4],
        [44.2, 40],
        [43.7, 42.9],
        [52, 46.1]
      ]
    },
    {
      qID: 74,
      cntryID: 2,
      values: [
        [0, 0],
        [49.6, 38.7],
        [47.9, 42.4],
        [51.6, 46.5]
      ]
    },
    {
      qID: 74,
      cntryID: 3,
      values: [
        [38.8, 45.2],
        [41.7, 48],
        [49.5, 57.8],
        [58.6, 58.9]
      ]
    },
    {
      qID: 74,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 74,
      cntryID: 5,
      values: [
        [0, 50.2],
        [0, 52.4],
        [0, 52.7],
        [0, 51.4]
      ]
    },
    {
      qID: 74,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 74,
      cntryID: 7,
      values: [
        [47.1, 49.4],
        [48.8, 47],
        [49.8, 48.2],
        [45.6, 43]
      ]
    },
    {
      qID: 74,
      cntryID: 8,
      values: [
        [39.5, 0],
        [39.5, 42.8],
        [38.2, 42.7],
        [39.3, 39]
      ]
    },
    {
      qID: 74,
      cntryID: 9,
      values: [
        [40.4, 42.9],
        [43.8, 44.4],
        [43.7, 43.2],
        [44.3, 42.7]
      ]
    },
    {
      qID: 74,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 74,
      cntryID: 11,
      values: [
        [46.4, 48.1],
        [47, 46.7],
        [48.3, 49.3],
        [0, 47.1]
      ]
    },
    {
      qID: 74,
      cntryID: 12,
      values: [
        [42.5, 44.3],
        [43.9, 44.6],
        [42.3, 46.2],
        [0, 45.4]
      ]
    },
    {
      qID: 74,
      cntryID: 13,
      values: [
        [32.8, 0],
        [35.3, 0],
        [40.3, 37.5],
        [44, 42.6]
      ]
    },
    {
      qID: 74,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 74,
      cntryID: 15,
      values: [
        [43.7, 0],
        [44.5, 43.1],
        [45, 43.7],
        [47.5, 46.9]
      ]
    },
    {
      qID: 74,
      cntryID: 16,
      values: [
        [38.6, 0],
        [41.7, 37.4],
        [43.1, 41.6],
        [48.7, 45.4]
      ]
    },
    {
      qID: 74,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 74,
      cntryID: 18,
      values: [
        [40, 39.6],
        [41.6, 40.4],
        [43.6, 39.1],
        [0, 40.7]
      ]
    },
    {
      qID: 75,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 75,
      cntryID: 1,
      values: [
        [40.1, 37.6],
        [41.1, 41.3],
        [43.1, 44.8],
        [46.8, 46.1]
      ]
    },
    {
      qID: 75,
      cntryID: 2,
      values: [
        [0, 0],
        [50.7, 38.4],
        [48.5, 40.4],
        [51.8, 51.2]
      ]
    },
    {
      qID: 75,
      cntryID: 3,
      values: [
        [37.3, 46.1],
        [40.2, 48.7],
        [49.1, 57.7],
        [57, 59.2]
      ]
    },
    {
      qID: 75,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 75,
      cntryID: 5,
      values: [
        [0, 55.3],
        [0, 57.3],
        [0, 58],
        [0, 60.6]
      ]
    },
    {
      qID: 75,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 75,
      cntryID: 7,
      values: [
        [47.6, 53.9],
        [49.7, 51],
        [51.7, 51.9],
        [49.7, 48.6]
      ]
    },
    {
      qID: 75,
      cntryID: 8,
      values: [
        [38.4, 0],
        [39, 47.8],
        [40.1, 50.2],
        [40.6, 47.6]
      ]
    },
    {
      qID: 75,
      cntryID: 9,
      values: [
        [45.2, 45.8],
        [46.8, 46.3],
        [47.6, 47],
        [44.9, 45.2]
      ]
    },
    {
      qID: 75,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 75,
      cntryID: 11,
      values: [
        [44, 46.8],
        [44.6, 47.6],
        [47, 50.7],
        [0, 50.8]
      ]
    },
    {
      qID: 75,
      cntryID: 12,
      values: [
        [42.2, 47.6],
        [43.3, 48.6],
        [44.4, 51],
        [0, 51]
      ]
    },
    {
      qID: 75,
      cntryID: 13,
      values: [
        [32.9, 0],
        [35.9, 0],
        [40.2, 39.6],
        [42.2, 43.9]
      ]
    },
    {
      qID: 75,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 75,
      cntryID: 15,
      values: [
        [39, 0],
        [39.7, 45.7],
        [42.9, 50],
        [43.4, 50.3]
      ]
    },
    {
      qID: 75,
      cntryID: 16,
      values: [
        [52.9, 0],
        [55.1, 53.4],
        [55.4, 52.6],
        [51.2, 51.7]
      ]
    },
    {
      qID: 75,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 75,
      cntryID: 18,
      values: [
        [40.5, 42.8],
        [42, 45],
        [42.9, 45.7],
        [0, 47.8]
      ]
    },
    {
      qID: 76,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 76,
      cntryID: 1,
      values: [
        [24.2, 23],
        [27.4, 29.5],
        [29.2, 33.3],
        [0, 34.3]
      ]
    },
    {
      qID: 76,
      cntryID: 2,
      values: [
        [0, 0],
        [34.2, 23.9],
        [37.1, 36.2],
        [38.6, 52.2]
      ]
    },
    {
      qID: 76,
      cntryID: 3,
      values: [
        [34, 45.6],
        [37.9, 48.6],
        [48.3, 57.5],
        [0, 59]
      ]
    },
    {
      qID: 76,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 76,
      cntryID: 5,
      values: [
        [0, 34.8],
        [0, 37.7],
        [0, 37.7],
        [0, 0]
      ]
    },
    {
      qID: 76,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 76,
      cntryID: 7,
      values: [
        [33.5, 38.2],
        [36.7, 38.2],
        [40.6, 41.6],
        [46.3, 44.3]
      ]
    },
    {
      qID: 76,
      cntryID: 8,
      values: [
        [31.9, 0],
        [32.2, 30.9],
        [31.7, 31],
        [31.5, 34.6]
      ]
    },
    {
      qID: 76,
      cntryID: 9,
      values: [
        [25.9, 28.9],
        [27.5, 31.2],
        [27.5, 32],
        [33.5, 33.2]
      ]
    },
    {
      qID: 76,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 76,
      cntryID: 11,
      values: [
        [28.8, 36.1],
        [32.7, 37.9],
        [35.1, 37.4],
        [0, 39]
      ]
    },
    {
      qID: 76,
      cntryID: 12,
      values: [
        [19.1, 20.9],
        [18.8, 19],
        [15, 17.8],
        [0, 0]
      ]
    },
    {
      qID: 76,
      cntryID: 13,
      values: [
        [18.7, 0],
        [19.2, 0],
        [28.1, 31.1],
        [32.4, 32]
      ]
    },
    {
      qID: 76,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 76,
      cntryID: 15,
      values: [
        [29.9, 0],
        [31.7, 30.3],
        [30.4, 28.1],
        [0, 35.5]
      ]
    },
    {
      qID: 76,
      cntryID: 16,
      values: [
        [32.5, 0],
        [32.9, 30.8],
        [34.6, 33.6],
        [41.8, 40]
      ]
    },
    {
      qID: 76,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 76,
      cntryID: 18,
      values: [
        [28.1, 0],
        [30.4, 30.9],
        [29.9, 33.4],
        [0, 0]
      ]
    },
    {
      qID: 77,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 77,
      cntryID: 1,
      values: [
        [25.8, 36.8],
        [28.7, 36.4],
        [30.9, 36.8],
        [0, 38]
      ]
    },
    {
      qID: 77,
      cntryID: 2,
      values: [
        [0, 0],
        [41.7, 31.6],
        [39.7, 38],
        [41.4, 49.8]
      ]
    },
    {
      qID: 77,
      cntryID: 3,
      values: [
        [35.7, 46.1],
        [39, 48.6],
        [48.1, 57.9],
        [0, 60.3]
      ]
    },
    {
      qID: 77,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 77,
      cntryID: 5,
      values: [
        [0, 44.1],
        [0, 46.5],
        [0, 46.5],
        [0, 0]
      ]
    },
    {
      qID: 77,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 77,
      cntryID: 7,
      values: [
        [37.6, 42.4],
        [39.8, 44],
        [42.6, 46],
        [47.2, 49.7]
      ]
    },
    {
      qID: 77,
      cntryID: 8,
      values: [
        [32.7, 0],
        [33.6, 37.4],
        [33.7, 41.3],
        [35.3, 40.7]
      ]
    },
    {
      qID: 77,
      cntryID: 9,
      values: [
        [35.9, 37.5],
        [36.2, 38.2],
        [34.8, 38.6],
        [38.7, 36.9]
      ]
    },
    {
      qID: 77,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 77,
      cntryID: 11,
      values: [
        [37, 41.5],
        [37.8, 42.4],
        [36.8, 42.4],
        [0, 43.6]
      ]
    },
    {
      qID: 77,
      cntryID: 12,
      values: [
        [20.5, 24.1],
        [20.5, 22.8],
        [17.8, 23.4],
        [0, 0]
      ]
    },
    {
      qID: 77,
      cntryID: 13,
      values: [
        [21.6, 0],
        [24.4, 0],
        [30.6, 36.9],
        [38.2, 37.1]
      ]
    },
    {
      qID: 77,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 77,
      cntryID: 15,
      values: [
        [28.1, 0],
        [30, 40.4],
        [30.2, 36.4],
        [33, 42.2]
      ]
    },
    {
      qID: 77,
      cntryID: 16,
      values: [
        [50.8, 0],
        [51.7, 50.8],
        [49.8, 50.2],
        [48.6, 48.5]
      ]
    },
    {
      qID: 77,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 77,
      cntryID: 18,
      values: [
        [34.7, 0],
        [33, 38.1],
        [33.5, 38.7],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 1,
      values: [
        [1.2, 0],
        [0.5, 0],
        [0, 0.2],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 2,
      values: [
        [0, 0],
        [4.4, 22.5],
        [1.2, 16.7],
        [0, 0.1]
      ]
    },
    {
      qID: 78,
      cntryID: 3,
      values: [
        [16.3, 16.3],
        [9.3, 7],
        [13.2, 12.5],
        [0, 11.6]
      ]
    },
    {
      qID: 78,
      cntryID: 4,
      values: [
        [28, 0],
        [25.4, 0],
        [20.2, 0],
        [9.9, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 7,
      values: [
        [46.8, 30.8],
        [41.6, 26.3],
        [32.4, 12.7],
        [20.7, 4.3]
      ]
    },
    {
      qID: 78,
      cntryID: 8,
      values: [
        [0, 0],
        [4.3, 14.6],
        [6.2, 3.8],
        [5.2, 2.3]
      ]
    },
    {
      qID: 78,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 11,
      values: [
        [33.2, 25.1],
        [24.3, 16.8],
        [13.9, 7.9],
        [0, 3.4]
      ]
    },
    {
      qID: 78,
      cntryID: 12,
      values: [
        [51.2, 22.8],
        [45.5, 17.8],
        [33.5, 7.3],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 15,
      values: [
        [51.2, 0],
        [38.7, 21.5],
        [26.1, 10.3],
        [0, 5.6]
      ]
    },
    {
      qID: 78,
      cntryID: 16,
      values: [
        [0, 0],
        [20, 34.7],
        [0, 29.3],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 78,
      cntryID: 18,
      values: [
        [0, 0],
        [4, 1.6],
        [2.2, 2.3],
        [0, 1.4]
      ]
    },
    {
      qID: 79,
      cntryID: 0,
      values: [
        [97.1, 0],
        [98.1, 0],
        [98.3, 0],
        [96.3, 0]
      ]
    },
    {
      qID: 79,
      cntryID: 1,
      values: [
        [92.6, 15.8],
        [86.7, 18.2],
        [61.6, 10.8],
        [39, 4.1]
      ]
    },
    {
      qID: 79,
      cntryID: 2,
      values: [
        [0, 0],
        [11.9, 26.4],
        [18.4, 23.5],
        [22.3, 38.7]
      ]
    },
    {
      qID: 79,
      cntryID: 3,
      values: [
        [97.3, 95.5],
        [97.8, 95.6],
        [97.2, 94.7],
        [90.6, 89.8]
      ]
    },
    {
      qID: 79,
      cntryID: 4,
      values: [
        [79.9, 0],
        [80, 0],
        [72.7, 0],
        [73.5, 0]
      ]
    },
    {
      qID: 79,
      cntryID: 5,
      values: [
        [0, 10],
        [0, 14.2],
        [0, 18.6],
        [0, 30.1]
      ]
    },
    {
      qID: 79,
      cntryID: 6,
      values: [
        [94, 0],
        [92.1, 0],
        [71.2, 0],
        [0, 0]
      ]
    },
    {
      qID: 79,
      cntryID: 7,
      values: [
        [48, 45.8],
        [49.6, 44.1],
        [49.7, 36.5],
        [39, 38]
      ]
    },
    {
      qID: 79,
      cntryID: 8,
      values: [
        [38.1, 78.7],
        [42.3, 57],
        [42.1, 31.7],
        [39.8, 18.1]
      ]
    },
    {
      qID: 79,
      cntryID: 9,
      values: [
        [21.1, 25.4],
        [20.6, 23.9],
        [26.5, 19.1],
        [19, 20.3]
      ]
    },
    {
      qID: 79,
      cntryID: 10,
      values: [
        [81.7, 0],
        [92.8, 0],
        [95.6, 0],
        [97.2, 0]
      ]
    },
    {
      qID: 79,
      cntryID: 11,
      values: [
        [20.4, 6.3],
        [19.4, 9.9],
        [16.3, 12.5],
        [0, 12.2]
      ]
    },
    {
      qID: 79,
      cntryID: 12,
      values: [
        [66, 38.5],
        [64.6, 35.9],
        [58.7, 37.8],
        [0, 21]
      ]
    },
    {
      qID: 79,
      cntryID: 13,
      values: [
        [23.1, 0],
        [24.3, 0],
        [27.6, 20.3],
        [22.8, 13.1]
      ]
    },
    {
      qID: 79,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 79,
      cntryID: 15,
      values: [
        [33.6, 0],
        [40.6, 19.5],
        [40.1, 17.4],
        [35.6, 18.6]
      ]
    },
    {
      qID: 79,
      cntryID: 16,
      values: [
        [1.6, 0],
        [0.7, 0.5],
        [0.1, 0.9],
        [1.5, 0.5]
      ]
    },
    {
      qID: 79,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 79,
      cntryID: 18,
      values: [
        [9.3, 2.5],
        [10.1, 9],
        [14.8, 12.9],
        [0, 4.9]
      ]
    },
    {
      qID: 80,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 80,
      cntryID: 1,
      values: [
        [95.3, 99.6],
        [96.2, 98.9],
        [98.9, 97.3],
        [100, 98.7]
      ]
    },
    {
      qID: 80,
      cntryID: 2,
      values: [
        [0, 0],
        [8.8, 19.8],
        [3.9, 10.4],
        [0.4, 4]
      ]
    },
    {
      qID: 80,
      cntryID: 3,
      values: [
        [76.3, 81.6],
        [85.9, 92.5],
        [88.6, 89.1],
        [0, 88.4]
      ]
    },
    {
      qID: 80,
      cntryID: 4,
      values: [
        [44.5, 0],
        [48.4, 0],
        [55.5, 0],
        [66.9, 0]
      ]
    },
    {
      qID: 80,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 80,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 80,
      cntryID: 7,
      values: [
        [24.5, 47.3],
        [30.6, 55.3],
        [45.6, 73.8],
        [63.7, 90.2]
      ]
    },
    {
      qID: 80,
      cntryID: 8,
      values: [
        [0, 0],
        [83.5, 77.2],
        [84.6, 93.2],
        [86.8, 97]
      ]
    },
    {
      qID: 80,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 80,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 80,
      cntryID: 11,
      values: [
        [62.8, 75.4],
        [72.5, 83.3],
        [87.4, 92.1],
        [0, 98.5]
      ]
    },
    {
      qID: 80,
      cntryID: 12,
      values: [
        [46.2, 75.5],
        [51.9, 80.2],
        [61.1, 92.4],
        [0, 98]
      ]
    },
    {
      qID: 80,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 80,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 80,
      cntryID: 15,
      values: [
        [28.1, 0],
        [40.2, 60.7],
        [50.2, 69.5],
        [0, 76.3]
      ]
    },
    {
      qID: 80,
      cntryID: 16,
      values: [
        [0, 0],
        [100, 0],
        [0, 98.6],
        [0, 0]
      ]
    },
    {
      qID: 80,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 80,
      cntryID: 18,
      values: [
        [0, 0],
        [74, 86.9],
        [86.2, 96.4],
        [0, 96.8]
      ]
    },
    {
      qID: 81,
      cntryID: 0,
      values: [
        [8.5, 0],
        [11.2, 0],
        [32.9, 0],
        [50, 0]
      ]
    },
    {
      qID: 81,
      cntryID: 1,
      values: [
        [2.7, 13.8],
        [4.3, 20.1],
        [18.3, 23.5],
        [30.1, 39.3]
      ]
    },
    {
      qID: 81,
      cntryID: 2,
      values: [
        [43.5, 32.1],
        [61.1, 64.4],
        [65.3, 65.1],
        [60.2, 81.6]
      ]
    },
    {
      qID: 81,
      cntryID: 3,
      values: [
        [39, 50],
        [44.8, 57.6],
        [56.9, 68],
        [72.8, 63.7]
      ]
    },
    {
      qID: 81,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 81,
      cntryID: 5,
      values: [
        [0, 32.6],
        [0, 42.6],
        [0, 46.9],
        [0, 65.9]
      ]
    },
    {
      qID: 81,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 81,
      cntryID: 7,
      values: [
        [33.2, 46.5],
        [37.5, 49],
        [47.6, 51.1],
        [54.2, 51.7]
      ]
    },
    {
      qID: 81,
      cntryID: 8,
      values: [
        [16.7, 47.3],
        [23.7, 64.6],
        [28.8, 57],
        [39.5, 35.8]
      ]
    },
    {
      qID: 81,
      cntryID: 9,
      values: [
        [7.3, 7.2],
        [8, 15.5],
        [13.9, 16.6],
        [22.6, 22.3]
      ]
    },
    {
      qID: 81,
      cntryID: 10,
      values: [
        [41.1, 0],
        [37.2, 0],
        [35.1, 0],
        [29.3, 0]
      ]
    },
    {
      qID: 81,
      cntryID: 11,
      values: [
        [16.6, 44.4],
        [20.1, 51.6],
        [37.2, 53.9],
        [46.8, 56.3]
      ]
    },
    {
      qID: 81,
      cntryID: 12,
      values: [
        [33.6, 52.1],
        [31.6, 49.6],
        [25, 48.9],
        [59.4, 32.8]
      ]
    },
    {
      qID: 81,
      cntryID: 13,
      values: [
        [17.9, 100],
        [18.7, 47.3],
        [25, 28.4],
        [37.7, 38.6]
      ]
    },
    {
      qID: 81,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 81,
      cntryID: 15,
      values: [
        [32.9, 62.8],
        [37.9, 72.7],
        [47.6, 73],
        [48.2, 70.3]
      ]
    },
    {
      qID: 81,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 81,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 81,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 82,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 82,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 0.1],
        [0.1, 0.1],
        [0, 0.4]
      ]
    },
    {
      qID: 82,
      cntryID: 2,
      values: [
        [0, 0],
        [0.3, 0.1],
        [0.3, 0.1],
        [0.5, 0.5]
      ]
    },
    {
      qID: 82,
      cntryID: 3,
      values: [
        [0.1, 0.1],
        [0.2, 0.1],
        [0.1, 0.3],
        [0.4, 1.4]
      ]
    },
    {
      qID: 82,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 82,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 82,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 82,
      cntryID: 7,
      values: [
        [0.1, 0.2],
        [0.5, 0.3],
        [0.5, 0.6],
        [0.8, 1.3]
      ]
    },
    {
      qID: 82,
      cntryID: 8,
      values: [
        [0, 0],
        [0.1, 0.1],
        [0.2, 0.3],
        [1.1, 0.6]
      ]
    },
    {
      qID: 82,
      cntryID: 9,
      values: [
        [0.4, 0],
        [0.5, 0.6],
        [0.7, 0.7],
        [0.6, 1]
      ]
    },
    {
      qID: 82,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0.1, 0],
        [0.1, 0]
      ]
    },
    {
      qID: 82,
      cntryID: 11,
      values: [
        [0.1, 0],
        [0.1, 0.1],
        [0.2, 0.2],
        [0, 0.5]
      ]
    },
    {
      qID: 82,
      cntryID: 12,
      values: [
        [0.1, 0.2],
        [0.3, 0.3],
        [0.3, 1.1],
        [0, 0]
      ]
    },
    {
      qID: 82,
      cntryID: 13,
      values: [
        [0.3, 0],
        [0.3, 0],
        [0.1, 0.4],
        [0.8, 0.4]
      ]
    },
    {
      qID: 82,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 82,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 82,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 82,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 82,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 83,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 83,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 1.1],
        [1.1, 1.2],
        [0, 1.4]
      ]
    },
    {
      qID: 83,
      cntryID: 2,
      values: [
        [0, 0],
        [1.5, 1.4],
        [1.6, 1.9],
        [1.9, 2.1]
      ]
    },
    {
      qID: 83,
      cntryID: 3,
      values: [
        [0.4, 0.6],
        [0.5, 0.5],
        [0.6, 0.8],
        [1, 2.1]
      ]
    },
    {
      qID: 83,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 83,
      cntryID: 5,
      values: [
        [0, 1.6],
        [0, 1.6],
        [0, 2.5],
        [0, 0]
      ]
    },
    {
      qID: 83,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 83,
      cntryID: 7,
      values: [
        [1.5, 1.6],
        [1.7, 1.7],
        [1.9, 2],
        [2.2, 2.8]
      ]
    },
    {
      qID: 83,
      cntryID: 8,
      values: [
        [2.4, 0],
        [2.4, 2.5],
        [2.8, 2.7],
        [3.7, 3]
      ]
    },
    {
      qID: 83,
      cntryID: 9,
      values: [
        [2.1, 0],
        [2.1, 2.1],
        [2.4, 2.2],
        [2.3, 2.6]
      ]
    },
    {
      qID: 83,
      cntryID: 10,
      values: [
        [0, 0],
        [1.8, 0],
        [2, 0],
        [2.2, 0]
      ]
    },
    {
      qID: 83,
      cntryID: 11,
      values: [
        [1.5, 1.4],
        [1.4, 1.5],
        [1.5, 1.7],
        [0, 1.8]
      ]
    },
    {
      qID: 83,
      cntryID: 12,
      values: [
        [1.1, 1.2],
        [1.3, 1.4],
        [1.5, 2.1],
        [0, 0]
      ]
    },
    {
      qID: 83,
      cntryID: 13,
      values: [
        [1.7, 0],
        [1.8, 0],
        [1.9, 1.6],
        [2.2, 1.7]
      ]
    },
    {
      qID: 83,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 83,
      cntryID: 15,
      values: [
        [1.6, 0],
        [1.4, 1.4],
        [1.3, 1.5],
        [0, 2]
      ]
    },
    {
      qID: 83,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 83,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 83,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 1,
      values: [
        [0, 0],
        [8.7, 5.3],
        [0, 5.9],
        [0, 19.4]
      ]
    },
    {
      qID: 84,
      cntryID: 2,
      values: [
        [0, 0],
        [0, 0],
        [7.6, 18.3],
        [0, 29.7]
      ]
    },
    {
      qID: 84,
      cntryID: 3,
      values: [
        [0, 1.3],
        [12.6, 2.5],
        [9, 3.2],
        [22.6, 11.1]
      ]
    },
    {
      qID: 84,
      cntryID: 4,
      values: [
        [5.1, 0],
        [3.8, 0],
        [4.5, 0],
        [9.1, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 5,
      values: [
        [0, 30.4],
        [0, 25.7],
        [0, 34.3],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 7,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 8,
      values: [
        [0, 0],
        [0, 1.9],
        [0, 5.1],
        [0, 8.2]
      ]
    },
    {
      qID: 84,
      cntryID: 9,
      values: [
        [5, 0],
        [3.3, 0],
        [3.4, 0],
        [13.3, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 11,
      values: [
        [0, 2.3],
        [1.1, 3.8],
        [4.2, 7],
        [0, 25.2]
      ]
    },
    {
      qID: 84,
      cntryID: 12,
      values: [
        [7.2, 39.7],
        [7.8, 40.7],
        [5, 42.5],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 13,
      values: [
        [38.3, 0],
        [38.2, 0],
        [33.2, 0],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 84,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 0,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 1,
      values: [
        [0, 0],
        [0, 20.8],
        [27.1, 26.2],
        [0, 44.5]
      ]
    },
    {
      qID: 85,
      cntryID: 2,
      values: [
        [0, 0],
        [46.7, 49.2],
        [54.6, 59.1],
        [56.8, 68.1]
      ]
    },
    {
      qID: 85,
      cntryID: 3,
      values: [
        [31, 34.3],
        [32.1, 34.2],
        [36, 29.8],
        [47.7, 44.7]
      ]
    },
    {
      qID: 85,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 5,
      values: [
        [0, 29],
        [0, 39.1],
        [0, 48.1],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 7,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 8,
      values: [
        [64.9, 0],
        [59.9, 70],
        [56, 68.9],
        [53.4, 60.1]
      ]
    },
    {
      qID: 85,
      cntryID: 9,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 10,
      values: [
        [0, 0],
        [25.7, 0],
        [33.8, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 11,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 12,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 13,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 15,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 85,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 86,
      cntryID: 0,
      values: [
        [10.4, 0],
        [11.4, 0],
        [19.5, 0],
        [32.7, 0]
      ]
    },
    {
      qID: 86,
      cntryID: 1,
      values: [
        [4.4, 4.6],
        [4.7, 10.8],
        [4.8, 17.3],
        [3.3, 15.3]
      ]
    },
    {
      qID: 86,
      cntryID: 2,
      values: [
        [0, 0],
        [5.4, 2.7],
        [5.8, 2.9],
        [5.2, 5]
      ]
    },
    {
      qID: 86,
      cntryID: 3,
      values: [
        [25.6, 28.6],
        [28.8, 32],
        [32.5, 35.7],
        [41.1, 34.6]
      ]
    },
    {
      qID: 86,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 86,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 86,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 86,
      cntryID: 7,
      values: [
        [28.3, 28.9],
        [28.4, 27],
        [34.1, 29.3],
        [41.4, 28.7]
      ]
    },
    {
      qID: 86,
      cntryID: 8,
      values: [
        [7.7, 11.2],
        [8.5, 11],
        [10.6, 16.9],
        [18.5, 19.5]
      ]
    },
    {
      qID: 86,
      cntryID: 9,
      values: [
        [25.5, 43],
        [28.3, 51.5],
        [34.7, 51.3],
        [45, 45.3]
      ]
    },
    {
      qID: 86,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 86,
      cntryID: 11,
      values: [
        [6.2, 5.7],
        [5.2, 6.8],
        [6.5, 10],
        [0, 12.5]
      ]
    },
    {
      qID: 86,
      cntryID: 12,
      values: [
        [3.3, 3.3],
        [4.7, 4.6],
        [7.1, 7.2],
        [0, 5.9]
      ]
    },
    {
      qID: 86,
      cntryID: 13,
      values: [
        [0.3, 0],
        [1.3, 0],
        [2.5, 2.8],
        [4.1, 2.9]
      ]
    },
    {
      qID: 86,
      cntryID: 14,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 86,
      cntryID: 15,
      values: [
        [7, 0],
        [7.5, 11.9],
        [11, 16.3],
        [6.9, 16.3]
      ]
    },
    {
      qID: 86,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 86,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 86,
      cntryID: 18,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 87,
      cntryID: 0,
      values: [
        [85.6, 0],
        [89.2, 0],
        [89.2, 0],
        [85.4, 0]
      ]
    },
    {
      qID: 87,
      cntryID: 1,
      values: [
        [47.7, 70.4],
        [51.1, 66.9],
        [58.1, 74.2],
        [67.9, 74.9]
      ]
    },
    {
      qID: 87,
      cntryID: 2,
      values: [
        [0, 0],
        [53.3, 54],
        [54, 34.5],
        [53.3, 39.2]
      ]
    },
    {
      qID: 87,
      cntryID: 3,
      values: [
        [41.2, 36.9],
        [38, 28],
        [31.4, 16.2],
        [25.9, 10]
      ]
    },
    {
      qID: 87,
      cntryID: 4,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 87,
      cntryID: 5,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 87,
      cntryID: 6,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 87,
      cntryID: 7,
      values: [
        [34.3, 39.2],
        [35.3, 44],
        [44.6, 56.1],
        [62.2, 70.1]
      ]
    },
    {
      qID: 87,
      cntryID: 8,
      values: [
        [15.8, 30.9],
        [19, 29.5],
        [27.1, 37.6],
        [42.7, 51.9]
      ]
    },
    {
      qID: 87,
      cntryID: 9,
      values: [
        [33.1, 47],
        [34.5, 48],
        [40.8, 56.3],
        [46, 52.4]
      ]
    },
    {
      qID: 87,
      cntryID: 10,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 87,
      cntryID: 11,
      values: [
        [21.6, 22],
        [20.9, 29.2],
        [23.2, 33],
        [0, 35.9]
      ]
    },
    {
      qID: 87,
      cntryID: 12,
      values: [
        [15.7, 22.4],
        [18.3, 25.6],
        [22.3, 32.3],
        [0, 34.2]
      ]
    },
    {
      qID: 87,
      cntryID: 13,
      values: [
        [32.2, 0],
        [39, 0],
        [51.2, 51.5],
        [60.4, 48.5]
      ]
    },
    {
      qID: 87,
      cntryID: 14,
      values: [
        [6.5, 60],
        [7.4, 67.8],
        [14.9, 74.4],
        [0, 0]
      ]
    },
    {
      qID: 87,
      cntryID: 15,
      values: [
        [15.6, 0],
        [16.9, 29.2],
        [24.7, 37.4],
        [24, 41.7]
      ]
    },
    {
      qID: 87,
      cntryID: 16,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 87,
      cntryID: 17,
      values: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    },
    {
      qID: 87,
      cntryID: 18,
      values: [
        [60.4, 62.9],
        [48.8, 63.2],
        [41.3, 68.4],
        [0, 83.3]
      ]
    }
  ]
};
