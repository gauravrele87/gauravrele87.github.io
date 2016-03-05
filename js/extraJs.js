/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    function quoteDisp(){
        var Quotes = ["Abbott's Admonitions: \n 1)  If you have to ask, you're not entitled to know. \n\
        2)  If you don't like the answer, you shouldn't have asked the question.\n",
        "Abrams's Advice:\n When eating an elephant, take one bite at a time.",

        "Rule of Accuracy: \n\
          When working toward the solution of a problem,\n\
          it always helps if you know the answer.",

        "Corollary:\n\
          Provided, of course, that you know there is a problem.",

        "Acheson's Rule of the Bureaucracy:\n\
          A memorandum is written not to inform the reader but to protect the writer.",

        "Acton's Law:\n\
          Power tends to corrupt; absolute power corrupts absolutely.",

        "Ade's Law:\n\
          Anybody can win -- unless there happens to be a second entry.",

        "Airplane Law:\n\
          When the plane you are on is late, the plane you want to transfer to\n\
          is on time.",

        "Albrecht's Law:\n\
          Social innovations tend to the level of minimum tolerable well being.",

        "Algren's Precepts:\n\
          Never eat at a place called Mom\'s.  Never play cards with a man named\n\
          Doc.  And never lie down with a woman who\'s got more troubles than you.",

        "Allen's Law of Civilization:\n\
          It is better for civilization to be going down the drain than to be\n\
          coming up it.",

        "Bradley's Bromide:\n\
          If computers get too powerful, we can organize them into a committee -\n\
          that will do them in.",

        "Civilization:\n\
          Civilization advances by extending the number of important operations\n\
          which we can do without thinking of them.",

        "Agnes Allen's Law:\n\
          Almost anything is easier to get into than out of.",

        "Fred Allen's Law:\n\
          I'd rather have a free bottle in front of me than a prefrontal lobotomy.",

        "Alley's Axiom:\n\
          Justice always prevails ... three times out of seven.",

        "Allison's Precept:\n\
          The best simple-minded test of experience in a particular area is the\n\
          ability to win money in a series of bets on future occurrences in\n\
          that area.",

        "Anderson's Law:\n\
          I have yet to see any problem, however complicated, which, when you\n\
          looked at it in the right way, did not become still more complicated.\n",

        "Andrew\'s Deduction:\n\
          Attila the Hun came from a broken home.\n\
        ","\n\
        Law of Annoyance:\n\
          When working on a project, if you put away a tool that you're certain\n\
          you're finished with, you will need it instantly.\n\
        ","\n\
        Anthony's Law of Force:\n\
          Don't force it, get a larger hammer.\n\
        ","\n\
        Anthony\'s Law of the Workshop:\n\
          Any tool, when dropped, will roll into the least accessible corner of\n\
          the workshop.\n\
        ","\n\
        Corollary:    On the way to the corner, any dropped tool will first strike\n\
                        your toes.\n\
        ","\n\
        Approval Seeker's Law:\n\
          Those whose approval you seek the most give you the least.\n\
        ","\n\
        The Aquinas Axiom:\n\
          What the gods get away with, the cows don't.\n\
        ","\n\
        Army Axiom:\n\
          Any order that can be misunderstood has been misunderstood.\n\
        ","\n\
        Army Law:\n\
          If it moves, salute it; if it doesn't move, pick it up; if you can't\n\
          pick it up, paint it.\n\
        ","\n\
        Astrology Law:\n\
          It's always the wrong time of the month.\n\
        ","\n\
        Fourteenth Corollary of Atwood's General Law of Dynamic Negatives:\n\
          No books are lost by loaning except those you particularly wanted to keep.\n\
        ","\n\
        Avery's Rule of Three:\n\
          Trouble strikes in series of threes, but when working around the house\n\
          the next job after a series of three is not the fourth job -- it is the\n\
          start of a brand new series of three.\n\
        ","\n\
        Babcock's Law:\n\
          If it can be borrowed and it can be broken, you will borrow it and you\n\
          will break it.\n\
        ","\n\
        Baer's Quartet:\n\
          What's good politics is bad economics; what's bad politics is good\n\
          economics; what's good economics is bad politics; what's bad\n\
          economics is good politics.\n\
        ","\n\
        Baker's Byroad:\n\
          When you are over the hill, you pick up speed.\n\
        ","\n\
        Baker's Law:\n\
          Misery no longer loves company.  Nowadays it insists on it.\n\
        ","\n\
        Baldy's Law:\n\
          Some of it plus the rest of it is all of it.\n\
        ","\n\
        Barr's Comment on Domestic Tranquility:\n\
          On a beautiful day like this it's hard to believe anyone can be unhappy\n\
          -- but we'll work on it.\n\
        ","\n\
        Barth's Distinction:\n\
          There are two classes of people: those who divide people into\n\
          two classes, and those who don't.\n\
        ","\n\
        Bartz's Law of Hokey Horsepuckery:\n\
          The more ridiculous a belief system, the higher the probability of its\n\
          success.\n\
        ","\n\
        Baruch's Rule for Determining Old Age:\n\
          Old age is always fifteen years older than I am.\n\
        ","\n\
        Forthoffer's Cynical Summary of Barzun's Laws:\n\
          1)  That which has not yet been taught directly can never be taught\n\
              directly.\n\
          2)  If at first you don't succeed, you will never succeed.\n\
        ","\n\
        Baxter's First Law:\n\
          Government intervention in the free market always leads to a lower\n\
          national standard of living.\n\
        ","\n\
        Beardsley's Warning to Lawyers:\n\
          Beware of and eschew pompous prolixity.\n\
        ","\n\
        Beauregard's First Law:\n\
          When you're up to your nose, keep your mouth shut.\n\
        ","\n\
        Beauregard's Second Law:\n\
          All people are cremated equal.\n\
        ","\n\
        Thoughts on reality :\n\
          The trouble with having both feet on the ground is\n\
          that it brings one into unbearably close contact\n\
          with the world.\n\
                             Thomas Szasz\n\
                             -\"Heresies\"\n\
        ","\n\
        Definition: Lawyers :\n\
          Litigants are amateur self-justifiers; Lawyers\n\
          are the professional justifiers of others.\n\
                             Thomas Szasz\n\
                             -\"Heresies\"\n\
        ","\n\
        Axiom on thinking :\n\
          There is no good digestion without hydrochloric acid;\n\
          and there is no good thinking without adrenaline.\n\
                             Thomas Szasz\n\
                             -\"Heresies\"\n\
          ","Beware of people who tell you that a little knowledge\n\
          is a dangerous thing - unless they quickly add that\n\
          no knowledge is a fatal thing. They are trying to make\n\
          you more vulnerable, not more wise.\n\
                             Thomas Szasz\n\
                             -\"Heresies\"\n\
        ","\n\
        Thoughts on management :\n\
          If everyone dislikes it, it must be looked into.\n\
          If everyone likes it, it must be looked into.\n\
        ","\n\
        e.e. cummings\' theory of knowledge:\n\
          all ignorance toboggans into know\n\
        ","\n\
        Becker's Law:\n\
          It is much harder to find a job than to keep one.\n\
        ","\n\
        Belle's Constant:\n\
          The ratio of time involved in work to time available for work is usually\n\
          about 0.6.\n\
        ","\n\
        Benchley's Distinction:\n\
          There are two types of people:  those who divide people into two types,\n\
          and those who don't.\n\
        ","\n\
        Benchley's Law:\n\
          Anyone can do any amount of work, provided it isn't the work he is\n\
          supposed to be doing at that moment.\n\
        ","\n\
        First Law of Bicycling:\n\
          No matter which way you ride, it's uphill and against the wind.\n\
        ","\n\
        The Billings Phenomenon:\n\
          The conclusions of most good operations research studies are obvious.\n\
        ","\n\
        Billing's Law:\n\
          Live within your income, even if you have to borrow to do so.\n\
        ","\n\
        Blaauw's Law:\n\
          Established technology tends to persist in spite of new technology.\n\
        ","\n\
        Blanchard's Newspaper Obituary Law:\n\
          If you want your name spelled wrong, die.\n\
        ","\n\
        Bok's Law:\n\
          If you think education is expensive -- try ignorance.\n\
        ","\n\
        Boling's Postulate:\n\
          If you're feeling good, don't worry.  You'll get over it.\n\
        ","\n\
        Bolton's Law of Ascending Budgets:\n\
          Under current practices, both expenditures and revenues rise to meet\n\
          each other, no matter which one may be in excess.\n\
        ","\n\
        Bombeck's Rule of Medicine:\n\
          Never go to a doctor whose office plants have died.\n\
        ","\n\
        Boyle's Observation:\n\
          A welfare state is one that assumes responsibility for the health,\n\
          happiness, and general well-being of all its citizens except the taxpayers.\n\
        ","\n\
        Boston's Irreversible Law of Clutter:\n\
           In any household, junk accumulates to fill the space available for\n\
           its storage.\n\
        ","\n\
        Booker's Law:\n\
          An ounce of application is worth a ton of abstraction.\n\
        ","\n\
        Bonafede's Revelation:\n\
          The conventional wisdom is that power is an aphrodisiac.\n\
          In truth, it's exhausting.\n\
        ","\n\
        Boob's Law:\n\
          You always find something the last place you look.\n\
        ","\n\
        Boozer's Revision:\n\
          A bird in the hand is dead.\n\
        ","\n\
        Boren's Laws of the Bureaucracy:\n\
          1)  When in doubt, mumble.\n\
          2)  When in trouble, delegate.\n\
          3)  When in charge, ponder.\n\
        ","\n\
        Borstelmann\'s Rule\:\n\
          If everything seems to be coming your way, you\'re probably in the\n\
          wrong lane."];
        return Quotes;
    };
    $("button").click(function(){
        ch = quoteDisp();
        ind = ch.length;
        $(".quoteGen").text(ch[Math.floor(Math.random()*ind)]);   
    });
});


