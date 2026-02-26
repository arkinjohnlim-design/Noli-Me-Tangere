export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  traits: string[];
  significance: string;
}

export const characters: Character[] = [
  {
    id: "crisostomo-ibarra",
    name: "Crisostomo Ibarra",
    role: "Protagonist",
    description: "A young Filipino who returns to the Philippines after seven years of studying in Europe. He is idealistic, educated, and determined to improve the conditions of his countrymen. He is the son of Don Rafael Ibarra, a wealthy landowner who died in prison under mysterious circumstances.",
    traits: ["Idealistic", "Educated", "Brave", "Compassionate", "Patriotic"],
    significance: "Ibarra represents the ilustrado class - educated Filipinos who sought reform through peaceful means. His journey from idealism to disillusionment mirrors the experience of many Filipinos under colonial rule."
  },
  {
    id: "maria-clara",
    name: "Maria Clara",
    role: "Female Protagonist",
    description: "The beautiful and devout daughter of Capitan Tiago. She was raised in a convent and embodies the ideal Filipino woman of her time - modest, religious, and obedient. She is betrothed to Crisostomo Ibarra and loves him deeply, but is torn between her love and her religious duties.",
    traits: ["Beautiful", "Devout", "Modest", "Loving", "Conflicted"],
    significance: "Maria Clara represents the Filipino people under colonial rule - beautiful and virtuous but constrained by the institutions that should protect her. Her tragic fate symbolizes the tragedy of the Philippines itself."
  },
  {
    id: "elias",
    name: "Elias",
    role: "Deuteragonist",
    description: "A mysterious young man who becomes Ibarra's friend and protector. He has a tragic past and has dedicated his life to fighting injustice. Unlike Ibarra, he believes that reform is impossible and that revolution is necessary.",
    traits: ["Mysterious", "Brave", "Principled", "Tragic", "Revolutionary"],
    significance: "Elias represents the revolutionary path to change. His contrast with Ibarra shows the two possible responses to colonial oppression - peaceful reform or armed revolution."
  },
  {
    id: "padre-damaso",
    name: "Padre Damaso",
    role: "Antagonist",
    description: "A Franciscan friar and former curate of San Diego. He is arrogant, cruel, and corrupt. He was responsible for the imprisonment and death of Don Rafael Ibarra and is revealed to be Maria Clara's biological father.",
    traits: ["Arrogant", "Cruel", "Corrupt", "Hypocritical", "Vindictive"],
    significance: "Padre Damaso represents the worst aspects of the Spanish friars who controlled the Philippines. He embodies the corruption and abuse of power that Rizal condemned."
  },
  {
    id: "padre-salvi",
    name: "Padre Salvi",
    role: "Antagonist",
    description: "The new curate of San Diego, replacing Padre Damaso. He is younger and more subtle than Damaso but equally dangerous. He is cunning, observant, and uses his position to manipulate others.",
    traits: ["Cunning", "Observant", "Manipulative", "Ambitious", "Ruthless"],
    significance: "Padre Salvi represents the more sophisticated methods of control used by the colonial regime. He shows that the system of oppression was not just the work of a few bad individuals but was systemic."
  },
  {
    id: "capitan-tiago",
    name: "Capitan Tiago",
    role: "Supporting Character",
    description: "A wealthy Filipino who hosts the novel's opening dinner party. He is a close friend of the friars and represents the conservative, collaborationist element of Filipino society. He is the adoptive father of Maria Clara.",
    traits: ["Wealthy", "Conservative", "Superstitious", "Status-conscious", "Weak"],
    significance: "Capitan Tiago represents the Filipino elite who collaborated with colonial rule. His character shows how the system corrupted even those who benefited from it."
  },
  {
    id: "sisa",
    name: "Sisa",
    role: "Tragic Figure",
    description: "The mother of Basilio and Crispin. She is a devoted mother who suffers terribly when her sons are taken by the church authorities. Her descent into madness is one of the novel's most tragic elements.",
    traits: ["Loving", "Devoted", "Tragic", "Victimized", "Mad"],
    significance: "Sisa represents the suffering of the Filipino masses under colonial rule. Her madness symbolizes the destruction of the Filipino family and the psychological damage of oppression."
  },
  {
    id: "basilio",
    name: "Basilio",
    role: "Supporting Character",
    description: "The elder son of Sisa, who works as a sacristan in the church. He is brave and resourceful, escaping from the church to try to save his brother Crispin.",
    traits: ["Brave", "Resourceful", "Loyal", "Young", "Victimized"],
    significance: "Basilio represents the potential of Filipino youth, crushed by the colonial system. His story continues in the sequel, El Filibusterismo."
  },
  {
    id: "crispin",
    name: "Crispin",
    role: "Supporting Character",
    description: "The younger son of Sisa, who also works as a sacristan. He is falsely accused of stealing and is tortured by the sacristan mayor. His fate is one of the novel's great tragedies.",
    traits: ["Innocent", "Young", "Trusting", "Victimized", "Tragic"],
    significance: "Crispin represents the complete innocence destroyed by colonial oppression. His fate shows that no one was safe from the abuses of the system."
  },
  {
    id: "tasio",
    name: "Pilosopo Tasio (Tasio the Philosopher)",
    role: "Wise Fool",
    description: "An old man considered mad by the townspeople because he speaks in riddles and questions accepted wisdom. In reality, he is the wisest character in the novel, seeing through the hypocrisy of colonial society.",
    traits: ["Wise", "Eccentric", "Truthful", "Misunderstood", "Philosophical"],
    significance: "Tasio represents the truth-teller in a society built on lies. His 'madness' shows how colonial society treated those who spoke the truth."
  },
  {
    id: "pilosopo-tasio",
    name: "Don Anastasio (Pilosopo Tasio)",
    role: "Mentor Figure",
    description: "Formerly a respected scholar who became disillusioned with society. He lives on the outskirts of town, studying and thinking. He provides wisdom and guidance to Ibarra.",
    traits: ["Intelligent", "Disillusioned", "Honest", "Isolated", "Insightful"],
    significance: "Tasio serves as a mentor to Ibarra, providing him with the wisdom to understand the true nature of Philippine society."
  },
  {
    id: "alferez",
    name: "The Alferez (Lieutenant)",
    role: "Antagonist",
    description: "The chief of the Civil Guard in San Diego. He is brutal, corrupt, and in constant conflict with Padre Salvi. His rivalry with the friar shows the tensions within the colonial system.",
    traits: ["Brutal", "Corrupt", "Violent", "Ambitious", "Vain"],
    significance: "The alferez represents the military arm of colonial oppression. His conflict with the friars shows that the colonial system was not monolithic but had internal rivalries."
  },
  {
    id: "dona-consolacion",
    name: "Doña Consolacion",
    role: "Supporting Character",
    description: "The wife of the alferez. She is a former laundry woman who married above her station and is obsessed with appearing aristocratic. She is cruel and vulgar.",
    traits: ["Vulgar", "Cruel", "Social-climbing", "Insecure", "Vindictive"],
    significance: "Doña Consolacion represents the worst aspects of the colonial mentality - the desire to appear Spanish and the contempt for one's own people."
  },
  {
    id: "don-rafael",
    name: "Don Rafael Ibarra",
    role: "Posthumous Character",
    description: "The father of Crisostomo Ibarra. He was a wealthy and just man who was imprisoned and died under mysterious circumstances. His death drives much of the novel's plot.",
    traits: ["Just", "Generous", "Brave", "Principled", "Tragic"],
    significance: "Don Rafael represents the best of the Filipino ilustrados - those who used their position to help others. His death shows the fate of those who challenged the system."
  },
  {
    id: "linares",
    name: "Alfonso Linares",
    role: "Supporting Character",
    description: "A young man who comes to San Diego as a potential suitor for Maria Clara. He is a relative of Padre Damaso and represents the conservative, collaborationist alternative to Ibarra.",
    traits: ["Ambitious", "Conventional", "Weak", "Opportunistic", "Jealous"],
    significance: "Linares represents the alternative to Ibarra that Maria Clara's guardians prefer - a man who accepts the colonial system rather than challenging it."
  },
  {
    id: "don-felipo",
    name: "Don Felipo",
    role: "Supporting Character",
    description: "A young liberal who serves as a teniente mayor in San Diego. He supports Ibarra's reform efforts and represents the younger generation's desire for change.",
    traits: ["Progressive", "Intelligent", "Idealistic", "Brave", "Reformist"],
    significance: "Don Felipo represents the younger generation of Filipinos who were beginning to question colonial rule and demand reform."
  },
  {
    id: "victorina",
    name: "Doña Victorina",
    role: "Comic Relief",
    description: "A ridiculous woman who pretends to be Spanish and looks down on her own people. She is married to the quack doctor Tiburcio de Espadaña.",
    traits: ["Ridiculous", "Pretentious", "Snobbish", "Comic", "Deluded"],
    significance: "Doña Victorina provides comic relief but also represents the absurdity of the colonial mentality - the desperate desire to be something one is not."
  },
  {
    id: "don-tiburcio",
    name: "Don Tiburcio de Espadaña",
    role: "Supporting Character",
    description: "A quack doctor who is married to Doña Victorina. He is lame and ridiculous but provides medical services to the town.",
    traits: ["Incompetent", "Ridiculous", "Weak", "Submissive", "Comic"],
    significance: "Don Tiburcio represents the incompetence of colonial institutions - even the medical care was provided by quacks."
  },
  {
    id: "aunt-isabel",
    name: "Aunt Isabel (Tiya Isabel)",
    role: "Supporting Character",
    description: "The cousin of Capitan Tiago who serves as Maria Clara's chaperone and companion. She is devout and conservative but genuinely cares for Maria Clara.",
    traits: ["Devout", "Conservative", "Caring", "Protective", "Traditional"],
    significance: "Aunt Isabel represents the traditional Filipino woman - devout, conservative, and protective of the younger generation."
  },
  {
    id: "sinang",
    name: "Sinang",
    role: "Supporting Character",
    description: "One of Maria Clara's friends. She is cheerful and lighthearted, providing a contrast to the more serious Maria Clara.",
    traits: ["Cheerful", "Lighthearted", "Loyal", "Youthful", "Innocent"],
    significance: "Sinang represents the innocence of youth that has not yet been corrupted by the harsh realities of colonial society."
  },
  {
    id: "idoy",
    name: "Iday",
    role: "Supporting Character",
    description: "Another of Maria Clara's friends. She is more serious than Sinang and shares Maria Clara's devout nature.",
    traits: ["Devout", "Serious", "Loyal", "Supportive", "Traditional"],
    significance: "Iday represents the religious devotion that was both a source of strength and a tool of control for Filipino women."
  },
  {
    id: "andeng",
    name: "Andeng",
    role: "Minor Character",
    description: "A servant in Capitan Tiago's household. She represents the ordinary Filipino worker.",
    traits: ["Loyal", "Hardworking", "Humble", "Devoted", "Simple"],
    significance: "Andeng represents the loyal servant class who served the Filipino elite despite their own poverty."
  },
  {
    id: "sacristan-mayor",
    name: "The Sacristan Mayor",
    role: "Minor Antagonist",
    description: "The head sacristan who supervises Basilio and Crispin. He is cruel and accuses Crispin of stealing.",
    traits: ["Cruel", "Abusive", "Corrupt", "Vindictive", "Petty"],
    significance: "The sacristan mayor represents how even minor officials in the colonial system could abuse their power."
  },
  {
    id: "pedro",
    name: "Pedro (Sisa's Husband)",
    role: "Minor Character",
    description: "The husband of Sisa and father of Basilio and Crispin. He is a gambler and drunkard who abandons his family.",
    traits: ["Irresponsible", "Cruel", "Weak", "Addicted", "Abandoner"],
    significance: "Pedro represents the breakdown of the Filipino family under colonial rule - the father who cannot fulfill his responsibilities."
  },
  {
    id: "gobernadorcillo",
    name: "The Gobernadorcillo",
    role: "Minor Character",
    description: "The Filipino mayor of San Diego. He is caught between the demands of the friars and the people.",
    traits: ["Weak", "Compromised", "Well-meaning", "Powerless", "Mediating"],
    significance: "The gobernadorcillo represents the Filipino middle class - caught between the colonial rulers and the masses."
  },
  {
    id: "captain-pablo",
    name: "Captain Pablo",
    role: "Mentioned Character",
    description: "A bandit leader who represents armed resistance to colonial rule. He is mentioned but does not appear directly in the novel.",
    traits: ["Rebellious", "Brave", "Outlaw", "Resistant", "Legendary"],
    significance: "Captain Pablo represents the tradition of armed resistance to colonial rule that would eventually lead to the Philippine Revolution."
  }
];

export const getCharacterById = (id: string): Character | undefined => {
  return characters.find(char => char.id === id);
};

export const getCharactersByRole = (role: string): Character[] => {
  return characters.filter(char => char.role.includes(role));
};
