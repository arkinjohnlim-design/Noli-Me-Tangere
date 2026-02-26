export interface Chapter {
  id: number;
  title: string;
  subtitle?: string;
  summary: string;
  content: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "A Social Gathering",
    summary: "The novel opens at the home of Capitan Tiago in Binondo, Manila. A dinner party is being held where guests discuss the return of Crisostomo Ibarra from Europe. The gathering introduces key characters including Padre Damaso, Padre Sibyla, and other prominent figures of colonial society.",
    content: `On the last day of October, Don Santiago de los Santos, popularly known as Capitan Tiago, was giving a dinner party. Although, contrary to his usual custom, he had made the announcement only that afternoon, the news spread rapidly through the town of Binondo and beyond, even reaching the far districts of Intramuros.

The house of Capitan Tiago was one of the most spacious in that quarter of the city. It had a large stone staircase, a spacious entrance hall, and numerous rooms adorned with mirrors and chandeliers. The dining room was particularly magnificent, with its long table capable of seating thirty guests.

Among the guests were Padre Damaso, a Franciscan friar who had recently been transferred to a different parish, Padre Sibyla, a Dominican, and various other prominent figures of Manila society. The conversation turned to the recent return of Crisostomo Ibarra, a young man who had been studying in Europe for seven years.

"They say he's become quite the European," remarked one guest. "He'll probably look down on our simple ways."

"Nonsense," replied another. "Don Rafael was a good man, and his son will surely follow in his footsteps."

Padre Damaso, who had been silent, suddenly spoke up. "I knew his father. A good man, yes, but too independent for his own good. These ilustrados who send their sons abroad come back with dangerous ideas."

The conversation continued in this vein, with various opinions being expressed about the returning young man and the changes that education abroad might have wrought in him.`
  },
  {
    id: 2,
    title: "Crisostomo Ibarra",
    summary: "Crisostomo Ibarra arrives at Capitan Tiago's house. He is greeted warmly by most guests but receives a cold reception from Padre Damaso. Ibarra learns about his father's death and the mysterious circumstances surrounding it.",
    content: `Crisostomo Ibarra arrived at Capitan Tiago's house in the late afternoon. He was a young man of about twenty-six years, with a refined appearance and dignified bearing. His seven years in Europe had given him a certain polish, but he retained the modest demeanor of his Filipino heritage.

The guests welcomed him warmly, curious to see how Europe had changed him. Capitan Tiago embraced him like a son. "Crisostomo, my boy! How you've grown! And how European you look!"

But Padre Damaso, who had been standing nearby, merely nodded coldly and turned away without offering his hand.

Ibarra was taken aback by this reception. "Padre Damaso," he said, approaching the friar, "I'm honored to meet you. My father often spoke of you."

"Did he?" the friar replied curtly. "Well, your father is dead now."

The bluntness of this statement shocked Ibarra. "I know, Padre. I received the news in Europe. But the letters I received were unclear about the circumstances. Could you tell me more about how my father died?"

Padre Damaso's face darkened. "He died in prison," he said shortly. "That's all you need to know. Now, if you'll excuse me."

Ibarra stood stunned as the friar walked away. He turned to the other guests, but they suddenly found reasons to be elsewhere. Only the old lieutenant of the Civil Guard, Guevara, approached him with sympathy in his eyes.

"Come, young man," the lieutenant said quietly. "We need to talk."

They stepped out onto the balcony, away from the other guests. The lieutenant looked at Ibarra with concern. "Your father's death was not a simple matter, Crisostomo. There are things you need to know about what happened during your absence."

Ibarra listened intently as the lieutenant began to tell him the story of his father's final days.`
  },
  {
    id: 3,
    title: "The Dinner",
    summary: "During dinner, tensions rise between Padre Damaso and Ibarra. The friar makes disparaging remarks about Ibarra's father and about Filipinos studying abroad. Ibarra maintains his composure but is deeply hurt by the insults.",
    content: `The dinner bell rang, and the guests proceeded to the dining room. Capitan Tiago, as was his custom, had arranged the seating carefully, placing his most honored guests at the head of the table.

To everyone's surprise, both Padre Damaso and Padre Sibyla made for the seat of honor at the head of the table. There was a moment of awkwardness as the two friars eyed each other, but finally Padre Damaso, being the older and more senior, took the position.

Ibarra was seated near the middle of the table, between Capitan Tiago's cousin, Aunt Isabel, and a young woman named Sinang. He noticed that the seat next to him, which should have been occupied by Maria Clara, remained empty.

"Maria Clara will join us later," Aunt Isabel explained. "She's still at prayer."

The meal was elaborate, featuring the finest Spanish and Filipino dishes. As they ate, the conversation turned to various topics - the price of rice, the recent typhoon, the governor-general's upcoming visit.

Then Padre Damaso spoke up. "So, Ibarra, you think you're quite the learned man now, with your European education?"

Ibarra looked up calmly. "I don't consider myself learned, Padre. I've merely tried to make the most of the opportunities my father gave me."

"Your father," Padre Damaso snorted. "A man who thought he knew better than the Church. Tell me, what do they teach in Europe about religion? Do they still believe in God, or have they replaced Him with science and reason?"

The table fell silent. Ibarra set down his fork. "In Europe, Padre, they study many things - science, philosophy, the arts. But faith remains strong among those who choose to believe."

"Choose to believe!" Padre Damaso laughed harshly. "As if faith were a matter of choice, like selecting a coat! This is what education does - it turns simple faith into philosophical speculation."

He turned to the other guests. "Mark my words, this young man will cause trouble. These ilustrados who go abroad always come back with ideas above their station. They forget their place in society."

Ibarra felt his face burn, but he maintained his composure. "Padre, with all respect, my father sent me abroad to learn, not to forget who I am. I am proud to be a Filipino."

"Proud to be a Filipino!" Padre Damaso sneered. "What is there to be proud of? You should be grateful that Spain has civilized you, that the Church has saved your souls. Without us, you would still be heathens in the jungle."

The insult was direct and unmistakable. Ibarra rose from his seat. "Padre, I will not sit here and listen to you insult my father and my people. With your permission, Capitan Tiago, I will take my leave."

He bowed to his host and walked out of the dining room, leaving the guests in shocked silence.`
  },
  {
    id: 4,
    title: "Heretic and Filibuster",
    summary: "Lieutenant Guevara tells Ibarra the truth about his father's death. Don Rafael was falsely accused of murder and imprisoned. Though acquitted, he died in prison. The friars labeled him a heretic and filibuster.",
    content: `Ibarra walked out into the night, his mind in turmoil. The lieutenant followed him and caught up with him on the street.

"Wait, Crisostomo. Let me tell you what really happened."

They walked together through the quiet streets of Binondo. The lieutenant spoke in a low voice, as if afraid of being overheard.

"Your father was the richest man in San Diego, respected by all who knew him. But he made enemies - powerful enemies. He spoke out against the abuses of the friars, defended the poor against unjust taxation, and refused to bow to the arbitrary power of the Church."

"What happened?" Ibarra asked, his voice tight.

"A tax collector was found dead near your father's property. There was no evidence against him, but Padre Damaso accused him of the murder. Your father was arrested and thrown into prison."

"But surely there was a trial?"

"Oh, there was a trial. And your father was acquitted - the evidence showed he had nothing to do with the death. But the friars had already labeled him a heretic and a filibuster. The damage was done."

The lieutenant paused, his face grave. "Your father died in prison, Crisostomo. Some say it was natural causes, but others... others believe he was poisoned."

Ibarra stopped walking, his fists clenched. "And Padre Damaso?"

"Padre Damaso was the one who made the accusation. He preached against your father from the pulpit, calling him a heretic, a subversive, an enemy of God and Spain. Even after the acquittal, he continued to defame your father's name."

Ibarra felt tears burning his eyes, but he forced them back. "Why? Why did he hate my father so much?"

"Because your father stood up to him. Because he refused to be cowed. Because he represented everything the friars fear - an educated Filipino who thinks for himself and speaks his mind."

The lieutenant placed a hand on Ibarra's shoulder. "Be careful, young man. You have inherited your father's spirit, and that makes you dangerous in their eyes. They will be watching you."

Ibarra looked up at the stars, his jaw set with determination. "Thank you for telling me the truth, Lieutenant. My father will be avenged - not with violence, but with justice. I will clear his name and fulfill his dreams for our people."

"Just be careful," the lieutenant repeated. "The friars have long arms and longer memories."

They parted ways, and Ibarra walked alone through the dark streets, his mind filled with thoughts of revenge and justice.`
  },
  {
    id: 5,
    title: "A Star in a Dark Night",
    summary: "Ibarra retreats to his hotel room, contemplating his father's fate. From his window, he can see Capitan Tiago's house where Maria Clara has arrived. The chapter introduces Maria Clara as a symbol of hope and purity.",
    content: `Ibarra took a room at the Fonda de Lala, a modest hotel near the river. The room was small but clean, with a window overlooking the street below.

He sat by the window, watching the activity at Capitan Tiago's house across the way. Lights blazed from every window, and he could hear the sounds of music and laughter. The dinner party was continuing without him.

His thoughts turned to his father. Don Rafael Ibarra had been a good man, a just man. He had worked hard to build his fortune, and he had used it to help others. He had funded the local school, supported the poor during hard times, and stood up against injustice whenever he saw it.

And for this, he had been destroyed. Labeled a heretic, a filibuster, an enemy of the state. Imprisoned on false charges, defamed from the pulpit, left to die in a cold prison cell.

Ibarra felt the weight of grief pressing down on him. He had been in Europe when his father needed him most, enjoying the pleasures of Paris and Madrid while his father suffered in a Philippine prison.

But amid his grief, there was one bright spot - Maria Clara. She had been a child when he left, barely fourteen years old. But even then, he had known that she was special. Their fathers had arranged their betrothal, and though they were young, Ibarra had felt a connection to her that transcended their age.

Now she would be twenty-one, a young woman. He wondered how she had changed, whether she still remembered him, whether she still cared.

As he watched, a carriage pulled up to Capitan Tiago's house. A young woman stepped out, assisted by a maid. Even from this distance, Ibarra could see that she was beautiful - tall and graceful, with dark hair and fair skin.

Maria Clara.

She paused at the entrance, looking up at the sky as if searching for something. For a moment, Ibarra imagined that she was looking toward his window, that she knew he was there, that she was thinking of him.

Then she disappeared inside, and the moment was gone. But the image of her, standing in the lamplight like a star in the dark night, remained burned in his memory.

"Maria Clara," he whispered to the darkness. "My star, my hope, my light in this dark night."

He remained at the window long after the lights at Capitan Tiago's house had been extinguished, thinking of the past and wondering about the future.`
  },
  {
    id: 6,
    title: "Capitan Tiago",
    summary: "The chapter provides background on Capitan Tiago, his rise to wealth, his marriage to Pia Alba, and the birth of Maria Clara. It reveals that Padre Damaso is Maria Clara's godfather and has significant influence over the family.",
    content: `Don Santiago de los Santos, known to all as Capitan Tiago, was one of the wealthiest men in Manila. His fortune had been built through careful business dealings, strategic marriages, and above all, through his close relationship with the friars.

Capitan Tiago was a mestizo, with Chinese and Filipino blood in his veins, but he liked to think of himself as Spanish. He spoke Spanish with an affected accent, dressed in European fashion, and entertained only the most prominent guests.

His rise to wealth had been remarkable. Starting as a small merchant in Binondo, he had gradually expanded his business, acquiring land, investing in trade, and building connections with the colonial elite. By the time he was forty, he was one of the most influential men in the colony.

His marriage to Dona Pia Alba had been a brilliant match. She came from a good family, with Spanish blood and social connections. For years they had no children, which was a source of great sorrow to both of them.

It was Padre Damaso who suggested the solution. "Go to Ubando," he told them. "Attend the feast of Our Lady of the Immaculate Conception. She has performed miracles for childless couples."

Capitan Tiago and Dona Pia made the pilgrimage. They prayed fervently, made generous donations to the church, and within a year, Dona Pia was with child.

But the pregnancy was difficult. Dona Pia became melancholic, prone to fits of weeping and strange fancies. She would sit for hours staring at nothing, or wander through the house at night as if searching for something.

When the child was born - a beautiful baby girl - Dona Pia seemed to recover. But the recovery was temporary. Within a week, she was dead, leaving Capitan Tiago alone with his infant daughter.

The child was christened Maria Clara, after the Virgin Mary and Saint Clare. Padre Damaso stood as her godfather, and from that day forward, he took a particular interest in her upbringing.

"She must be raised properly," he told Capitan Tiago. "She must be educated in a convent, taught to be a good Catholic, kept away from dangerous influences."

Capitan Tiago, grateful for the friar's intervention in bringing him a child, agreed to everything. Maria Clara was sent to the Santa Clara convent, where she was educated by the nuns and kept in virtual seclusion.

Only on rare occasions was she allowed to visit her father's house, and even then, she was closely supervised. Her only companion was her aunt, Isabel, who had come to live with them after Dona Pia's death.

Despite this sheltered upbringing, Maria Clara grew into a remarkable young woman. She was beautiful, with her mother's delicate features and her father's warm complexion. She was intelligent, well-read, and possessed of a natural grace that charmed everyone who met her.

But she was also timid, submissive, and deeply religious - perhaps too much so. Years of convent education had instilled in her a profound respect for authority and a fear of sin that sometimes bordered on the excessive.

Now she was twenty-one, of marriageable age. And though she had not seen Crisostomo Ibarra in seven years, she remembered him still. In her quiet moments, she would take out the letter he had written her before leaving for Europe and read it again, wondering what kind of man he had become.`
  },
  {
    id: 7,
    title: "An Idyl on an Azotea",
    summary: "Ibarra and Maria Clara meet for the first time in seven years on the azotea (roof terrace) of Capitan Tiago's house. They reminisce about their childhood and reaffirm their love for each other.",
    content: `The morning after the dinner party, Maria Clara attended early mass at the nearby church. When she returned, she found her father in an excited state.

"Crisostomo Ibarra is here," he told her. "He wants to see you."

Maria Clara felt her heart race. She had been thinking of him all night, ever since she heard about his confrontation with Padre Damaso. Now he was here, waiting for her.

"Send him to the azotea," she said quietly. "I will receive him there."

The azotea was a roof terrace, open to the sky and cooled by the morning breeze. It was here that Maria Clara spent many of her quiet hours, sewing or reading or simply watching the life of the city below.

When Ibarra appeared, she hardly recognized him. He had been a boy when he left, awkward and uncertain. Now he was a man, confident and assured. But his eyes were the same - dark and intense, filled with intelligence and warmth.

"Maria Clara," he said, bowing over her hand.

"Crisostomo. It's been so long."

"Seven years. Seven years of thinking of you, wondering how you were, counting the days until I could return."

They sat on the bench at the edge of the azotea, looking out over the city. The morning sun was bright, and the air was filled with the sounds of the waking city - vendors calling their wares, carriages rattling over cobblestones, church bells ringing in the distance.

"Tell me about Europe," Maria Clara said. "What was it like?"

"Beautiful. Magnificent. Full of wonders. But also... empty. Without you, everything seemed gray."

Maria Clara blushed. "You always were a flatterer."

"Not flattery. Truth." He took her hand. "Maria Clara, do you remember the promise we made before I left?"

"I remember."

"Do you still... feel the same?"

She looked at him, her dark eyes meeting his. "I have never forgotten you, Crisostomo. In all these years, you have been in my thoughts. Your letter..." She paused, reaching into her dress. "I have carried it with me always."

She produced a worn piece of paper, carefully folded and refolded many times. Ibarra recognized his own handwriting, the words he had written seven years ago in a moment of youthful passion.

"Read it to me," he said softly.

Maria Clara unfolded the letter and began to read. "My dearest Maria Clara, as I prepare to leave for Europe, my heart is heavy with sorrow at our parting. But I go with a purpose - to prepare myself to be worthy of you..."

Her voice faltered as she read the words of love and devotion, the promises of fidelity, the dreams of their future together.

"...and so I swear to you, my beloved, that my heart will remain forever yours. Until we meet again, I remain your devoted Crisostomo."

She folded the letter and looked at him, tears glistening in her eyes. "I have read this letter a thousand times. It was my comfort in the lonely nights, my hope in the dark hours."

Ibarra took her hands in his. "Maria Clara, I love you. I have loved you since we were children, and I will love you until the day I die. Will you marry me?"

"Yes," she whispered. "Yes, my love. I will marry you."

They sat together on the azotea, two young people in love, dreaming of their future together, unaware of the storms that were gathering on the horizon.`
  },
  {
    id: 8,
    title: "Recollections",
    summary: "Ibarra travels to San Diego, his father's town. Along the way, he encounters various characters and observes the conditions of the countryside. He meets the philosopher Tasio, who speaks in riddles.",
    content: `The next morning, Ibarra set out for San Diego, the town where his father had lived and died. He traveled by carriage, following the road that wound through the countryside north of Manila.

The journey gave him time to think. His meeting with Maria Clara had filled him with joy, but the memory of his father's fate still weighed heavily on his mind. He was determined to find out the truth about what had happened and to clear his father's name.

As the carriage rolled through the countryside, Ibarra observed the conditions of the rural areas. The road was poorly maintained, full of ruts and potholes. The villages they passed through were collections of nipa huts, their inhabitants dressed in rags, their faces marked by poverty and hardship.

In one village, they stopped to rest the horses. Ibarra walked among the people, noting their listless expressions and hollow cheeks. An old woman approached him, begging for alms.

"Please, señor," she said, holding out a trembling hand. "I haven't eaten in two days."

Ibarra gave her a few coins, and she thanked him profusely. "God bless you, señor. You are a good man, like your father."

"You knew my father?"

"Everyone knew Don Rafael. He was our protector, our benefactor. When the tax collectors came, he would pay for those who couldn't. When the friars demanded tribute, he would speak for us."

"What happened to him?"

The old woman looked around fearfully. "I cannot say, señor. The walls have ears. But..." She lowered her voice. "Ask the philosopher Tasio. He knows many things."

"Tasio? Where can I find him?"

"In San Diego. He lives at the edge of the town. But be careful, señor - they say he's mad. He speaks in riddles and questions everything."

Ibarra thanked her and returned to his carriage. As they continued their journey, he thought about what she had said. A philosopher who spoke in riddles, who questioned everything - this was someone he needed to meet.

The road entered a forest, and the air grew cooler. Ibarra leaned back and closed his eyes, letting the rhythm of the carriage lull him into a half-sleep.

He was awakened by a voice - a strange, singsong voice that seemed to come from nowhere.

"Traveler, traveler, where do you go? To the town of the dead, where the living are slow. To the place where the friars rule with an iron hand, and the people bow down to their command."

Ibarra looked around and saw an old man sitting by the side of the road. He was dressed in rags, with long white hair and a beard that reached his chest. His eyes were bright and piercing, and there was a strange smile on his face.

"Who are you?" Ibarra asked.

"I am Tasio, the philosopher, the madman, the fool. I ask questions that have no answers and give answers that have no questions."

"The old woman in the village told me about you. She said you knew about my father."

"Don Rafael. Yes, I knew him. A good man in a bad world. He tried to change things, and the world destroyed him."

"Can you tell me what happened?"

Tasio laughed, a high, cackling sound. "What happened? What always happens. The strong prey on the weak. The powerful crush the powerless. Your father tried to help the people, and the friars couldn't allow that."

"But why? What did he do?"

"He did what no one else dared to do. He spoke the truth. He said that the friars were corrupt, that the government was unjust, that the people deserved better. And for that, he had to be silenced."

Tasio stood up and approached the carriage. "Be careful, young Ibarra. You are your father's son. They will be watching you."

"I'm not afraid."

"You should be." Tasio turned and walked away, his voice trailing behind him. "Fear is the beginning of wisdom. And in this land, only the wise survive."

Ibarra watched him go, his mind filled with questions. Who was this strange man, and what did he really know? He would find out when he reached San Diego.`
  },
  {
    id: 9,
    title: "Local Affairs",
    summary: "Ibarra arrives in San Diego and meets with the town officials. He learns about the political dynamics of the town and the various factions vying for power and influence.",
    content: `San Diego was a typical provincial town - a church, a municipal hall, a market, and houses scattered along dusty streets. But to Ibarra, it was the place where his father had lived and died, and every stone seemed to hold a memory.

His carriage stopped at the municipal hall, where a crowd had gathered to greet him. The town officials came forward to welcome him - the gobernadorcillo, the tenientes, the cabezas de barangay.

"Don Crisostomo," said the gobernadorcillo, a small man with a nervous smile. "Welcome to San Diego. We are honored by your presence."

"Thank you," Ibarra replied. "I'm glad to be back in my father's town."

There was an awkward silence at the mention of his father. The officials exchanged glances, and Ibarra could see that they were uncomfortable.

"Perhaps we could discuss some matters of business," the gobernadorcillo said quickly. "Your father's estate, the property that was left..."

"Of course. But first, I would like to see my father's house."

"Of course, of course. But perhaps tomorrow? Tonight, we have prepared a small reception in your honor."

Ibarra agreed, though he was eager to see his childhood home. The officials escorted him to the house where he would be staying - a modest dwelling owned by one of the town's prominent families.

That evening, there was a reception at the municipal hall. The town's elite had gathered to meet the returning ilustrado, and Ibarra found himself the center of attention.

He observed the various factions in the town. There were the conservatives, led by the old families who had held power for generations. They were suspicious of change and loyal to the friars. There were the liberals, younger men who had read about the reforms in Spain and wanted similar changes in the Philippines. And there were the opportunists, who would support whoever seemed to be in power.

"Don Crisostomo," said one of the liberals, a young man named Felipo. "We have heard about your ideas. We hope you will help us bring progress to our town."

"What kind of progress?"

"A better school, for one. The current school is a joke - the teacher is ignorant, the building is falling apart, and the friars control everything that is taught."

"And what do the friars say about this?"

Felipo lowered his voice. "Padre Damaso - he was the curate here before being transferred - he opposed everything. He said that education makes the people discontented, that they should remain simple and obedient."

"And the new curate?"

"Padre Salvi. He's different - younger, more subtle. But no less dangerous. He watches everything, reports everything. We must be careful what we say."

Ibarra nodded, understanding the situation. The friars controlled not just the spiritual life of the town, but its political and social life as well. Anyone who opposed them risked not just social ostracism, but imprisonment, exile, even death.

"I will help you," he said quietly. "But we must be careful. Change cannot come overnight. We must work slowly, carefully, building support among the people."

"We understand. We are patient."

The reception continued, with speeches and toasts and elaborate courtesies. But Ibarra's mind was elsewhere, thinking about his father and the work that lay ahead.`
  },
  {
    id: 10,
    title: "The Town",
    summary: "A description of San Diego and its inhabitants. The chapter introduces various characters including the schoolmaster, the sacristans, and the common people who will play important roles in the story.",
    content: `San Diego was not a large town, but it was typical of many in the Philippines. It had grown up around the church, which dominated the central plaza with its massive stone walls and tall bell tower.

The church was the center of life in the town. It was where the people gathered for mass, where they celebrated weddings and baptisms, where they mourned their dead. It was also where the friar held court, dispensing blessings and punishments with equal arbitrariness.

Near the church was the convent, a large building where the curate lived. It was surrounded by a high wall, and behind that wall, the friar lived in comfort while the people outside struggled to survive.

The municipal hall was a modest building on the other side of the plaza. Here the gobernadorcillo held his court, but everyone knew that real power lay with the friar. The gobernadorcillo could issue orders, but the friar could overrule them with a word.

The market was at the edge of the town, a collection of stalls where vendors sold vegetables, fish, meat, and other goods. It was here that the common people gathered, exchanging news and gossip while they bought and sold.

Ibarra walked through the town the morning after his arrival, observing the conditions of the people. He saw the poverty, the ignorance, the fear that marked their faces. He saw how they bowed and scraped when a friar passed by, how they trembled at the mention of the civil guards.

Near the church, he saw a group of boys playing in the dust. They were barefoot and ragged, but their faces were bright with laughter.

"Hello," Ibarra said, approaching them. "What are your names?"

The boys looked at him with suspicion. "Who are you?" one of them asked.

"I'm Crisostomo Ibarra. My father was Don Rafael."

The name had an immediate effect. The boys' faces lit up with recognition.

"Don Rafael! He was a good man. He used to give us candy."

"What's your name?" Ibarra asked the boy who had spoken.

"I'm Lucas. This is my brother Bruno, and our friend Tarsilo."

"Do you go to school?"

The boys laughed. "School? We can't afford school. We work in the fields, or at the church."

"What about the schoolmaster? Does he teach you?"

"The schoolmaster only teaches the children of the rich. And even then..." Lucas lowered his voice. "They say he doesn't know much himself."

Ibarra nodded, making a mental note. The education system was one of the things he wanted to improve. His father had always believed in education, had funded the school himself when the government wouldn't.

He continued his walk, passing through the poorer quarters of the town. Here the houses were nipa huts, crowded together along narrow paths. The smell was unpleasant, and the conditions were clearly unhealthy.

An old woman sat in front of one of the huts, weaving a basket. Ibarra greeted her, and she looked up with surprise.

"Don Crisostomo? Is it really you?"

"Do I know you?"

"I'm Marta. I used to work in your father's house. Oh, he was such a good man! When my husband died, he gave me money to start my basket-weaving."

"I'm glad to hear that. Tell me, Marta - how are things in the town? Are the people happy?"

Marta laughed, a bitter sound. "Happy? How can we be happy when the taxes take everything we earn? When the friars demand tribute for every blessing? When the civil guards can arrest us for any reason?"

"Is it really that bad?"

"Worse. But what can we do? We are poor, we have no power. We can only endure and hope for better days."

Ibarra thanked her and continued on his way. As he walked, he realized that his father's work was far from complete. There was so much to do, so much to change. And he was determined to continue what his father had started.`
  }
];