/*
","
Boultbee's Criterion:
  If the converse of a statement is absurd, the original statement is an
  insult to the intelligence and should never have been said.
","
Branch's First Law of Crisis:
  The spirit of public service will rise, and the bureaucracy will multiply
  itself much faster, in time of grave national concern.
","
First Law of Bridge:
  It's always the partner's fault.
","
Brien's First Law:
  At some time in the life cycle of virtually every organization, its
  ability to succeed in spite of itself runs out.
","
Broder's Law:
  Anybody that wants the presidency so much that he'll spend two years
  organizing and campaigning for it is not to be trusted with the office.
","
Brontosaurus Principle:
  Organizations can grow faster than their brains can manage them in
  relation to their environment and to their own physiology; when this
  occurs, they are an endangered species.
","
Brooks's Law:
  Adding manpower to a late software project makes it later.
","
Brooke's Law:
  Whenever a system becomes completely defined, some damn fool discovers
  something which either abolishes the system or expands it beyond
  recognition.
","
(Sam) Brown's Law:
  Never offend people with style when you can offend them with substance.
","
(Tony) Brown's Law of Business Success:
  Our customer's paperwork is profit.  Our own paperwork is loss.
","
Bruce-Brigg's Law of Traffic:
  At any level of traffic, any delay is intolerable.
","
Buchwald's Law:
  As the economy gets better, everything else gets worse.
","
Bucy's Law:
  Nothing is ever accomplished by a reasonable man.
","
Bumper Sticker Axiom:
  VM systems programmers do it virtually all the time.
","
Bunuel's Law:
  Overdoing things is harmful in all cases, even when it comes to
  efficiency.
","
Burns's Balance:
  If the assumptions are wrong, the conclusions aren't likely to be
  very good.
","
Butler's Law of Progress:
  All progress is based on a universal innate desire on the part of every
  organism to live beyond its income.
","
Bye's First Law of Model Railroading:
  Anytime you wish to demonstrate something, the number of faults is
  proportional to the number of viewers.
","
Bye's Second Law of Model Railroading:
  The desire for modeling a prototype is inversely proportional to the
  decline of the prototype.
","
Cahn's Axiom (Allen's Axiom):
  When all else fails, read the instructions.
","
Calkin's Law of Menu Language:
  The number of adjectives and verbs that are added to the description of a
  menu item is in inverse proportion to the quality of the resulting dish.
","
John Cameron's Law:
  No matter how many times you've had it, if it's offered, take it, because
  it'll never be quite the same again.
","
Camp's Law:
  A coup that is known in advance is a coup that does not take place.
","
Campbell's Law:
  Nature abhors a vacuous experimenter.
","
Canada Bill Jones's Motto:
  It's morally wrong to allow suckers to keep their money.
","
Canada Bill Jones's Supplement:
  A Smith and Wesson beats four aces.
","
Cannon's Cogent Comment:
  The leak in the roof is never in the same location as the drip.
","
Captain Risser's Law:
  If it's in stock, we have it!
","
Cavanaugh's Postulate:
  All kookies are not in a jar.
","
Law of Character and Appearance:
  People don't change; they only become more so.
","
Checkbook Balancer's Law:
  In matters of dispute, the bank's balance is always smaller than yours.
","
Cheop's Law:
  Nothing ever gets built on schedule or within budget.
","
Chesterton's Observation:
  I have seen the truth and it makes no sense.
","
Chili Cook's Secret:
  If your next pot of chili tastes better, it probably is because of
  something left out, rather than added.
","
Chisholm's Second Law:
  When things are going well, something will go wrong.
","
Corollaries:
  1)  When things just can't get any worse, they will.
  2)  Anytime things appear to be going better, you have overlooked something.
","
The First Discovery of Christmas Morning:
  Batteries not included.
","
The First Discovery of Christmas Afternoon:
  Give a kid a new toy - Dad will play with the toy, the kid
  will play with the box it came in.
","
Etorre's Observation:
  The other line moves faster.
","
Faber's Fourth Law:
  Necessity is the mother of strange bedfellows.
","
Feldstein's Law:
  Never, ever, play leapfrog with a unicorn.
","
The Golden Rule:
  Whoever has the gold makes the rules.
","
Rev. Mahaffey's Observation:
  There's no such thing as a small whiskey.
","
The Law of Probable Dispersal:
  Whatever hits the fan will not be evenly distributed
  (also known as: The How Come It All Landed On Me Law).
","
Martha's Maxim:
  If God had meant for us to travel tourist class, He would
  have made us narrower.
","
Russell's Observation:
  Due to a lack of trained trumpeters, the end of the world
  has been postponed indefinitely.
","
Ellenberg's Theory:
  One good turn gets most of the blanket.
","
The Point of No Return Law:
  The light at the end of the tunnel could turn out to be the
  headlight of an oncoming train.
","
Moer's Truism:
  The trouble with most jobs is the resemblance to being in a sled dog team:
  No one gets a change of scenery, except the lead dog.
","
Firestone's Law of Forecasting:
  Chicken Little only has to be right once.
","
Gordon's First Law:
  If a project is not worth doing at all, it is not worth doing well.
","
Grierson's Law of Minimal Self-Delusion:
  Every man nourishes within himself a secret plan
  for getting rich that will not work.
","
Gumperson's Law:
  The probability of anything happening is inversely proportional
  to its desirability.
","
Hoare's Law of Large Problems:
  Inside every large problem there is a small problem
  struggling to get out.
","
Horowitz's First Law of the Admirality:
  A collision at sea can ruin your entire day.
","
How's Law:
  Every man has a scheme that will not work.
","
Jiminez's Maxim:
  If they give you ruled paper, write the other way.
","
Jones' Motto:
  Friends may come and go, but enemies accumulate.
","
Mahr's Law of Restrained Involvement:
  Don't get any on you.
","
Maier's Law:
  If the facts do not conform to the theory, they must be discarded.
","
The First Law of Management:
  Kickbacks must always exceed bribes.
","
Munroes Observation:
  Common sense is not that common.
","
Murphy's Law:
  If anything can go wrong, it will.
","
The New Math Version of Murphy's Law:
  If there is a 50/50 chance of something going wrong,
  nine times out of ten it will.
","
O'Toole's Commentary on Murphy's Law:
  Murphy was an optimist.
","
The First Corollary to Murphy's Law:
  Nothing is as easy as it looks.
","
The Second Corollary to Murphy's Law:
  Everything takes longer than you think.
","
The Third Corollary to Murphy's Law:
  If there is a possibility of several things going wrong,
  the one that will cause the most damage will be the one to go wrong.
","
The Fourth Corollary to Murphy's Law:
  If you perceive that there are four possible ways in
  which a procedure can go wrong, and circumvent these,
  then a fifth way will promptly develop.
","
The Fifth Corollary to Murphy's Law:
  Left to themselves, things tend to go from bad to worse.
","
The Sixth Corollary to Murphy's Law:
  Whenever you start out to do something,
  something else must be done first.
","
The Seventh Corollary to Murphy's Law:
  Every solution breeds new problems.
","
The Eighth Corollary to Murphy's Law:
  It is impossible to make anything foolproof because
  fools are so ingenious.
","
The Ninth Corollary to Murphy's Law:
  Nature always sides with the hidden flaw.
","
The Tenth Corollary to Murphy's Law:
  Mother nature is a bitch.
","
Murphy's Law, Version No. 11:
  If you fool around with a thing for very long,
  you will screw it up.
","
Murphy's Law, Version No. 12:
  Fixing a thing takes longer and costs more than you thought.
","
Murphy's Law, Version No. 13:
  No amount of genius can overcome a preoccupation for detail.
","
Murphy's Law, Version No. 14:
  Complex problems have simple, easy-to-understand wrong answers.
","
Murphy's Law, Version No. 15:
  In order for something to become clean,
  something else must become dirty.
","
Murphy's Law, Version No. 16:
  An easily understood, workable falsehood is more useful
  than a complex, incomprehensible truth.
","
Murphy's Law, Version No. 17:
  Anything based on greed and avarice is on a firm footing and will prevail.
","
Murphy's Law, Version No. 18:
  We have more to fear from the bumbling of the incompetent
  than from the machinations of the wicked.
","
Murphy's Law, Version No. 19:
  As the economy gets better, everything else gets worse.
","
Murphy's Law, Version No. 20:
  If several things that could have gone wrong have not gone wrong,
  it would have been ultimately beneficial for them to have gone wrong.
","
Murphy's Law, Version No. 21:
  The secret of success is sincerity.  Once
  you can fake that, you  have it made.
","
Ninety-ninety Rule of Project Schedules:
  The first 90% of the task takes 90% of the time.
  The last 10% of the task takes the other 90%.
","
Nonreciprocal Laws of Expectations:
  Negative expectations yield negative results.
  Positive expectations yield negative results.
","
Nowlan's Truism:
  An "acceptable level of unemployment" means that the
  government economist to whom it is acceptable still has a job.
","
Pastore's Truth:
  Most jobs are marginally better than daytime TV.
","
Turnaucka's Law:
  The attention span of a computer is only as long as it's
  electrical cord.
","
Laws of Programming:
  Definition:  A working  program is  one  that has  only
               unobserved bugs
","
Laws of Programming:
   #1  - Every non-trivial program has at least one bug
         Corollary 1:  A sufficient  condition for program
                       triviality is that it have no bugs.
         Corollary 2:  At least one bug will be observed
                       after the author leaves the
                       organization
","
Laws of Programming:
   #2  - Bugs will appear in  one part of a working program
         when another "unrelated" part is modified
","
Laws of Programming:
   #3   - The subtlest bugs cause the greatest damage and
          problems.
      Corollary  1: A subtle bug will modify storage
                 thereby masquerading as some other
                 problem
","
Laws of Programming:
   #4  - ("Lulled into  security Law") A "debugged" program
         that crashes will wipe out source files on storage
         devices when there is the least available backup
","
Laws of Programming:
   #5  - A hardware failure will cause system software to
         crash, and the customer engineer will blame the
         programmer
","
Laws of Programming:
   #6  - A system software crash will cause hardware to act
         strangely  and  the  programmers   will  blame  the
         customer engineer
","
Laws of Programming:
   #7  - The documented interfaces between standard
         software modules will have undocumented quirks
","
Laws of Programming:
   #8  - The probability of a hardware failure disappearing
         is inversely proportional to the distance between
         the computer and the customer engineer
","
Laws of Programming:
   #9  - Murphy designed all system software
    Note: For those  who may be in doubt,  Murphy's Law states
           that if anything can go  wrong, it will, and always
           at the most inconvenient time.
","
Laws of Programming:
   #10  - (Galvin's Law): Murphy was an optimist
","
Laws of Programming:
   #11  - Any given program, when running, is obsolete
","
Laws of Programming:
   #12  - If a program is useless, it will have to be documented
          If a program is useful it will have to be changed
","
Laws of Programming:
   #13  - Any program will expand to fill all available memory
","
Laws of Programming:
   #14  - The value of a program is proportional to the weight of its
          output
","
Laws of Programming:
   #15  - Program complexity grows until it exceeds the capability
          of the programmer to maintain it
","
Laws of Programming:
   #16  - Make it possible for programmers to write in English and
          you will find out that programmers cannot write in English
","
Thoughts on Programming, Number 1:
   If a programmer is found to be indispensable, the best thing to
   do is to get rid of him as quickly as possible.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 2:
   Some years ago, when COBOL was the great white programming
   hope, one heard much talk of the possibility of executives
   being able to read programs ... nobody can seriously have
   this! ... even programmers do not read programs.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 3:
   There are ... programs that should be thrown away before ever
   being used.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 4:
   Asking for efficiency and adaptability in the same program is
   like asking for a beautiful and modest wife ... we'll probably
   have to settle for one or the other.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 5:
   If the programmer is working in a language that allows only
   three dimensions, we are not likely to observe more than three.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 6:
   Putting a bunch of people to work on the same problem doesn't
   make them a team.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 7:
   Each program has an appropriate level of care and
   sophistication dependent on the uses to which it will be put.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 8:
   To detect errors, the programmer must have a conniving mind,
   one that delights in uncovering flaws where beauty  and
   perfection were once thought to lie.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 9:
   For locating errors, however, we want a person who has the
   persistence of a mother-in-law and the collecting instincts of
   a pack rat.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 10:
   If the poor workman hates his tools, the good workman hates
   poor tools.  The work of the workingman is, in a sense, defined
   by his tools.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 11:
   'Programming' - like 'loving' - is a single word that
   encompasses an infinitude of activities.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Einstein's View of Questions
   The important thing is not to stop questioning.  Curiosity has
   its own reason for existing.
                   -Albert Einstein
","
Thoughts on Programming, Number 12:
   Programming shares with prayer the feature of directional
   transmission and broadcast reception.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 13:
   In some terminal systems ... the user can keep his
   program from being pushed down in the priority stack by
   fiddling with the shift key while he is thinking.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 14:
   The expert is a person who avoids the small errors as he sweeps
   on to the grand fallacy.
                   -Anonymous
","
Thoughts on Programming, Number 15:
   The nature of programming being what it is, there is no
   relationship between the 'size' of the error and the problems
   it causes.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 16:
   When a programmer has a difficult time finding a bug, it is
   because he is looking in the wrong place.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 17:
   Documentation is the castor oil of programming ... the
   managers know it must be good because programmers hate it so
   much.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 18:
   The human mind ordinarily operates at only ten per cent of its
   capacity - the rest is overhead for the operating system.
                   -Anonymous
","
Thoughts on Programming, Number 19:
   We stand at the brink of a new age, an age made possible by the
   revolution that is embodied in the computer. Standing on the
   brink, we could totter either way - to a golden age of liberty
   or a dark age of tyranny, either of which would surpass
   anything the world has ever known.  Perhaps no individual's
   efforts will make any difference in the result, but we must
   never cease trying, for then the result is sure to be tyranny.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 20:
   A ship on the beach is a lighthouse to the sea.
                   -Dutch proverb
","
Thoughts on Programming, Number 21:
   The programmed computer has all the fascination of the pinball
   machine or the jukebox mechanism, carried to the ultimate.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 22:
   The programmer, like the poet, works only slightly removed from
   pure thought-stuff.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 23:
   Designing grand concepts is fun; finding nitty little bugs
   is just work.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 24:
   As soon as one freezes a design, it becomes obsolete in terms
   of its concepts.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 25:
   Good cooking takes time.  If you are made to wait, it is to
   serve you better, and to please you.
                   -Menu of Restaurant Antoine, New Orleans
","
Thoughts on Programming, Number 26:
   All programmers are optimists.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 27:
   This time it will surely run.
                   -Anonymous
   I just found the last bug.
                   -Unanimous
","
Thoughts on Programming, Number 28:
   A large programming effort ... consists of many tasks, some
   chained end-to-end.  The probability that each will go well
   becomes vanishingly small.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 29:
   Cost does indeed vary as the product of the number of men and
   the number of months. Progress does not. Hence the man-month
   as a unit for measuring the size of a job is a dangerous and
   deceptive myth.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 30:
   The bearing of a child takes nine months, no matter how many
   women are assigned.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 31:
   When everything has been seen to work, all integrated, you have
   four more months work to do.
                   -Charles Portman
                   International Computers Limited
","
Thoughts on Programming, Number 32:
   Observe that for the programmer, as for the chef, the urgency
   of the patron may govern the scheduled completion of the task,
   but it cannot govern the actual completion.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 33:
   Brooks Law: Adding manpower to a late software project makes it
   later.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 34:
   The sheer number of minds to be coordinated affects the
   cost of the effort.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 35:
   Conceptual integrity is the most important consideration
   in system design.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 36:
   The purpose of a programming system is to make a computer easy to use.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 37:
   Neither function alone nor simplicity alone defines a good
   design.
                   -The Mythical Man-Month
                    Frederick P. Brooks, Jr.
","
Thoughts on Programming, Number 38:
   Add little to little and there will be a big pile.
                   -Ovid
","
Thoughts on Programming, Number 39:
   He'll sit here and he'll say, 'Do this! Do that!' And nothing
   will happen.
                   - Harry S  Truman
","
Thoughts on Programming, Number 40:
   Never go to sea with two chronometers; take one or three.
                   -Anonymous
","
Thoughts on Programming, Number 41:
   I know it.  I know what needs to be done - but every time I try
   to tackle a technical problem some bloody fool wants me to make
   a decision about trucks - or telephones - or some damn thing.
                   -Robert Heinlein
                   The Man Who Sold the Moon
","
Thoughts on Programming, Number 42:
   The problem was that everybody who was working there, including
   myself, wanted to do really neat stuff but THEY didn't want
   neat stuff, they just wanted a lot of stuff fast.
                   -Rick Baker, make-up artist for King
                   Kong, Star Wars, et. al.
","
Thoughts on Programming, Number 43:
   The generation of random numbers is too important to be left to
   chance.
                   -Robert R. Coveyou
                   Oak Ridge National Laboratory
","
Thoughts on Programming, Number 44:
   It's redundant!  It's redundant!
                   -R. E. Dundant
","
Thoughts on Programming, Number 45:
   I don't know any reason why we couldn't do it, but maybe we can
   think of one.
                   -Mark C. Davison
","
Thoughts on Programming, Number 46:
   Bug?  That's not a bug, that's a feature.
                   -T. John Wendel
","
Thoughts on Programming, Number 47:
   The computer 'Doth make fools of us all'.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 48:
   Any fool without the ability to share a laugh on himself will
   be unable to tolerate programming for long.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 49:
   The programmer's national anthem is 'AAAAAAAAGGGGGGGGHHHHHHHH'.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 50:
   When we finally see the light, we see how once again we have
   fallen into some foolish assumption, some oafish practice, or
   some witless blunder.
                   -The Psychology of Computer Programming,
                    Gerald M. Weinberg
","
Thoughts on Programming, Number 51:
   The computer always has an excuse: the programmer never does.
                   -Mark C. Davison
","
Thoughts on Programming, Number 52:
   The user does not know what he wants until he sees what he gets.
                   -Ed Yourdon
","
Thoughts on Programming, Number 53:
   Completely compatible - things that work together with less
   than $1000 of interfaces and less than 100 man-hours of
   software patches.
                   -Datamazing, 4/1/78
","
Thoughts on Programming, Number 54:
   Stack manipulation - the use of inflatable falsies.
                   -Datamazing, 4/1/78
","
Thoughts on Programming, Number 55:
   Design of both hardware and software must be considered when
   doing the system design.
                   -Proceedings of the IEEE, 2/78, p.167
","
Thoughts on Programming, Number 56:
   The job cannot be done right unless the necessary tools are
   available.
                   -Proceedings of the IEEE, 2/78, p.174
","
Thoughts on Programming, Number 57:
        I hear and I forget.
        I see and I remember.
        I do and I understand.
                   -Confucius
","
Thoughts on Programming, Number 58:
   On a clear disk you can seek forever.
                   -Computerworld button
","
Thoughts on Programming, Number 59:
   I write all my critical routines in assembler, and my comedy
   routines in FORTRAN.
                   -Anonymous
","
Thoughts on Programming, Number 60:
   It is impossible to make anything foolproof because  fools  are
   so ingenious.
                   -Edsel Murphy, dec.
","
Thoughts on Programming, Number 61:
   It seems intuitively clear that the existence of an error in a
   program will not be reflected in the  test  result  unless  the
   program component in error is executed during the test.
                   -J.C. Huang, Program Instrumentation
","
Q's Law:
     No matter what stage of completion one reaches in a North Sea
     oil project, the cost of the remainder of the project remains
     the same.
","
Radar's Fundamental Truth:
     The grass is brown on both sides of the fence.
","
Sander's Rumination:
     Life is a game, the object of which is to discover the
     object of the game.
","
Segal's Law:
     A man with one watch knows what time it is.  A man with
     two watches is never sure.
","
The Law of Selective Gravity:
     An object will fall so as to do the most damage.
","
Jenning's Corollary:
     The chance of the bread falling with the buttered side down
     is directly proportional to the cost of the carpet.
","
Skinner's Constant (Flanagan's Finagling Factor):
     That quantity which, when multiplied by, divided by, added to,
     or subtracted from the answer you get, gives the answer you
     should have gotten.
","
Snafu Equation No. 6:
     Badness comes in waves.
","
The Unspeakable Law:
     As soon as you mention something ...
       - if it's good, it goes away.
       - if it's bad, it happens.
","
Watson's Injunction:
     THINK!
","
Wohl's Riddle:
    Q.     What is so rare as a day in June?
    A.     A day in February, which is 6.7% more rare;
     except in leap year when it is still 3.3% more rare.
                                            -- R. Wohl
","
The Law of Xerox:
     Anything important loses its value soon after being Xeroxed.
","
Zymurgy's First Law of Evolving Systems Dynamics:
     Once you open a can of worms, the only way to recan them
     is to use a larger can.
","
Cole's law:
     Thinly sliced cabbage.
","
Schwartz Says:
     Playing games leads to Mastery!
","
Rob's Retort
     The insult of an enemy is better then the flattery of a friend.
","
Jones' Law:
     The man who can smile when things go wrong...
     has thought of someone he can blame it on.
","
Weinberg's Law:
    If builders built buildings the way programmers wrote programs,
    then the first woodpecker that came along would destroy civilization.
","
RB's Five-thumb Postulate:
     Experience varies directly with the equipment ruined.
","
The James-Watt-oriented Observation:
     Beauty is only skin-deep, but ugly goes clean to the bone.
","
The Illiterati Programus Canto 1:
     A program is a lot like a nose -
     Sometimes it runs and sometimes it blows.
","
Lafayette's Reprisal:
     The squeaky wheel gets replaced.
","
The Illiterati Programus Introduction:
      To get the job you really want, you must:
        1.  Make a business case against it.
        2.  Use irrefutable arguments against it.
      You will then be put in charge of it.
","
The Turing Test:
     A sort of LOVE BOAT for machines.
     If you survive a week of it, you pass.
","
Advanced Systems News Letter
     The nail that sticks up gets hammered down.
                       --Anonymous
","
Fallibility:
     Fallible men design fallible computers.
     A computer program does what you tell it to do, not what you want
     it to do.
","
Rules of Pratt:
 #1  If a severe problem manifests itself, no solution is acceptable
     unless it is involved, expensive, and time consuming
","
Rules of Pratt:
 #2  Sufficient monies to do the job correctly the first time are not
     available, however, ample funds are much easier obtained for
     repeated revisions.
","
Grosch's Law:
 #1  Computing power increases as the square of the cost increases,
     if you want to do it twice as cheap you have to do it four times
     as fast.
","
Grosch's Law:
 #2  Twenty percent of the components account for eighty percent of
     the cost, and so forth.
","
Troutman's Programming Law:
 #1  If a test installation function's perfectly, all subsequent systems
     will malfunction.
","
Troutman's Programming Law:
 #2  Not until a program has been in production for at least six months
     will the most harmful error then be discovered.
","
Troutman's Programming Law:
 #3  Job control cards that cannot be arranged in improper order will be
","
Troutman's Programming Law:
 #4  Interchangeable tapes won't
","
Troutman's Programming Law:
 #5  If the input editor has been  designed to reject all bad input,
     an ingenious idiot will discover a method to get bad data past it.
","
Troutman's Programming Law:
 #6  Machines work, people should think.
","
Golub's Laws of computerdom:
 #1  A carelessly planned project takes three times longer to complete
     than expected; a carefully planned project will take only twice
     as long.
","
Golub's Laws of computerdom:
 #2  The effort required to correct the error increases geometrically
     with time.
","
Golub's Laws of computerdom:
 #3  Project teams detest weekly progress reporting because it so
     vividly manifests their lack of progress.
","
Hunts Law of Suspense:
     If any work has a suspense date on it, that work will be completed
     as close to the suspense date as possible regardless of how far in
     advance it was programmed.
","
Grace's Words:
     What ever happened to "manage machine, lead people"
","
Computers vs People:
     One good reason why computers can do more work than people
     is that they never have to stop and answer the phone.
","
The Programmer's Nemesis:
     Experts theorize that through evolution and inbreeding,
     programmers may become a distinct subspecies of the human race.
","
A Law for the Future:
     If it's not in a computer, it doesn't exist.
","
Hogan's Homily:
     We won't have personal computing until we can get them little
     and talking.,
","
"Wain's Conclusion:
     The only people making money these days are the ones who sell
     computer paper.",
","
"Computer Axiom:
 #1  When putting it into memory, remember where you put it.",
","
"Law of Cybernetic Entomology:
     There's always one more bug.",
","
"Landau's Programming Paradox:
 #1  The best programmer has to be someone",

"Landau's Programming Paradox:
 #2  The more humanlike a computer becomes the less time it spends
     computing and the more time it spends doing more humanlike work.",

"Landau's Programming Paradox:
 #3  A software committee of one is limited by its own horizon and
     will only specify that far.",
"Extended Epstein-Heisenberg Principle\:
   - In a program atmosphere, only two of the three existing
     measurements can be measured simultaneously. The measurements
     are program, time, and resource (\n\).
      - If one knows what the task is, and there is a time limit allowed
        for the completion of the task, then one cannot guess how much
        it will cost
      - If the time and resource (\n\) are clearly defined, then it is
        impossible to know what part of the program will be performed.
      - If you are given a clearly defined program goal and a definite
        amount of money which has been calculated to be necessary for
        the completion of the task, one cannot predict if and when the
        goal will be reached.
      - If one is lucky enough and can accurately define all three
        measurements, then what one deals with is not in the realm
        of programming.",

"Gallois's Revelation:
   If you put tomfoolery in a computer nothing comes out but tomfoolery.
   But this tomfoolery, having passed through a very expensive machine,
   is somehow enobled and none dare criticize it."
*/