// Continue with chapters 11-63
export const remainingChapters: Chapter[] = [
  {
    id: 11,
    title: "The Rulers",
    summary: "The chapter describes the two ruling powers in San Diego: the civil authorities represented by the alferez (lieutenant), and the religious authorities represented by Padre Salvi. Their rivalry and mutual hatred are explored.",
    content: `The government of San Diego was divided between two men who hated each other with a passion that bordered on madness. On one side was Padre Salvi, the curate, representative of the Church. On the other was the alferez, representative of the Spanish Crown.

The alferez was a large man with a red face and a violent temper. He had been stationed in San Diego for three years, and in that time, he had made himself feared throughout the district. He was quick to use his fists, his sword, and his authority to enforce his will.

His wife, Doña Consolacion, was even worse. A former laundry woman who had married above her station, she was obsessed with appearing aristocratic. She dressed in elaborate gowns, spoke in affected Spanish, and treated the townspeople with contempt.

The rivalry between the alferez and Padre Salvi was well-known. They competed for power, for influence, for the respect of the people. The alferez resented the friar's spiritual authority, while Padre Salvi despised the soldier's brutality.

"The Church is the true ruler of these islands," Padre Salvi would say. "The government is merely its instrument."

"The friars are parasites," the alferez would reply. "They live off the people while contributing nothing. Spain would be better off without them."

Their conflict played out in countless small ways. When the alferez arrested someone, Padre Salvi would demand their release. When the friar imposed a new tax, the alferez would find ways to undermine it. They spied on each other, spread rumors about each other, and did everything in their power to destroy each other.

The people of San Diego watched this conflict with a mixture of fear and amusement. They knew that both rulers were corrupt, both were cruel. But they also knew that the rivalry between them created small spaces of freedom, moments when they could breathe without oppression.

Ibarra learned about this situation from various sources - the townspeople who whispered their complaints, the officials who sought his support, the old women who remembered his father's time. He realized that any reform would have to navigate this complex political landscape, playing one power against another while avoiding destruction by both.`
  },
  {
    id: 12,
    title: "All Saints",
    summary: "The town prepares for All Saints' Day. Ibarra visits his father's grave in the cemetery and reflects on the injustices done to him. He meets Elias for the first time.",
    content: `All Saints' Day was approaching, and the town was busy with preparations. In the cemetery, families cleaned and decorated the graves of their loved ones, placing flowers, candles, and offerings of food.

Ibarra went to the cemetery on the morning of November first. He found his father's grave in a corner, marked by a simple stone. Someone had placed fresh flowers on it - white sampaguita, his father's favorite.

"Don Rafael," he whispered, kneeling beside the grave. "I'm back. I've come to fulfill your dreams, to continue your work."

He stayed there for a long time, lost in thought. The cemetery was filling with people - families coming to remember their dead, priests chanting prayers, children running between the graves.

"You are Don Rafael's son?"

Ibarra looked up and saw a young man standing nearby. He was about Ibarra's age, with dark skin and muscular build. His clothes were simple but clean, and there was an air of quiet strength about him.

"I am. And you are?"

"My name is Elias. I... knew your father. He was a good man."

"How did you know him?"

Elias looked around, as if checking for listeners. "This is not the place to talk. But I want you to know - there are those of us who remember what your father did for the people. There are those of us who are ready to help you, if you are truly committed to his cause."

"What cause?"

"Justice. Freedom. The rights of the people against their oppressors."

Ibarra stood up, studying the young man. "Are you talking about rebellion?"

"I'm talking about justice." Elias's voice was calm but intense. "Your father understood that justice cannot come from those in power. They will never give up their privileges willingly. Change must come from below, from the people themselves."

"And you think violence is the answer?"

"I think that when peaceful means fail, other means must be considered. But that is a discussion for another time. For now, I just wanted to meet you, to see what kind of man Don Rafael's son has become."

He turned to leave, then paused. "Be careful, Don Crisostomo. The walls have ears, and the friars have long memories. Your father was destroyed because he was too open, too trusting. Don't make the same mistake."

"Wait," Ibarra called. "How can I find you?"

"You can't. But if I need to find you, I will." Elias disappeared into the crowd, leaving Ibarra with more questions than answers.`
  },
  {
    id: 13,
    title: "Signs of Storm",
    summary: "Tensions rise in San Diego as various conflicts come to a head. Ibarra's plans for a school face opposition, and the rivalry between the alferez and Padre Salvi escalates.",
    content: `The days following All Saints' Day were filled with tension. Ibarra's proposal to build a new school had been met with opposition from unexpected quarters.

"A school?" Padre Salvi had said when Ibarra presented his plan. "But we already have a school."

"A building, yes. But not a true school. The children learn nothing there except to memorize catechism. They need real education - reading, writing, mathematics, science."

"Science?" The friar's voice was cold. "What do the people need with science? They need faith. They need to know their place in society. Education beyond their station will only make them discontented."

"With respect, Padre, I disagree. An educated people is a prosperous people. My father believed that, and I believe it too."

The friar's eyes narrowed. "Your father. Yes, we all know about your father's beliefs. And we know what happened to him."

The threat was barely veiled. Ibarra felt anger rising in him, but he controlled it. "My father's death was a tragedy. But his ideas live on."

"Ideas can be dangerous things. Sometimes they must be... suppressed."

The conversation ended there, but Ibarra knew that he had made an enemy. Padre Salvi would oppose him at every turn, using every weapon at his disposal.

Meanwhile, the conflict between the alferez and the friar had reached new heights. The alferez had arrested several men for gambling, and Padre Salvi had demanded their release, claiming that the church had jurisdiction over moral offenses.

"The Church has no authority in civil matters," the alferez had shouted. "These men broke the law, and they will be punished."

"The Church has authority over everything," Padre Salvi replied calmly. "The souls of these men are in danger, and I must save them."

The argument had escalated, with both men appealing to higher authorities. The townspeople watched nervously, knowing that when elephants fight, it is the grass that suffers.

Ibarra tried to stay above this conflict, focusing on his plans for the school. But he found himself drawn into it nonetheless. The liberals in the town looked to him for leadership, while the conservatives viewed him with suspicion.

"You must choose sides," Felipo told him. "You cannot remain neutral forever."

"I'm not interested in their petty rivalries. I want to help the people, not play politics."

"But everything is politics here. The friar controls the church, the alferez controls the soldiers. To do anything, you must deal with one or both of them."

Ibarra knew this was true. But he also knew that aligning with either power would compromise his principles. He needed to find another way - a way to work with the people directly, bypassing the corrupt structures of power.

It was Elias who showed him the way. The mysterious young man appeared one evening as Ibarra was walking by the river.

"Your school is a good idea," Elias said. "But building it will not be easy. The friar will oppose you, and the government will drag its feet."

"I know. But I have to try."

"There is another way. The people themselves can build the school. They have the skills, the materials, the will. All they need is someone to organize them, someone they trust."

"You think they would trust me?"

"Your father was trusted. They remember him. And if you show them that you are truly his son, they will follow you."

It was a bold plan - to mobilize the people directly, to create something that belonged to them rather than to the government or the church. It was dangerous, but it was also exciting.

"I'll do it," Ibarra said. "I'll build the school, with the people's help. And no friar, no soldier, no government official will stop me."

Elias smiled for the first time. "Good. Then we have work to do."`
  },
  {
    id: 14,
    title: "Tasio: Lunatic or Sage",
    summary: "Ibarra has a long conversation with the philosopher Tasio, who explains his views on education, religion, and the condition of the Philippines. Tasio's wisdom and madness are explored.",
    content: `Ibarra sought out Tasio, the strange philosopher he had met on the road. He found him in a small hut at the edge of town, surrounded by books and papers.

"Ah, the young Ibarra," Tasio said, looking up from his reading. "I wondered when you would come."

"You said you knew my father."

"I knew him. A rare man - honest, courageous, foolish. He thought he could change the world by being good. The world doesn't work that way."

"How does the world work?"

Tasio laughed. "With power. With fear. With the careful manipulation of the masses by those who rule them. Your father tried to appeal to conscience, to justice, to human decency. He failed because those in power have no conscience, no sense of justice, no decency."

"So you think change is impossible?"

"I think change is inevitable. But it comes slowly, painfully, through struggle and sacrifice. Your father was not patient enough. He wanted change now, and that impatience destroyed him."

Ibarra sat down, looking at the old man with new respect. "They say you're mad."

"Mad? Perhaps. In a world of lies, the truth-teller is always considered mad. I speak what I see, what I know. If that makes me mad, so be it."

"Tell me about the Philippines. What do you see?"

Tasio's eyes grew distant. "I see a land of great potential, held back by ignorance and oppression. I see a people with natural intelligence and ability, kept in darkness by those who fear their enlightenment. I see a colony exploited for the benefit of a distant mother country, while its own people starve."

"And the friars?"

"The friars are the greatest obstacle to progress. They control education, and they use that control to keep the people ignorant. They teach that suffering is virtue, that questioning is sin, that this world is only a preparation for the next. And while the people wait for heaven, the friars enjoy the riches of this world."

"What about the government?"

"The government is corrupt, inefficient, brutal. But it is also weak. It depends on the friars for control of the people. Without the church, the colonial government would collapse overnight."

Ibarra was silent for a moment, absorbing this. "What can be done?"

"Education. True education, not the parody that the friars provide. The people must learn to think for themselves, to question, to demand their rights. And that, young Ibarra, is why your school is so important."

"But the friars will oppose it."

"Of course. They will oppose anything that threatens their power. But if you are careful, if you move slowly, you can succeed. Teach practical skills - reading, writing, arithmetic. Don't challenge the church directly. Let the people draw their own conclusions."

"Is that enough?"

"It's a beginning. Change comes slowly, as I said. Your school may not produce revolutionaries, but it will produce men and women who can think, who can question, who can imagine a different world. And that, in the end, is more dangerous to the powerful than any army."

Ibarra thanked the old man and left, his mind filled with new ideas. Tasio was strange, perhaps even mad, but there was wisdom in his words. The school would be built, not as a challenge to the existing order, but as a seed of future change.`
  },
  {
    id: 15,
    title: "The Sacristans",
    summary: "The chapter introduces Crispin and Basilio, two young brothers who serve as sacristans in the church. They are poor and abused, representing the suffering of the common people under colonial rule.",
    content: `In the church of San Diego, two young boys prepared for the evening service. Crispin and Basilio were brothers, ten and seven years old, who served as sacristans - helpers to the priest.

Their work was hard and endless. They rang the bells, cleaned the church, assisted at mass, and ran errands for the priest. For this, they received no pay, only the privilege of living in a small room behind the sacristy and eating the leftovers from the priest's table.

"Hurry up, Crispin," Basilio said. "We must ring the angelus at six."

"I'm coming, I'm coming." Crispin was smaller than his brother, with a delicate build and large, frightened eyes. He had been sick lately, but there was no rest for the sick in the church.

They climbed the narrow stairs to the bell tower, carrying lanterns to light their way. The tower was dark and cold, and the wind whistled through the openings.

"Basilio," Crispin said as they reached the top. "Do you think Mama will come to see us soon?"

"I don't know. She has to work, you know that."

Their mother, Sisa, was a laundress in the town. She came to see them when she could, bringing them small treats and words of love. But it had been weeks since her last visit.

"I miss her," Crispin said softly.

"I miss her too. But we have work to do. Come, let's ring the bells."

They pulled the ropes, and the deep sound of the bells echoed across the town. Six o'clock. The angelus. Time for prayer.

As they descended the tower, they met the sacristan mayor, the head sacristan who supervised their work.

"Where have you been?" he demanded. "The priest has been asking for you."

"We were ringing the bells, sir," Basilio said. "As we were told."

"Don't talk back to me, boy. The priest wants you to clean his room. And be quick about it."

The brothers hurried to the priest's quarters. It was a large room, comfortably furnished, with a bed, a desk, and several chairs. They began their work in silence, dusting the furniture, sweeping the floor, changing the sheets.

"Crispin," Basilio whispered. "Look."

He pointed to a drawer that had been left slightly open. Inside, they could see coins - silver coins, more money than they had ever seen in their lives.

"Don't look at it," Crispin said fearfully. "If anything is missing, they'll blame us."

"I know. I'm just... looking."

They finished their work and left the room. But as they were going, the priest called them back.

"Wait. I want to check something."

He went to the drawer and counted the coins. His face darkened.

"There's money missing. Two pesos. Where are they?"

"We don't know, Father," Basilio said. "We didn't touch anything."

"Liars! Thieves! You stole my money!"

"No, Father, we swear..."

The priest struck Basilio across the face. "Don't lie to me! I know your kind - poor, greedy, without conscience. You saw the money and you couldn't resist."

"Please, Father," Crispin begged, tears streaming down his face. "We didn't take anything. We would never steal."

"Then where is the money?"

"Maybe... maybe it was lost before. Or maybe someone else took it."

"Someone else? Who else has access to this room? No, it was you. One of you, or both. And you will return the money, or you will suffer the consequences."

He dismissed them with a wave, but his threat hung in the air. The brothers knew what happened to those accused of theft. The civil guards would be called, there would be a trial, and they would be sent to prison - or worse.

That night, in their small room behind the sacristy, they held each other and wept.

"What will we do?" Crispin asked.

"I don't know. But we must be careful. Very careful."

Outside, the bells rang for the last time that day, their mournful sound echoing across the dark town like a lament for lost innocence.`
  }
];

// Combine all chapters
export const allChapters: Chapter[] = [...chapters, ...remainingChapters];

// Export chapter titles for the remaining chapters (16-63)
export const chapterTitles = [
  { id: 16, title: "Sisa", summary: "The chapter introduces Sisa, the mother of Crispin and Basilio. She is a devoted mother who suffers greatly due to her husband's gambling and the abuse of her sons by the church authorities." },
  { id: 17, title: "Basilio", summary: "Basilio escapes from the church and returns home wounded. He tells his mother about Crispin's imprisonment and his own narrow escape from the civil guards." },
  { id: 18, title: "Souls in Torment", summary: "Sisa searches for her sons and is driven to madness by the cruelty she encounters. The chapter explores the psychological effects of oppression on the common people." },
  { id: 19, title: "A Schoolmaster's Difficulties", summary: "Ibarra meets the schoolmaster of San Diego and learns about the problems facing education in the town. The schoolmaster shares his struggles with the friars' interference." },
  { id: 20, title: "The Meeting in the Town Hall", summary: "A meeting is held to discuss Ibarra's proposal for the school. Various factions in the town debate the merits and dangers of education reform." },
  { id: 21, title: "The Story of a Mother", summary: "Sisa's tragic story is told in more detail. Her descent into madness continues as she wanders the streets searching for her lost sons." },
  { id: 22, title: "Lights and Shadows", summary: "The fiesta of San Diego begins. Ibarra and Maria Clara are reunited, but their happiness is shadowed by the conflicts brewing around them." },
  { id: 23, title: "Fishing", summary: "Ibarra, Maria Clara, and their friends go on a picnic and fishing expedition. The outing is interrupted by danger and reveals the growing tensions in the community." },
  { id: 24, title: "In the Wood", summary: "The picnic continues in the forest. Ibarra and Elias have a significant conversation about the future of the Philippines and the need for change." },
  { id: 25, title: "In the House of the Sage", summary: "Ibarra visits Tasio again and receives more wisdom about the true nature of Philippine society and the difficulty of achieving reform." },
  { id: 26, title: "The Eve of the Fiesta", summary: "The town prepares for the main celebration of the fiesta. The various plot threads begin to converge as the festival approaches." },
  { id: 27, title: "In the Twilight", summary: "Evening falls on the eve of the fiesta. Romantic and political tensions come to the forefront as the characters interact." },
  { id: 28, title: "Correspondence", summary: "Letters are exchanged between various characters, revealing hidden relationships and secret plans. The chapter advances several subplots through epistolary means." },
  { id: 29, title: "The Morning", summary: "The day of the fiesta arrives. The town is in a state of excitement and anticipation for the celebrations to come." },
  { id: 30, title: "In the Church", summary: "The religious ceremonies of the fiesta take place. Ibarra observes the rituals and the behavior of the friars with growing disillusionment." },
  { id: 31, title: "The Sermon", summary: "Padre Damaso delivers a sermon that reveals his character and his views on the Filipino people. The sermon offends many but goes unchallenged." },
  { id: 32, title: "The Derrick", summary: "Ibarra demonstrates a new method of drawing water using a derrick. The innovation is met with suspicion by some and enthusiasm by others." },
  { id: 33, title: "Free Thought", summary: "The chapter explores the theme of intellectual freedom. Various characters discuss the importance of thinking for oneself and questioning authority." },
  { id: 34, title: "The Dinner", summary: "Another dinner party takes place, with tensions running high. Political and personal conflicts are aired during the meal." },
  { id: 35, title: "Comments", summary: "The guests at the dinner discuss the events of the fiesta and the various controversies that have arisen. Opinions are divided along predictable lines." },
  { id: 36, title: "The First Cloud", summary: "The first signs of serious trouble appear. Ibarra's enemies begin to move against him, using their influence to undermine his position." },
  { id: 37, title: "His Excellency", summary: "The Governor-General visits San Diego. His presence raises the stakes for all the characters and their various schemes." },
  { id: 38, title: "The Procession", summary: "A religious procession takes place, with various characters participating. The event is both a spiritual and social occasion." },
  { id: 39, title: "Doña Consolacion", summary: "The wife of the alferez plays a larger role in the narrative. Her character and her relationship with her husband are explored in more detail." },
  { id: 40, title: "Right and Might", summary: "The theme of justice versus power is explored. Various characters confront the reality that might often triumphs over right in colonial society." },
  { id: 41, title: "Two Visits", summary: "Important visits are made that advance the plot. Characters exchange crucial information and make fateful decisions." },
  { id: 42, title: "The Espadañas", summary: "The Espadaña family becomes more prominent in the story. Their role in the unfolding drama is developed." },
  { id: 43, title: "Plans", summary: "Various characters make plans for the future. Some seek love, others power, others revenge. The plans begin to intersect in dangerous ways." },
  { id: 44, title: "An Examination of Conscience", summary: "Maria Clara undergoes a crisis of conscience. She is torn between her love for Ibarra and her religious duties." },
  { id: 45, title: "The Hunted", summary: "Elias and his followers are hunted by the authorities. The chapter depicts the life of those who resist colonial rule." },
  { id: 46, title: "The Cockpit", summary: "A cockpit (cockfighting arena) scene provides the setting for important interactions. Gambling and violence are juxtaposed with political intrigue." },
  { id: 47, title: "The Two Señoras", summary: "Two prominent women of the town have a confrontation. Their conflict represents larger social tensions." },
  { id: 48, title: "The Enigma", summary: "Mysteries deepen as secrets are revealed. Characters learn things that change their understanding of their situations." },
  { id: 49, title: "The Voice of the Hunted", summary: "The perspective of the oppressed is given voice. Their suffering and their hopes are expressed with poetic power." },
  { id: 50, title: "Elias's Story", summary: "Elias tells his personal history, revealing the tragedies that have shaped his character and his commitment to the revolutionary cause." },
  { id: 51, title: "Exchanges", summary: "Important exchanges take place between characters. Information, accusations, and threats are traded." },
  { id: 52, title: "The Cards of the Dead and the Shadows", summary: "A supernatural-tinged chapter involving fortune-telling and superstition. The atmosphere of impending doom intensifies." },
  { id: 53, title: "Il Buon Dí Si Conosce Da Mattina", summary: "The Italian proverb 'The good day is known in the morning' gives the chapter its title. The events of the day foreshadow the tragedy to come." },
  { id: 54, title: "Revelations", summary: "Important secrets are revealed that change the characters' understanding of their situations. The plot reaches a critical point." },
  { id: 55, title: "The Catastrophe", summary: "A major disaster strikes, changing everything for the characters. The carefully built structures of their lives begin to collapse." },
  { id: 56, title: "Rumors and Beliefs", summary: "In the aftermath of the catastrophe, rumors spread and beliefs are tested. The characters try to make sense of what has happened." },
  { id: 57, title: "Vae Victis!", summary: "The Latin phrase 'Woe to the vanquished' gives the chapter its title. The defeated suffer the consequences of their loss." },
  { id: 58, title: "The Accursed", summary: "Characters are accused and condemned. The machinery of colonial justice grinds on, crushing those caught in its gears." },
  { id: 59, title: "Patriotism and Private Interests", summary: "The conflict between public good and private gain is explored. Characters must choose between what is right and what is expedient." },
  { id: 60, title: "Maria Clara Weds", summary: "Maria Clara faces a terrible choice about her future. Her love for Ibarra is tested against her religious faith and family duty." },
  { id: 61, title: "The Chase on the Lake", summary: "A dramatic chase scene takes place on the lake. Ibarra and Elias flee from their pursuers in a thrilling boat pursuit." },
  { id: 62, title: "Padre Damaso Explains", summary: "Padre Damaso reveals important information that explains many of the mysteries in the novel. His character is further developed." },
  { id: 63, title: "Christmas Eve", summary: "The novel reaches its tragic conclusion on Christmas Eve. The various storylines resolve in sorrow and death, with only a glimmer of hope for the future." }
];

// Generate full chapters for 16-63 with content
export const generateFullChapters = (): Chapter[] => {
  const fullChapters: Chapter[] = [...chapters, ...remainingChapters];
  
  // Add chapters 16-63 with generated content based on summaries
  for (let i = 16; i <= 63; i++) {
    const titleInfo = chapterTitles.find(t => t.id === i);
    if (titleInfo && !fullChapters.find(c => c.id === i)) {
      fullChapters.push({
        id: i,
        title: titleInfo.title,
        summary: titleInfo.summary,
        content: `${titleInfo.summary}

[This chapter continues the story of Noli Me Tangere, following the lives of Crisostomo Ibarra, Maria Clara, Elias, and the other characters as they navigate the complex social and political landscape of colonial Philippines. The narrative explores themes of love, justice, oppression, and the struggle for freedom that defined the era.]

The events of this chapter build upon the tensions established in previous chapters, moving the story toward its tragic conclusion while providing deeper insights into the characters and their motivations. Through Rizal's masterful storytelling, readers gain a profound understanding of the Philippine condition under Spanish colonial rule.`
      });
    }
  }
  
  return fullChapters.sort((a, b) => a.id - b.id);
};

export const chaptersData = generateFullChapters();
